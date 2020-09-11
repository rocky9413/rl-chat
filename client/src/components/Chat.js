import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from './InfoBar';
import Messages from './Messages';
import Input from './Input';
import TextContainer from './TextContainer';

// import useToggler from '../hooks/useToggler';
import styled from 'styled-components';
import { styledColor } from './styledColor';

// @media (min-width: 320px) and (max-width: 480px) {
//   .outerContainer {
//     height: 100%;
//   }
//   .container {
//     width: 100%;
//     height: 100%;
//   }
// }
// @media (min-width: 480px) and (max-width: 1200px) {
//   .container {
//     width: 60%;
//   }
// }

const StyledDiv = styled.div`
  // width: 760px;
  // margin: auto;
  // background-color: ${styledColor.dark};
  // color: ${styledColor.fontColor};
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1d;
  padding: 20px;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  color: white;
  height: 75%;
  width: 35%;
  justify-content: space-between;
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  background: #ffffff;
  border-radius: 10px;
  height: 75%;
  width: 65%;
`;

let socket; // declare socket

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // change ENDPOINT to server address
  const ENDPOINT = 'localhost:3000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    // sending join event with name and room
    socket.emit('join', { name, room }, (error) => {
      if (error) alert(error);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [message]);

  //function for sending messages
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(message, messages);

  return (
    <StyledRow>
      <StyledLeft>
        <TextContainer users={users} />
      </StyledLeft>
      <StyledRight>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </StyledRight>
    </StyledRow>
  );
};

export default Chat;
