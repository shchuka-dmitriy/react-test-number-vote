'use strict';

export default (sequelize, DataTypes) => {
    const Log = sequelize.define( 'Log', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        json: {
            type: DataTypes.JSON,
            allowNull: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        }
    }, {
        timestamps: true,
        updatedAt: false,
        createdAt: 'date'
    } );

    return Log;
}