const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

// create model
class Users extends Model {
    checkPassword(pass) {
        return bcrypt.compareSync(pass, this.password);
    }
};

Users.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(25),
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            // before a user is created, hash and salt the password password 10 times
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },
            // before a user is updated, hash and salt the password 10 times
            async beforeUpdate(updtUser) {
                updtUser.password = await bcrypt.hash(updtUser.password, 10);
                return updtUser;
            }
        },

        sequelize,
        timestamps: false,
        freezeTableName: true, //Makes model tableName and model have the same name
        underscored: true, //auto changes fields to snake_case
        modelName: 'users'
    }
)

module.exports = Users;