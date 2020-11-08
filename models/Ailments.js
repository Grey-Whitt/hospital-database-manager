const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create model
class Ailments extends Model {};

Treatments.init(
    {
        //define columns here
        
    },
    {
        sequelize,
        freezeTableName: true, //Makes model tableName and model have the same name
        underscored: true, //auto changes fields to snake_case
        modelName: 'ailments'  
    }
)