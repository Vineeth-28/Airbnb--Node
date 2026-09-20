import { sequelize } from './sequelize';
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare location: string;
  declare address: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare rating?: number | null; // Matches 'DEFAULT NULL' from migration
  declare ratingCount?: number | null; // Matches 'DEFAULT NULL' from migration
}

Hotel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'created_at', // 💡 Maps TypeScript 'createdAt' to MySQL 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'updated_at', // 💡 Maps TypeScript 'updatedAt' to MySQL 'updated_at'
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2), // Matches DECIMAL(3,2) configuration
      allowNull: true,
    },
    ratingCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'rating_count', // 💡 Maps TypeScript 'ratingCount' to MySQL 'rating_count'
    },
  },
  {
    sequelize: sequelize,
    tableName: 'hotels',
    modelName: 'Hotel',
    timestamps: true, // Tells Sequelize to handle timestamps automatically
    underscored: true, // Enforces naming conventions to look for snake_case fields
  },
);

export default Hotel;
