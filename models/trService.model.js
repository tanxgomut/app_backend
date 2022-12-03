module.exports = (sequelize, DataTypes) => {
    const TrService = sequelize.define('tr_service',{
        service_id:      {  primaryKey: true, autoIncrement: true, allowNull: false , type: DataTypes.INTEGER},
        service_name:    {  type: DataTypes.STRING(100),  allowNull: true},
        active:     {  type: DataTypes.STRING(1),  allowNull: true },
        createDate: {  type: DataTypes.DATE,  allowNull: true },
        createBy:   {  type: DataTypes.STRING(50),  allowNull: true },
        updateDate: {  type: DataTypes.DATE,  allowNull: true },
        updateBy:   {  type: DataTypes.STRING(50),  allowNull: true },
    }, {tableName: 'tr_service', timestamps: false});
    return TrService;
};