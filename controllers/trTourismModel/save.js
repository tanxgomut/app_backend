const db = require('../../models');
const resultValue = require('../../models/result.model');
const tr_tourism_model = db.tr_tourism_model;

const createdata = async (req, res) => {
    try{
        const data = {
            tm_name: req.body.tm_name,
            active: 'Y',
            createDate: new Date(),
            createBy: 'system',
            updateDate: new Date(),
            updateBy: 'system'
        };
        await tr_tourism_model.create(data).then(result => {;
            resultValue.value = result;
            resultValue.code = 200; 
            resultValue.status = "Success";
            resultValue.text = "Save Success";
            res.json(resultValue);
        }).catch(err => console.error(err));
    }catch (error) {
        console.error(error);
        resultValue.code = 500;
        resultValue.status = "Error";
        resultValue.text = "Error: " + err.message;
        res.json(resultValue);
    }
}

const updatedata = async (req, res) => {
    try{
        const id = req.query.tm_id;
        const data = req.body;
        await tr_tourism_model.update(data, {where: { tm_id: id }}).then(result => {
            resultValue.value = result;
            resultValue.code = 200; 
            resultValue.status = "Success";
            resultValue.text = "Save Success";
            res.json(resultValue);
        }).catch(err => console.error(err));
    }catch (error) {
        console.error(error);
        resultValue.code = 500;
        resultValue.status = "Error";
        resultValue.text = "Error: " + error.message;
        res.json(resultValue);
    }
}

module.exports = {
    createdata,
    updatedata
}