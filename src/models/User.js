import { DataTypes } from "sequelize";
import sequelize from "../database/db";

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
});

export default User;
