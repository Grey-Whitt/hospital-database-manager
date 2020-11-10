const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create model
class Visits extends Model {};

Visits.init(
    {
        // define columns
        visit_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        patient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'patient',
            //     key: 'id'
            // }
        },
        ailment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'ailments',
            //     key: 'id'
            // }
        },
        doctor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'doctors',
            //     key: 'id'
            // }
        },
        visit_note: {
            type: DataTypes.STRING, //default limit 255 characters
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true, //Makes model tableName and model have the same name
        underscored: true, //auto changes fields to snake_case
        modelName: 'visits'
    }
)

module.exports = Visits;