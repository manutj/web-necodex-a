//ARCHIVO DE MIGRACIONES, DONDE SE ENCUENTRAN LOS ESQUEMAS PARA CREAR Y ELIMINAR ENTIDADES

//Esta funcion nos sirve para crear tablas, columnas, constrainst, etc
exports.up = function(knex) {
  return knex.schema.createTable("person", (table)=>{
    table.increments("id").primary();
    table.string("email").notNullable().unique()
    table.string("first_name").notNullable()
    table.string("last_name").notNullable()
    table.timestamps(true,true)
  })
};

//Esta funcion nos sirve para eliminar las tablas que se crear en el exports.up
exports.down = function(knex) {
  return knex.schema.dropTable("person")
};
