const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de la tarea por hacer",
};

const completado = {
  alias: "c",
  default: true,
  desc: "Marcar como completado",
};
//====================================================//
const argv = require("yargs")
  .command("crear", "Crear un elemento", {
    descripcion,
  })
  .command("borrar", "Crear un elemento", {
    descripcion,
  })
  .command("actualizar", "Actualizar el estado de una tarea", {
    descripcion,
    completado,
  })
  .help().argv;

//-----------------------------------------------------//
module.exports = {
  argv,
};
