const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primarykey: true,
    },
    years: { 
      type: DataTypes.STRING
    },
  });
  sequelize.define('temperament', {
    temperament: {
      ID: {
        type: DataTypes.UUID,
        allowNull: false,
        primarykey: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
  });
};
