'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoryCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StoryCategory.init({
    story_id: DataTypes.STRING,
    category_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StoryCategory',
  });
  return StoryCategory;
};