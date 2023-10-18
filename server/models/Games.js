module.exports = (sequelize, DataTypes) => {

  const Games = sequelize.define("Games", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    playerLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    playerCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })

  return Games;
}