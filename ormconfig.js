const dotenv = require('dotenv');

dotenv.config();

const {
  DATABASE_TYPE,
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_NAME,
} = process.env;

module.exports = {
  type: DATABASE_TYPE,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  migrations: ['dist/migration/*{.ts,.js}'],
  entities: ['dist/**/*.entity{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migration',
  },
};
