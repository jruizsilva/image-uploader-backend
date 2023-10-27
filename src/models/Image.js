import { DataTypes } from "sequelize";
import sequelize from "../database/db";

const Image = sequelize.define("image", {
  url: DataTypes.TEXT,
  public_id: DataTypes.TEXT,
});

export default Image;
