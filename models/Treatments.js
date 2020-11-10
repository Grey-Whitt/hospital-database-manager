const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create model
class Treatments extends Model {};

Treatments.init(
    {
        // define columns here
        treatment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        treatment_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        treatment_cost: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                isNumeric: true
            }
        },
        treatment_description: {
            type: DataTypes.STRING(300),
            allowNull: false
        }

    },
    {
        sequelize,
        freezeTableName: true, //Makes model tableName and model have the same name
        underscored: true, //auto changes fields to snake_case
        modelName: 'treatments'
    }
)

module.exports = Treatments;