import Sequelize from 'sequelize';
import { sequelize } from '../../dbSequelize';

// Skills table
export const Skills = sequelize.define('skills', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  skill: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
