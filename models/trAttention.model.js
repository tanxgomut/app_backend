module.exports = (sequelize, DataTypes) => {
    const TrAttention = sequelize.define('tr_attention',{
        attention_id: {  primaryKey: true, autoIncrement: true, allowNull: false , type: DataTypes.INTEGER},
        member_id:    {  type: DataTypes.INTEGER,  allowNull: true},
        culture:    {  type: DataTypes.STRING(100),  allowNull: true},
        nature:    {  type: DataTypes.STRING(100),  allowNull: true},
        special:    {  type: DataTypes.STRING(100),  allowNull: true},
        active:     {  type: DataTypes.STRING(1),  allowNull: true },
        createDate: {  type: DataTypes.DATE,  allowNull: true },
        createBy:   {  type: DataTypes.STRING(50),  allowNull: true },
        updateDate: {  type: DataTypes.DATE,  allowNull: true },
        updateBy:   {  type: DataTypes.STRING(50),  allowNull: true },
    }, {tableName: 'tr_attention', timestamps: false});
    return TrAttention;
};