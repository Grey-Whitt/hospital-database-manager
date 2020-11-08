const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

class Doctors extends Model{
    //this will be used to validate passwords when a doctor is logging in
    checkPassword(pass) {
        return bcrypt.compareSync(pass, this.password);
    }
};

Doctors.init(
    {
        doctor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        doctor_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        doctor_password: {
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
            async beforeCreate(newDoctor) {
                newDoctor.password = await bcrypt.hash(newDoctor.password, 10);
                return newDoctor;
            },
            // before a user is updated, hash and salt the password 10 times
            async beforeUpdate(updtDoctor) {
                updtDoctor.password = await bcrypt.hash(updtDoctor.password, 10);
                return updtDoctor;
            }
        },

        sequelize,
        freezeTableName: true, //Makes model tableName and model have the same name
        underscored: true, //auto changes fields to snake_case
        modelName: 'doctors'
    }
)