module.exports = (sequelize, DataTypes) => {

  const Accounts = sequelize.define("Accounts", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  return Accounts;
}