const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 sequelize.define('Dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed_group:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_min:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    weight_max: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    height_min: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    height_max:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image_url:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: { 
      type: DataTypes.STRING
    },
    temperament: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
  });
};


/*{
  "name" : "jorge",
  "weight_min": "8",
  "weight_max" : "15",
  "height_min": "10",
  "height_max": "20",
  "life_span": "3",
  "breed_group": "carlos",
  "image_url": "http://googlew",
  "temperament":[socialbe, pelotudo]
}*/