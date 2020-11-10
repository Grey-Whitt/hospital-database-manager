const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create model
class Ailments extends Model {};

Ailments.init(
    {
        //define columns here
        ailment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ailment_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        ailment_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        treatment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'treatments',
                key: 'treatment_id'
            }
        }
        
    },
    {
        sequelize,
        freezeTableName: true, //Makes model tableName and model have the same name
        underscored: true, //auto changes fields to snake_case
        modelName: 'ailments'  
    }
)

module.exports = Ailments;