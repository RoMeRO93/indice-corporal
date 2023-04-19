function calculate() {
  
  const nume = document.getElementById("input01").value;
  const gen = document.getElementById("input02").value;
  const greutate = parseFloat(document.getElementById("input03").value);
  const inaltime = parseFloat(document.getElementById("input04").value) / 100; //convertim in cm in metri
  

  const imc = greutate / (inaltime * inaltime);

 
  const answer = document.getElementById("answer");
  answer.innerHTML = `${nume} (${gen}) IMC: ${imc.toFixed(2)}`;
}
