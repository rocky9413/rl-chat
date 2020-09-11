import { Skills } from '../apiModel';
import SequelizeMock from 'sequelize-mock';

describe('Sequelize Mock', () => {
  const dbMock = new SequelizeMock();
  const SkillMock = dbMock.define(
    'skills',
    {
      id: 1,
      skill: 'React'
    },
    {
      instanceMethods: {
        getSkill: function() {
          return this.get('skill');
        }
      }
    }
  );

  it('should return', done => {
    SkillMock.findOne({
      where: {
        id: 1
      }
    })
      .then(data => {
        // data.get('id'); // data.get('skill'); // data.getSkill();
        // data.getGroup(); // Will return a `GroupMock` object
        expect(data.dataValues.id).toBe(1);
        expect(data.dataValues.skill).toEqual('React');
        done();
      })
      .catch(done);
  });
});
