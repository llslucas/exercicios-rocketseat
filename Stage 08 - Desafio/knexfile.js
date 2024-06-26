import path from 'path';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const knexConfig = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault : true
  }
};

export default knexConfig;