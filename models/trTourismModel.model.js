module.exports = (sequelize, DataTypes) => {
    const TrTourismModel = sequelize.define('tr_tourism_model',{
        tm_id:      {  primaryKey: true, autoIncrement: true, allowNull: false , type: DataTypes.INTEGER},
        tm_name:    {  type: DataTypes.STRING(100),  allowNull: true},
        active:     {  type: DataTypes.STRING(1),  allowNull: true },
        createDate: {  type: DataTypes.DATE,  allowNull: true },
        createBy:   {  type: DataTypes.STRING(50),  allowNull: true },
        updateDate: {  type: DataTypes.DATE,  allowNull: true },
        updateBy:   {  type: DataTypes.STRING(50),  allowNull: true },
    }, {tableName: 'tr_tourism_model', timestamps: false});
    return TrTourismModel;
};
