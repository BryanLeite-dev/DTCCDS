function IMC(){
	let altura = window.document.getElementById("txtAltura").value;	 	  
	let peso = window.document.getElementById("txtPeso").value;	
	let calculo = (peso / (altura * altura));  

	if (calculo > 40)
	{
		window.document.getElementById("txtResultado").value = "Obesidade III";
	}
	else if (calculo >= 35 && calculo <= 39.9)
	{
		window.document.getElementById("txtResultado").value = "Obesidade II";
	}
	else if (calculo >= 30 && calculo <= 34.9)
	{
		window.document.getElementById("txtResultado").value = "Obesidade I";
	}
	else if (calculo >= 25 && calculo <= 29.9)
	{
		window.document.getElementById("txtResultado").value = "Acima do peso (sobrepeso)";
	}
	else if (calculo >= 18.5 && calculo <= 24.9)
	{
		window.document.getElementById("txtResultado").value = "Peso normal";
	}
	else
	{
		window.document.getElementById("txtResultado").value = "Abaixo do peso";
	}
}