const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "databse.db"
    }
});

module.exports = connectedKnex;
