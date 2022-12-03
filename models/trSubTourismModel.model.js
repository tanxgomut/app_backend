module.exports = (sequelize, DataTypes) => {
    const TrSubTourismModel = sequelize.define('tr_sub_tourism_model',{
        stm_id:      {  primaryKey: true, autoIncrement: true, allowNull: false , type: DataTypes.INTEGER},
        tm_id:    {  type: DataTypes.INTEGER,  allowNull: true},
        stm_name:    {  type: DataTypes.STRING(100),  allowNull: true},
        active:     {  type: DataTypes.STRING(1),  allowNull: true },
        createDate: {  type: DataTypes.DATE,  allowNull: true },
        createBy:   {  type: DataTypes.STRING(50),  allowNull: true },
        updateDate: {  type: DataTypes.DATE,  allowNull: true },
        updateBy:   {  type: DataTypes.STRING(50),  allowNull: true },
    }, {tableName: 'tr_sub_tourism_model', timestamps: false});
    return TrSubTourismModel;
};