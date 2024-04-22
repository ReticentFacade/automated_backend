import { Model, DataTypes } from "sequelize";
import sequelize from "../db/postgres.db.js";

class User extends Model {}

User.init(
  {
    //   roleId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     defaultValue: 2,
    //   },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Sequelize instance:
    sequelize,
    freezeTableName: true,
    tableName: "users",
    modelName: "User",
    timeStamps: true, // <---- ----> false
  }
);

// the defined model is the class itself - optional line ofc
console.log(User === sequelize.models.User);

export default User;
