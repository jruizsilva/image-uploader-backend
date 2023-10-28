import { Sequelize } from 'sequelize'

const sequelize =
  process.env.NODE_ENV === 'production'
    ? new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
          ssl: {
            require: true
          }
        },
        dialect: 'postgres'
      })
    : new Sequelize({
        username: 'postgres',
        password: 'admin',
        host: 'localhost',
        database: 'image_uploader',
        port: 5432,
        dialect: 'postgres',
        logging: false
      })

// const sequelize = new Sequelize({
//   database: deploy.database,
//   username: deploy.username,
//   password: deploy.password,
//   host: deploy.host,
//   dialect: "postgres",
//   logging: false,
//   pool: {
//     max: 3,
//     min: 1,
//     idle: 10000,
//   },
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//     keepAlive: true,
//   },
//   ssl: true,
// });

export default sequelize
