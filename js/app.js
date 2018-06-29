const calculadora = new Calculadora();

function Calculadora(){
  this.gvisor = 'undefined';
  this.goper = 'undefined';
  this.gvalor = 'undefined';
  this.calcNum = (num) => {
    if (typeof this.gvisor == 'undefined') {
      document.getElementById("display").innerHTML = '0';
    }
    if(document.getElementById("display").innerHTML.length >=8) return;
    document.getElementById("display").innerHTML = parseFloat(document.getElementById("display").innerHTML + num);
    this.gvisor = 1;
  };
  this.calcLimpar = () => {
    document.getElementById("display").innerHTML = '0';
    delete gvalor;
    delete goper;
    delete gvisor;
  };
  this.calcule = (oper, valor1, valor2) => {
    var valor;
    
    switch(oper) {
      case "somar":
          valor = parseFloat(valor1) + parseFloat(valor2);
          break;
      case "subtrair":
          valor = parseFloat(valor1) - parseFloat(valor2);
          break;
      case "multiplicar":
          valor = parseFloat(valor1) * parseFloat(valor2);
          break;
      default:
          if(valor2<=0) {
            alert('Não existe divisão por 0');
            return document.getElementById("display").innerHTML = '0';
          };
          valor = parseFloat(valor1) / parseFloat(valor2);
    };
    
    return(valor);
  };
  this.calcOper = (oper) => {
    var valor = document.getElementById("display").innerHTML;
    
    delete this.gvisor;
    
    if (typeof this.goper != 'undefined' && oper == 'raiz'){
      this.gvalor = Math.sqrt(valor);
      document.getElementById("display").innerHTML = this.gvalor;
      delete this.oper;
      delete this.gvalor;
      return(0);
    }

    if (typeof this.goper != 'undefined' && oper == 'sinal'){
      this.gvalor = valor * (-1);
      document.getElementById("display").innerHTML = this.gvalor;
      delete this.oper;
      delete this.gvalor;
      return(0);
    }

    if (typeof this.goper != 'undefined' && oper == 'resultado') {
      this.gvalor = calcule(this.goper, this.gvalor, valor);
      document.getElementById("display").innerHTML = this.gvalor;
      return(0);
    }
    
    else {
      this.gvalor = valor;
      this.goper = oper;
    }

  };
  this.pointCalc = () => {
    var n = document.getElementById("display").innerHTML;
    
    if(n.indexOf('.') != -1) return;
    if(!n) () =>  document.getElementById("display").innerHTML = '0';
    function insertPoint() { 
      document.getElementById("display").innerHTML += '.'
    };
    insertPoint()
    
    return parseFloat(n)
  };
}

Calculadora();
