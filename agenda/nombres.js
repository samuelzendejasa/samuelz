function ejecutar() {
  let alumnos = [];

  alert("Ingresa 10 nombres de alumnos:");
  for (let i = 0; i < 10; i++) {
    let nombre = prompt("Nombre del alumno " + (i + 1) + ":");
    alumnos.splice(alumnos.length, 0, nombre);
  }

  let borrar = prompt("Lista actual: " + alumnos.join(", ") + "\nEscribe el nombre del alumno que quieres eliminar:");

  let posicion = alumnos.indexOf(borrar);
  if (posicion !== -1) {
    alumnos.splice(posicion, 1);
    alert("Alumno eliminado con éxito.");
  } else {
    alert("No se encontró ese alumno.");
  }

  let cadenaB = "<strong>Lista final de alumnos:</strong><br>";
  for (let i = 0; i < alumnos.length; i++) {
    cadenaB += (i + 1) + ". " + alumnos[i] + "<br>";
  }

  document.getElementById("impB").innerHTML = cadenaB;
}