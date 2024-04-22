# Steps to setup Postgres - Mostly unrelated 'cause in the project we're using `Sequelize`

---

- To reset the id sequence in PostgreSQL so that new records start again from id = 1, we can use the `ALTER SEQUENCE` command:

```sql
-- Find the name of the sequence
SELECT pg_get_serial_sequence('users', 'id');

-- Reset the sequence to start from 1
-- Replace 'users_id_seq' with the name of the sequence obtained from the previous query
-- Replace '1' with the desired starting value
ALTER SEQUENCE users_id_seq RESTART WITH 1;
```

---

## Steps

1. Run `npm i pg`
2. Add the following `helper commands` to `package.json`

```js
"main": "server.js",
  "scripts": {
    "pg:init": "pg_ctl init -D data",
    "pg:start": "pg_ctl -D data start",
    "pg:createdb": "createdb -h 127.0.0.1 <INSERT_DATABASE_NAME>",
    "pg:stop": "pg_ctl -D data stop",
  },
  "keywords": [],
```

---

**How they help:**

- `pg:init`: which will initialize the data directory where PostgreSQL will store our data.
- `pg:start`: which will start the PostgreSQL server.
- `pg:createdb`: which will create a PostgreSQL database on the server.
- `pg:stop`: which will stop the PostgreSQL server.

---

3. Next, to initialize our PostgreSQL server, run: `npm run pg:init`
4. After the success message, we want to start the server up: `npm run pg:start`
5. Finally, to create our database we want to run: `npm run pg:createdb`

_Sources:_

1. https://node-postgres.com/
2. https://cheatcode.co/blog/how-to-use-postgresql-with-node-js
