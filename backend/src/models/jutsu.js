module.exports = (sequelize, DataTypes) => {
  const Jutsu = sequelize.define('Jutsu', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    classification: DataTypes.STRING,
    rank: DataTypes.STRING,
    element: DataTypes.STRING,
    type: DataTypes.STRING,
    handstamp: DataTypes.STRING,
    class: DataTypes.STRING,
    reach: DataTypes.STRING,
    parents: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  })

  Jutsu.associate = function (models) {
    Jutsu.hasMany(models.GroupJutsusStamp, { as: 'groupjutsusstamp' })
    Jutsu.belongsToMany(models.Character, { through: 'CharactersJutsu', foreignKey: 'jutsuId', as: 'characters' })
    Jutsu.belongsToMany(models.Classification, { through: 'JutsusClassification', foreignKey: 'jutsuId', as: 'classifications' })
    Jutsu.belongsToMany(models.Class, { through: 'JutsusClass', foreignKey: 'jutsuId', as: 'classes' })
    Jutsu.belongsToMany(models.Element, { through: 'JutsusElement', foreignKey: 'jutsuId', as: 'elements' })
  }

  return Jutsu
}
