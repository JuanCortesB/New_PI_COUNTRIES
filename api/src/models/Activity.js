const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4
        
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: ["1", "2", "3", "4", "5"]
      // allowNull: false,
    },
    duration: {
      type: DataTypes.STRING   ,
      // allowNull: false,
    },
    season: {
      type: DataTypes.ENUM,
      values: ["primavera", "otoño", "invierno", "verano"],
    //   allowNull: false,
    },
},
    {
        timestamps: false,
        
      })
  ;
};
