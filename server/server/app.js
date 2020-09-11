import express from 'express';
import socketio from 'socket.io';
import http from 'http';
import cors from 'cors';

// import path from 'path';

// import { sequelize } from './dbSequelize';
import router from './routes/router';
import {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} from './controllers/userController';

export const app = express();
const server = http.createServer(app);
const io = socketio(server); // create instance of socketio

// handle cors | parsing request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router); // serving api routers

// serve the bundle.js as a static file
// app.use(express.static(path.resolve(__dirname, '../dist')));

// serving index.html // setting header | status | file
// app.get('/', (req, res) => { res.set({ 'Content-Type': 'text/html', charset: 'UTF-8' })
//     .status(200).sendFile(path.resolve(__dirname, '../src/index.html'));  });

io.on('connection', (socket) => {
  // receive/listen join event from client side
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) callback(error); // error handling

    const welcome = `${user.name}, welcome to the room ${user.room}`;
    const joinTxt = `${user.name}, had joined!`;

    // emit welcome message to new user
    socket.emit('message', { user: 'admin', text: welcome });

    // broadcast to every socket in the room excluding the sender
    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: joinTxt });

    // use join to subscribe the socket to a given channel
    socket.join(user.room);

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    const leftText = `${user.name} has left.`;
    if (user) {
      io.to(user.room).emit('message', { user: 'admin', text: leftText });
    }
  });
});

// catch-all route handler for any requests to an unknown route
// eslint-disable-next-line no-unused-vars
// app.use('/*', (req, res, next) => res.status(404).send());

// Global error handler
// eslint-disable-next-line no-unused-vars
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, { ...err });
//   console.log(errorObj.log);
//   res.status(errorObj.status).send(errorObj.message.err);
// });

export const runServer = async () => {
  try {
    // await sequelize
    //   .sync({ logging: false })
    //   .then(() => console.log('sql connected.'));

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, console.log(`Server listen on port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};
