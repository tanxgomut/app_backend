const db = require('../../models');
const resultValue = require('../../models/result.model');
const tr_tourism_model = db.tr_tourism_model;
const db_sql = require('../../config/db_sql');
const { QueryTypes } = require('sequelize');

const findAll = async (req, res) => {{
    try {
        const result = await tr_tourism_model.findAll({});
        resultValue.value = result;
        resultValue.code = 200; 
        resultValue.status = "Success";
        resultValue.text = "Save Success";
        res.json(resultValue);
    } catch (error) {
        console.error(error);
        resultValue.code = 500;
        resultValue.status = "Error";
        resultValue.text = "Error: " + err.message;
        res.json(resultValue);
    }
}};

const findSQL = async (req, res) => {{
    try{
        let sql = " ";
        sql += " SELECT tm.*, stm.* "
        sql += " FROM `tr_tourism_model` tm";
        sql += " left join tr_sub_tourism_model stm ON stm.tm_id = tm.tm_id";
        sql += " WHERE stm_id = 1";
        const result = await db_sql.query(sql, { type: QueryTypes.SELECT }).catch(err => { console.error(err); throw err; });
        resultValue.value = result;
        resultValue.code = 200; 
        resultValue.status = "Success";
        resultValue.text = "Save Success";
        res.json(resultValue);
    }catch(error){
        console.error(error);
        resultValue.code = 500;
        resultValue.status = "Error";
        resultValue.text = "Error: " + err.message;
        res.json(resultValue);
    }
}};

module.exports = {
    findAll,
    findSQL
}