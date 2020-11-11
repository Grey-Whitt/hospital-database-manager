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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'user_id'
            }
        },
        doctor_bio: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        doctor_specialty: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        doctor_education: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true, //Makes model tableName and model have the same name
        underscored: true, //auto changes fields to snake_case
        modelName: 'doctors'
    }
)

module.exports = Doctors;