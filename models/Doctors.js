const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Doctors extends Model{};

Visits.init(
    {
        
    },
    {
        sequelize,
        freezeTableName: true, //Makes model tableName and model have the same name
        underscored: true, //auto changes fields to snake_case
        modelName: 'visits'
    }
)