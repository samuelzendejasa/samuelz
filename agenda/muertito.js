function ejecutar() {
  // Capturamos los valores de los inputs y los convertimos a números
  let muertes = [
    parseFloat(document.getElementById("d1").value) || 0,
    parseFloat(document.getElementById("d2").value) || 0,
    parseFloat(document.getElementById("d3").value) || 0,
    parseFloat(document.getElementById("d4").value) || 0,
    parseFloat(document.getElementById("d5").value) || 0,
    parseFloat(document.getElementById("d6").value) || 0,
    parseFloat(document.getElementById("d7").value) || 0
  ];

  let suma = 0;
  let filasTabla = "";

  for (let i = 0; i < muertes.length; i++) {
    let val = muertes[i];
    suma += val;

    filasTabla += `
      <tr>
        <td>Día ${i + 1}</td>
        <td>${val}</td>
      </tr>
    `;
  }

  let promedio = (suma / muertes.length).toFixed(2);
  let min = Math.min(...muertes);
  let max = Math.max(...muertes);

  let cadenaB = `
    <br>
    <h>Promedio:</h> ${promedio}<br>
    <h>Máximo:</h> ${max}<br>
    <h>Mínimo:</h> ${min}
  `;

  document.getElementById("impB").innerHTML = cadenaB;
}