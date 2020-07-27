/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customer', {
		customer_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		store_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'store',
				},
				key: 'store_id'
			}
		},
		first_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		address_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'address',
				},
				key: 'address_id'
			}
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		},
		create_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'customer',
		hasTrigger: true
	});
};
