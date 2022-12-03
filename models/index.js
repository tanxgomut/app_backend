const dbConfig = require('../config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tr_tourism_model = require('./trTourismModel.model')(sequelize, DataTypes);
db.tr_sub_tourism_model = require('./trSubTourismModel.model')(sequelize, DataTypes);
db.tr_attention = require('./trAttention.model')(sequelize, DataTypes);
db.tr_service = require('./trService.model')(sequelize, DataTypes);

db.sequelize.sync({force: false}).then(() => {
    console.log("Drop and re-sync db");
});

// console.log(sequelize.models.tr_tourism_model); 

module.exports = db;