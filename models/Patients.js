const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

// create model
class Patients extends Model {
    checkPassword(pass) {
        return bcrypt.compareSync(pass, this.password);
    }
};


Patients.init(
    {
        patient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        patient_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        patient_phone: {
            type: DataTypes.INTEGER(11),
            validate: {
                isNumeric: true
            }
        },
        patient_password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            // before a user is created, hash and salt the password password 10 times
            async beforeCreate(newPatient) {
                newPatient.password = await bcrypt.hash(newPatient.password, 10);
                return newPatient;
            },
            // before a user is updated, hash and salt the password 10 times
            async beforeUpdate(updtPatient) {
                updtPatient.password = await bcrypt.hash(updtDoctor.password, 10);
                return updtDoctor;
            }
        },

        sequelize,
        freezeTableName: true, //Makes model tableName and model have the same name
        underscored: true, //auto changes fields to snake_case
        modelName: 'patients'
    }
)

module.exports = Patients;