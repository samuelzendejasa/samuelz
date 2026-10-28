function calcular() {
  let puesto = document.getElementById("puesto").value;
  let nivel = document.getElementById("nivel").value;
  let hrs = parseFloat(document.getElementById("hrs").value) || 0;
  
  let precio = 0;

  if (puesto === "Diseñador") {
    if (nivel === "Newbie") precio = 120;
    if (nivel === "Jr") precio = 180;
    if (nivel === "Sr") precio = 250;
  } else if (puesto === "Programador") {
    if (nivel === "Newbie") precio = 120;
    if (nivel === "Jr") precio = 240;
    if (nivel === "Sr") precio = 310;
  } else if (puesto === "Lider") {
    if (nivel === "Newbie") precio = 190;
    if (nivel === "Jr") precio = 520;
    if (nivel === "Sr") precio = 890;
  }

  let total = precio * hrs;

  document.getElementById("total").value = "$ " + total;
  
  let cadenaB = "Tarifa por hora: $" + precio + " | Total a pagar: $" + total;
  document.getElementById("impB").innerHTML = cadenaB;
}