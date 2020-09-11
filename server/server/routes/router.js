import { Router } from 'express';
// import { addSkills, getOneById, getAll } from '../skillController';

const router = Router();

router.get('/', (req, res) => {
  res.send('server is up and running');
});

// router.get('/getskill', (req, res) => {
//   res.status(200).send({
//     characters: res.locals.characters,
//     favs: res.locals.favs
//   });
// });

// router.get('/getOne/:id', getOneById);
// router.get('/getAll', getAll);

// add skills to Skills table manually | not use
// router.get('/sk', addSkills);

export default router;
