module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    creator: DataTypes.STRING, // email of drexel student that made this project
    skills: DataTypes.STRING,
    description: DataTypes.TEXT
  })
  return Project
}
