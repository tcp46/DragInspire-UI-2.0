module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING, // email of drexel student that made this project
    graduation_year: DataTypes.STRING,
    college: DataTypes.STRING,
    major: DataTypes.STRING,
    skills: DataTypes.STRING
  })
  return Profile
}
