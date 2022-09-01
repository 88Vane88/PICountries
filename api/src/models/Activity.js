const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    seasons: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      allowNull: false,
    },
    /*     countries: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }, */
    createdInDb: {
      // para acceder mas facil despues
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
/* 
Actividad Turística con las siguientes propiedades:
ID
Nombre
Dificultad (Entre 1 y 5)
Duración
Temporada (Verano, Otoño, Invierno o Primavera) */
