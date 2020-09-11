// import { Books, BookOuts, Skills } from '../models/apiModel';

const users = [];

export const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (!name || !room) return { error: 'Username and room are required.' };
  if (existingUser) return { error: 'Username is taken' };

  const user = { id, name, room };

  users.push(user);
  return { user };
};

export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
};

export const getUser = (id) => users.find((user) => user.id === id);

export const getUsersInRoom = (room) =>
  users.filter((user) => user.room === room);

// ==========================================

// initial skills added
export const addSkills = async (req, res) => {
  const { skill } = req.body;
  //   console.log('Book entered: ', ISBN, title);
  try {
    const result = await Skills.create({ skill });
    res.status(201).json({ data: result });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getOneById = async (req, res) => {
  // const { id } = req.body;
  // console.log('req params =>', req.params);
  const { id } = req.params;
  try {
    const findSkill = await Skills.findOne({
      where: { id },
    });
    if (!findSkill) {
      return res
        .status(400)
        .send({ notExist: 'can not find the skillset!' })
        .end();
    }
    res.status(200).json(findSkill.dataValues);
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

export const getAll = async (req, res) => {
  try {
    const result = await Skills.findAll({});
    const data = [];
    result.map((el) => data.push(el.dataValues));
    if (!data.length) {
      return res
        .status(400)
        .json({ notExist: 'can not find the skillset!' })
        .end();
    } else {
      res.status(200).json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

// Remove Book by librarian by enter id in body
export const removeBook = async (req, res) => {
  const { id } = req.body;
  //   console.log('id entered: ', id);
  try {
    const removed = await Books.destroy({ where: { id } });
    res.status(201).json({ bookRemoved: removed });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

// Librarian to get list of overdue books
export const overdueBook = async (req, res) => {
  try {
    const result = await BookOuts.findAll();

    // addDays prototype to add 14 days to updatedAt time
    Date.prototype.addDays = function (days) {
      let date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    const data = [];
    // filter overdue books
    for (let i = 0; i < result.length; ++i) {
      if (result[i].dataValues.updatedAt.addDays(14) < Date.now()) {
        data.push(result[i].dataValues);
      }
    }

    if (!data.length) {
      res.status(201).json({ overdue: 'There are no overdue books!' });
    } else {
      res.status(201).json(data);
    }
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

// Enter username and ISBN in req.body to checkout a book
export const checkBook = async (req, res) => {
  const { ISBN } = req.body;
  try {
    const result = await BookOuts.findAll({
      where: { available: res.locals.name },
    });

    // addDays prototype to add 14 days to updatedAt time
    Date.prototype.addDays = function (days) {
      let date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    let overdue = false;
    for (let i = 0; i < result.length; ++i) {
      // console.log('result => ', result.length);
      if (result[i].dataValues.updatedAt.addDays(14) < Date.now()) {
        overdue = true;
      }
    }
    // console.log('result length => ', result.length);
    // console.log('overdue => ', overdue);

    // condition for user to checkout new book with no overdue
    if (result.length < 3 && overdue === false) {
      // find if book exist in library
      const checkoutBook = await Books.findOne({
        where: { ISBN },
      });

      // console.log('checkoutBook', checkoutBook);

      // save checkout book to BookOuts table
      BookOuts.create({
        id: checkoutBook.dataValues.id,
        ISBN,
        title: checkoutBook.dataValues.title,
        available: res.locals.name,
      });

      // remove checkouted book from library
      const removed = await Books.destroy({
        where: { id: checkoutBook.dataValues.id },
      });
      res.status(201).json({ checkoutBook: checkoutBook.dataValues.title });
    } else {
      res.status(201).json({ data: 'You have reach max or you have overdue!' });
    }
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

// Enter username and ISBN in req.body to return a book
export const returnBook = async (req, res) => {
  const { ISBN } = req.body;
  try {
    // find the book that user wants to return from BookOuts table
    const result = await BookOuts.findAll({
      where: { ISBN, available: res.locals.name },
    });

    if (!result.length) {
      res.status(201).json({ data: 'You have enter wrong ISBN!' });
    }
    // console.log('return find => ', result.length);

    // return Book with same ISBN to Books table
    for (let i = 0; i < result.length; ++i) {
      await Books.create({
        id: result[i].dataValues.id,
        ISBN,
        title: result[i].dataValues.title,
        available: 'true',
      });
      // remove Books from BookOuts table
      await BookOuts.destroy({
        where: { id: result[i].dataValues.id },
      });
    }
    res.status(201).json({ data: 'You have return the books!' });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
