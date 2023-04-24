function gerarTabuada() {
    const operacao = document.getElementById("operacao").value;
    const num = parseInt(document.getElementById("numero").value);
  
    let tabuada = "";
  
    for (let i = 1; i <= 10; i++) {
      let resultado;
  
      if (operacao === "soma") {
        resultado = num + i;
        tabuada += `<tr><td>${num} + ${i} =</td><td>${resultado}</td></tr>`;
      } else if (operacao === "subtracao") {
        resultado = num - i;
        tabuada += `<tr><td>${num} - ${i} =</td><td>${resultado}</td></tr>`;
      } else if (operacao === "multiplicacao") {
        resultado = num * i;
        tabuada += `<tr><td>${num} x ${i} =</td><td>${resultado}</td></tr>`;
      } else if (operacao === "divisao") {
        resultado = num / i;
        tabuada += `<tr><td>${num} / ${i} =</td><td>${resultado}</td></tr>`;
      } else {
        resultado = Math.pow(num, i);
        tabuada += `<tr><td>${num} ^ ${i} =</td><td>${resultado}</td></tr>`;
      }
    }
  
    document.getElementById("tabuada").innerHTML = tabuada;
  }
  