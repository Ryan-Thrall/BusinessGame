module.exports = (sequelize, DataTypes) => {

  const Players = sequelize.define("Players", {
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  })

  return Players;
}