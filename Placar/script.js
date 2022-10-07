let resul1 = 0;
let resul2 = 0;
let resul3 = 0;
let resul4 = 0;
let resul5 = 0;
let resul6 = 0;

function Pontuar(i){
	switch(i){
		case 11 :
		window.document.getElementById("txtPlacar11").value = "";
		resul1++;
		window.document.getElementById("txtPlacar11").value = resul1;
		break;
		case 12:
		window.document.getElementById("txtPlacar11").value = "";
		resul1--;
		window.document.getElementById("txtPlacar11").value = resul1;
		break;
		case 13:
		window.document.getElementById("txtPlacar12").value = "";
		resul2++;
		window.document.getElementById("txtPlacar12").value = resul2;
		break;
		case 14:	
		window.document.getElementById("txtPlacar12").value = "";
		resul2--;
		window.document.getElementById("txtPlacar12").value = resul2;
		break;
		case 21:
		window.document.getElementById("txtPlacar21").value = "";
		resul3++;
		window.document.getElementById("txtPlacar21").value = resul3;
		break;
		case 22:
		window.document.getElementById("txtPlacar21").value = "";
		resul3--;
		window.document.getElementById("txtPlacar21").value = resul3;
		break;
		case 23:
		window.document.getElementById("txtPlacar22").value = "";
		resul4++;
		window.document.getElementById("txtPlacar22").value = resul4;
		break;
		case 24:
		window.document.getElementById("txtPlacar22").value = "";
		resul4--;
		window.document.getElementById("txtPlacar22").value = resul4;
		break;
		case 31:
		window.document.getElementById("txtPlacar31").value = "";
		resul5++;
		window.document.getElementById("txtPlacar31").value = resul5;
		break;
		case 32:
		window.document.getElementById("txtPlacar31").value = "";
		resul5--;
		window.document.getElementById("txtPlacar31").value = resul5;
		break;
		case 33:
		window.document.getElementById("txtPlacar32").value = "";
		resul6++;
		window.document.getElementById("txtPlacar32").value = resul6;
		break;
		case 34:
		window.document.getElementById("txtPlacar32").value = "";
		resul6--;
		window.document.getElementById("txtPlacar32").value = resul6;
		break;
		default: console.log("Erro");
	}
}

function Limpar(i){
	switch(i){
		case 1 :
		window.document.getElementById("txtPlacar11").value = "";
		window.document.getElementById("txtPlacar12").value = "";
		break;
		case 2:
		window.document.getElementById("txtPlacar21").value = "";
		window.document.getElementById("txtPlacar22").value = "";
		break;
		case 3:
		window.document.getElementById("txtPlacar31").value = "";
		window.document.getElementById("txtPlacar32").value = "";
		break;
		default: console.log("Erro");
	}
}
