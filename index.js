console.log("Estamos conectados!!");

function analisisLexico() {
  //console.log("f1");
  let frase = document.getElementById("frase").value;
  //alert(frase);
  fetch("https://backend-pruebaipc.herokuapp.com/analisisLexico", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({frase: frase,}),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Ocurrio un error!')
    })
    .then((response) => {
      console.log(response)
      document.getElementById('palabras').innerHTML = `Palabras ${response.palabras}`;
      document.getElementById('vocales').innerHTML = `Vocales ${response.vocales}`;
      document.getElementById('consonantes').innerHTML = `Consonantes ${response.consonantes}`;
    })
}
function numerosPrimos() {
  //console.log("f2");
  let numInf = document.getElementById('num1').value;
  let numSup = document.getElementById('num2').value;
  fetch("https://backend-pruebaipc.herokuapp.com/numerosPrimos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "numInf": numInf,
      "numSup": numSup
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Ocurrio un error!')
    })
    .then((response) => {
      console.log(response)
      document.getElementById('primo').innerHTML = `Primos: ${response.primos}`
    })
}
function calculadoraBasica() {
  //console.log("f3");
}
function f4() {
  //console.log("f4");
}
