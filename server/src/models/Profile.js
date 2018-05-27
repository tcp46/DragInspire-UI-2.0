module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING, // email of drexel student that made this project
    gradYear: DataTypes.STRING,
    college: DataTypes.STRING,
    major: DataTypes.STRING,
    skills: DataTypes.STRING
  })
  return Profile
}
