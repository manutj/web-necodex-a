//ARCHIVO DE MIGRACIONES, DONDE SE ENCUENTRAN LOS ESQUEMAS PARA CREAR Y ELIMINAR ENTIDADES

const { table } = require("../db");

//Esta funcion nos sirve para crear tablas, columnas, constrainst, etc
exports.up = function(knex) {
  return knex.schema.createTable("person", (table)=>{
    table.increments("id").primary();
    table.string("email").notNullable().unique()
    table.string("first_name").notNullable()
    table.string("last_name").notNullable()
    table.timestamps(true,true)
  })

  .createTable("customer", (table)=>{
    table.increments("customer_id").primary("customer_id", {
      constraintName: "customer_primary_key"
    });
    table.string("first_name", 20).notNullable()
    table.string("last_name", 20).notNullable()
  })

  .createTable("staff", (table)=>{
    table.increments("staff_id").primary("staff_id", {
      constraintName: "satff_primary_key"
    });
    table.string("first_name", 20).notNullable()
    table.string("last_name", 20).notNullable()
  })

  .createTable("payment", (table)=>{
    table.increments("payment_id").primary("payment_id", {
      constraintName: "payment_primary_key"
    });
    table.decimal("amount", 255).notNullable()
    table.timestamp("payment_date")
    .defaultTo(knex.fn.now())
    .notNullable()

    table.integer("customer_id")
    .references("customer_id")
    .inTable("customer")

    table.integer("staff_id")
    .references("staff_id")
    .inTable("staff")
  })
};


//Esta funcion nos sirve para eliminar las tablas que se crear en el exports.up
exports.down = function(knex) {
  return knex.schema.dropTable("person")
  .dropTable("customer")
  .dropTable("staff")
  .dropTable("payment")
};
