/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('actor', {
		actor_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		first_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'actor'
	});
};
