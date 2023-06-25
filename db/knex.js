const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "cars.db"
    }
});

module.exports = connectedKnex;
