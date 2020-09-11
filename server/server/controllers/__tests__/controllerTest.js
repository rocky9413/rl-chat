import { getOneById } from '../userController';
import { Skills } from '../../routes/api/apiModel';
// import SequelizeMock from 'sequelize-mock';

describe('crud controllers', () => {
  describe('getOneById', () => {
    test('find one by id', async () => {
      // expect.assertions(1);
      //   const result = await Skills.create({ id: 5, skill: 'React' });
      //   const req = { body: { id: result.id } };
      //   const res = {
      //     status(status) {
      //       expect(status).toBe(200);
      //       return this;
      //     },
      //     end() {
      //       expect(true).toBe(true);
      //     }
      //   };
      //   await getOneById(Skills)(req, res);
    });

    // test('404 if not found', async () => {
    //   expect.assertions(2);
    //   const req = { body: { id: 5 } };
    //   const res = {
    //     status(status) {
    //       expect(status).toBe(400);
    //       return this;
    //     },
    //     end() {
    //       expect(true).toBe(true);
    //     }
    //   };
    //   await getOneById(Skills)(req, res);
    // });
  });
});
