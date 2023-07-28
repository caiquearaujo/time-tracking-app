# Database

All data is stored at a MySQL database. It may change on future, for now, this application uses [Flyway](https://documentation.red-gate.com/fd/flyway-documentation-138346877.html) to handle migrations. Follow the instructions below to publish them:

1. Copy the `flyway.sample.conf` to `flyway.conf` file and fix settings to connect with a MySQL database;
2. On current root folder, run `flyway info` to check configurations and migrations state;
3. Then, run `flyway migrate` to publish all migrations.

> See in the [packages/docs](../docs) folder all documentation related to database.