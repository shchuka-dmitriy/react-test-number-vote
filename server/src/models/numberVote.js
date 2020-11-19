'use strict';

export default (sequelize, DataTypes) => {
    const NumberVote = sequelize.define( 'NumberVote', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 9
            }
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

    return NumberVote;
}