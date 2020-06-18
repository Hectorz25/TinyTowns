//Este es el material en turno
var materialAhora = 'A';

//Si ya esta el monumento
var Monum = 0;

//Define si algo se construira o no
var ModoConstruccion = 0;

//Creacion del arreglo
var a = new Array(6);
for (var i = 0; i < 6; i++) {
    a[i] = new Array(6);
}

for (var m = 0; m < 6; m++) {
    for (var n = 0; n < 6; n++) {
        a[m][n] = "A";
    }
}

//Creacion de los arreglos que guardan los edificios disponibles
var casasConstruibles = new Array(5);
for (var h = 0; h <= 4; h++) {
	casasConstruibles[h] = new Array(3);
}

var sastresConstruibles = new Array(3);
for (var h = 0; h <= 2; h++) {
	sastresConstruibles[h] = new Array(4);
}

var tabernasConstruibles = new Array(8);
for (var h = 0; h <= 7; h++) {
	tabernasConstruibles[h] = new Array(3);
}

var capillasConstruibles = new Array(4);
for (var h = 0; h <= 3; h++) {
	capillasConstruibles[h] = new Array(4);
}

var mercadosConstruibles = new Array(2);
for (var h = 0; h <= 1; h++) {
	mercadosConstruibles[h] = new Array(5);
}

var granjasConstruibles = new Array(4);
for (var h = 0; h <= 3; h++) {
	granjasConstruibles[h] = new Array(4);
}

var cobertizoConstruible = new Array(2);

var catedralesConstruibles = new Array(5);
for (var h = 0; h <= 4; h++) {
	catedralesConstruibles[h] = new Array(3);
}

function construirCasa(){
	ModoConstruccion = 1;

	/*alert("Vidrio: "+casasConstruibles[0][0][0]+"-"+casasConstruibles[0][0][1]);
	alert("Trigo: "+casasConstruibles[0][1][0]+"-"+casasConstruibles[0][1][1]);
	alert("Ladrillo: "+casasConstruibles[0][2][0]+"-"+casasConstruibles[0][2][1]);*/
	
	for(var hor=1;hor<=4;hor++){
		for(var vert=1;vert<=4;vert++){
			document.getElementById(hor+"-"+vert).disabled = true;		
		}
	}
	
	for(var s=0;s<=2;s++){
		var p = casasConstruibles[0][s][0];
		var q = casasConstruibles[0][s][1];
		if(a[p][q]=="Mercado"){
			//Nada
		}
		else{
			document.getElementById(p+"-"+q).disabled = false;
		}	
	}

	for(var sas=0;sas<=4;sas++){
		for(var sos=0;sos<=2;sos++){
			var lala = casasConstruibles[sas][sos][0];
			var lolo = casasConstruibles[sas][sos][1];
			if(a[lala][lolo]=="Mercado"){
				//Nada
			}
			else{
				document.getElementById(lala+"-"+lolo).disabled = false;
			}		
		}
	}
}

function construirSastre(){
	ModoConstruccion = 2;

	for(var hor=1;hor<=4;hor++){
		for(var vert=1;vert<=4;vert++){
			document.getElementById(hor+"-"+vert).disabled = true;		
		}
	}

	for(var s=0;s<=3;s++){
		var p = sastresConstruibles[0][s][0];
		var q = sastresConstruibles[0][s][1];
		if(a[p][q]=="Mercado"){
			//Nada
		}
		else{
			document.getElementById(p+"-"+q).disabled = false;
		}
	}

	for(var sas=0;sas<=2;sas++){
		for(var sos=0;sos<=3;sos++){
			var lala = sastresConstruibles[sas][sos][0];
			var lolo = sastresConstruibles[sas][sos][1];
			if(a[lala][lolo]=="Mercado"){
				//Nada
			}
			else{
				document.getElementById(lala+"-"+lolo).disabled = false;
			}		
		}
	}
}

function construirGranja(){
	ModoConstruccion = 3;

	for(var hor=1;hor<=4;hor++){
		for(var vert=1;vert<=4;vert++){
			document.getElementById(hor+"-"+vert).disabled = true;		
		}
	}

	for(var s=0;s<=3;s++){
		var p = granjasConstruibles[0][s][0];
		var q = granjasConstruibles[0][s][1];
		if(a[p][q]=="Mercado"){
			//Nada
		}
		else{
			document.getElementById(p+"-"+q).disabled = false;
		}		
	}

	for(var sas=0;sas<=3;sas++){
		for(var sos=0;sos<=3;sos++){
			var lala = granjasConstruibles[sas][sos][0];
			var lolo = granjasConstruibles[sas][sos][1];
			if(a[lala][lolo]=="Mercado"){
				//Nada
			}
			else{
				document.getElementById(lala+"-"+lolo).disabled = false;
			}		
		}
	}
}

function construirCapilla(){
	ModoConstruccion = 4;

	for(var hor=1;hor<=4;hor++){
		for(var vert=1;vert<=4;vert++){
			document.getElementById(hor+"-"+vert).disabled = true;		
		}
	}

	for(var s=0;s<=3;s++){
		var p = capillasConstruibles[0][s][0];
		var q = capillasConstruibles[0][s][1];
		if(a[p][q]=="Mercado"){
			//Nada
		}
		else{
			document.getElementById(p+"-"+q).disabled = false;
		}		
	}

	for(var sas=0;sas<=3;sas++){
		for(var sos=0;sos<=3;sos++){
			var lala = capillasConstruibles[sas][sos][0];
			var lolo = capillasConstruibles[sas][sos][1];
			if(a[lala][lolo]=="Mercado"){
				//Nada
			}
			else{
				document.getElementById(lala+"-"+lolo).disabled = false;
			}		
		}
	}
}

function construirTaberna(){
	ModoConstruccion = 5;

	for(var hor=1;hor<=4;hor++){
		for(var vert=1;vert<=4;vert++){
			document.getElementById(hor+"-"+vert).disabled = true;		
		}
	}
	
	for(var s=0;s<=2;s++){
		var p = tabernasConstruibles[0][s][0];
		var q = tabernasConstruibles[0][s][1];
		if(a[p][q]=="Mercado"){
			//Nada
		}
		else{
			document.getElementById(p+"-"+q).disabled = false;
		}		
	}

	for(var sas=0;sas<=7;sas++){
		for(var sos=0;sos<=2;sos++){
			var lala = tabernasConstruibles[sas][sos][0];
			var lolo = tabernasConstruibles[sas][sos][1];
			if(a[lala][lolo]=="Mercado"){
				//Nada
			}
			else{
				document.getElementById(lala+"-"+lolo).disabled = false;
			}	
		}
	}
}

function construirMercado(){
	ModoConstruccion = 6;

	for(var hor=1;hor<=4;hor++){
		for(var vert=1;vert<=4;vert++){
			document.getElementById(hor+"-"+vert).disabled = true;		
		}
	}
	
	for(var s=0;s<=4;s++){
		var p = mercadosConstruibles[0][s][0];
		var q = mercadosConstruibles[0][s][1];
		if(a[p][q]=="Mercado"){
			//Nada
		}
		else{
			document.getElementById(p+"-"+q).disabled = false;
		}		
	}

	for(var sas=0;sas<=1;sas++){
		for(var sos=0;sos<=2;sos++){
			var lala = mercadosConstruibles[sas][sos][0];
			var lolo = mercadosConstruibles[sas][sos][1];
			if(a[lala][lolo]=="Mercado"){
				//Nada
			}
			else{
				document.getElementById(lala+"-"+lolo).disabled = false;
			}		
		}
	}
}

function construirCobertizo(){
	ModoConstruccion = 7;

	for(var hor=1;hor<=4;hor++){
		for(var vert=1;vert<=4;vert++){
			if(document.getElementById(hor+"-"+vert).value == ""){
				document.getElementById(hor+"-"+vert).disabled = false;
			}	
		}
	}

	var p = cobertizoConstruible[0][0];
	var q = cobertizoConstruible[0][1];
	if(a[p][q]=="Mercado"){
		//Nada
	}
	else{
		document.getElementById(p+"-"+q).disabled = false;
	}

	var r = cobertizoConstruible[1][0];
	var s = cobertizoConstruible[1][1];
	if(a[r][s]=="Mercado"){
		//Nada
	}
	else{
		document.getElementById(r+"-"+s).disabled = false;
	}
}

function construirCatedral(){
	ModoConstruccion = 8;

	for(var hor=1;hor<=4;hor++){
		for(var vert=1;vert<=4;vert++){
			document.getElementById(hor+"-"+vert).disabled = true;		
		}
	}

	for(var s=0;s<=2;s++){
		var p = catedralesConstruibles[0][s][0];
		var q = catedralesConstruibles[0][s][1];
		if(a[p][q]=="Mercado"){
			//Nada
		}
		else{
			document.getElementById(p+"-"+q).disabled = false;
		}	
	}

	for(var sas=0;sas<=4;sas++){
		for(var sos=0;sos<=2;sos++){
			var lala = catedralesConstruibles[sas][sos][0];
			var lolo = catedralesConstruibles[sas][sos][1];
			if(a[lala][lolo]=="Mercado"){
				//Nada
			}
			else{
				document.getElementById(lala+"-"+lolo).disabled = false;
			}		
		}
	}
}

function alertaEdificio(edificio){
	var Edificio = edificio;
	//Generación de alerta de Edificio Disponible para construcción
		$("#NuevoEdificio").animate({
				height: '+=72px'
			},200);
		$('<div class="alert alert-success"><b>'+Edificio+'</b> Disponible.</div>').hide().appendTo('#NuevoEdificio').fadeIn(500);
	$(".alert").delay(3000).fadeOut(
		"normal",
		function(){
			$(this).remove();
		});
	$("#NuevoEdificio").delay(4000).animate({
       height: '-=72px'
    }, 200);
}

function habilitarNoConstruir(){
	document.getElementById("NoConstruir").disabled = false;
	deshabilitarMateriales();
}

function NoConstruir(){
	for(var hor=1;hor<=4;hor++){
		for(var vert=1;vert<=4;vert++){
			document.getElementById(hor+"-"+vert).disabled = true;		
		}
	}
	document.getElementById("NoConstruir").disabled = true;
	MaterialesAlAzar();
	ModoConstruccion=0;
	tableroLleno();
}

 function deshabilitarMateriales(){
	document.getElementById("Madera").disabled = true;
	document.getElementById("Trigo").disabled = true;
	document.getElementById("Vidrio").disabled = true;
	document.getElementById("Ladrillo").disabled = true;
	document.getElementById("Piedra").disabled = true; 
 }

//Lo que va a pasar cada vez que alguien oprima un boton del tablero
function turno(x,y){
	//Si no se oprimio uno de los botones de construccion
	if(ModoConstruccion == 0){
	//Rehabilita los botones de material
	deshabilitarTablero();
	//Le da al arreglo el valor del material seleccionado previamente
	a[x][y]=materialAhora;
	//Detecta si se pueden construir estructuras
	detectarCasas();
	detectarSastres();
	detectarGranjas();
	detectarCapillas();
	detectarMercados();
	detectarCobertizos();
	detectarTabernas();
	if(Monum == 0){
		detectarCatedralDeCaterina();
	}
	//Le da la imagen apropiada a la casilla seleccionada
		switch(materialAhora){
		case 'M':
			document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Materiales/Madera.png' alt='Madera' title='Madera'/>Madera";
			document.getElementById(x+"-"+y).value="Madera";
			tableroLleno();
			break;
		case 'T':
			document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Materiales/Trigo.png' alt='Trigo' title='Trigo'/>Trigo";
			document.getElementById(x+"-"+y).value="Trigo";
			tableroLleno();
			break;
		case 'V':
			document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Materiales/Vidrio.png' alt='Vidrio' title='Vidrio'/>Vidrio";
			document.getElementById(x+"-"+y).value="Vidrio";
			tableroLleno();
			break;
		case 'L':
			document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Materiales/Ladrillo.png' alt='Ladrillo' title='Ladrillo'/>Ladrillo";
			document.getElementById(x+"-"+y).value="Ladrillo";
			tableroLleno();
			break;
		case 'P':
			document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Materiales/Piedra.png' alt='Piedra' title='Piedra'/>Piedra";
			document.getElementById(x+"-"+y).value="Piedra";
			tableroLleno();
			break;	
		}
	}
	else{
		//Si se esta por construir algo
		switch(ModoConstruccion){
			case 1:
				var ca = 0;
				var lol = 0;
				//Busca el registro de la estructura disponible
				while(casasConstruibles[ca][lol][0] != x || casasConstruibles[ca][lol][1] != y){
					lol++;
					if(lol>2){
						lol = 0;
						ca++;
					}
				}
				//Si alguna de las casillas coincide con un mercado, este no se vera afectado
				if(a[casasConstruibles[ca][0][0]][casasConstruibles[ca][0][1]] != "Mercado"){
					a[casasConstruibles[ca][0][0]][casasConstruibles[ca][0][1]] = "A";
					document.getElementById(casasConstruibles[ca][0][0]+"-"+casasConstruibles[ca][0][1]).innerHTML = "";
					document.getElementById(casasConstruibles[ca][0][0]+"-"+casasConstruibles[ca][0][1]).value="";
				}
				else{
					//Nada
				}
				if(a[casasConstruibles[ca][1][0]][casasConstruibles[ca][1][1]] != "Mercado"){
					a[casasConstruibles[ca][1][0]][casasConstruibles[ca][1][1]] = "A";
					document.getElementById(casasConstruibles[ca][1][0]+"-"+casasConstruibles[ca][1][1]).innerHTML = "";
					document.getElementById(casasConstruibles[ca][1][0]+"-"+casasConstruibles[ca][1][1]).value="";
				}
				else{
					//Nada
				}
				if(a[casasConstruibles[ca][2][0]][casasConstruibles[ca][2][1]] != "Mercado"){
					a[casasConstruibles[ca][2][0]][casasConstruibles[ca][2][1]] = "A";
					document.getElementById(casasConstruibles[ca][2][0]+"-"+casasConstruibles[ca][2][1]).innerHTML = "";
					document.getElementById(casasConstruibles[ca][2][0]+"-"+casasConstruibles[ca][2][1]).value="";
				}
				else{
					//Nada
				}
				
				a[x][y] = "Casa";
				document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Edificios/casa.png' alt='Casa' title='Casa'/>Casa";
				document.getElementById(x+"-"+y).value="Casa";
				for (var pol = 0; pol < 5; pol++) {
					for (var h = 0; h < 3; h++) {
						casasConstruibles[pol][h] = [0,0];
					}
				}
				break;
			case 2:
				var ca = 0;
				var lol = 0;
				while(sastresConstruibles[ca][lol][0] != x || sastresConstruibles[ca][lol][1] != y){
					lol++;
					if(lol>3){
						lol = 0;
						ca++;
					}
				}
				if(a[sastresConstruibles[ca][0][0]][sastresConstruibles[ca][0][1]] != "Mercado"){
					a[sastresConstruibles[ca][0][0]][sastresConstruibles[ca][0][1]] = "A";
					document.getElementById(sastresConstruibles[ca][0][0]+"-"+sastresConstruibles[ca][0][1]).innerHTML = "";
					document.getElementById(sastresConstruibles[ca][0][0]+"-"+sastresConstruibles[ca][0][1]).value="";
				}
				else{
					//Nada
				}
				if(a[sastresConstruibles[ca][1][0]][sastresConstruibles[ca][1][1]] != "Mercado"){
					a[sastresConstruibles[ca][1][0]][sastresConstruibles[ca][1][1]] = "A";
					document.getElementById(sastresConstruibles[ca][1][0]+"-"+sastresConstruibles[ca][1][1]).innerHTML = "";
					document.getElementById(sastresConstruibles[ca][1][0]+"-"+sastresConstruibles[ca][1][1]).value="";
				}
				else{
					//Nada
				}
				if(a[sastresConstruibles[ca][2][0]][sastresConstruibles[ca][2][1]] != "Mercado"){
					a[sastresConstruibles[ca][2][0]][sastresConstruibles[ca][2][1]] = "A";
				document.getElementById(sastresConstruibles[ca][2][0]+"-"+sastresConstruibles[ca][2][1]).innerHTML = "";
				document.getElementById(sastresConstruibles[ca][2][0]+"-"+sastresConstruibles[ca][2][1]).value="";
				}
				else{
					//Nada
				}
				if(a[sastresConstruibles[ca][3][0]][sastresConstruibles[ca][3][1]] != "Mercado"){
					a[sastresConstruibles[ca][3][0]][sastresConstruibles[ca][3][1]] = "A";
					document.getElementById(sastresConstruibles[ca][3][0]+"-"+sastresConstruibles[ca][3][1]).innerHTML = "";
					document.getElementById(sastresConstruibles[ca][3][0]+"-"+sastresConstruibles[ca][3][1]).value="";
				}
				else{
					//Nada
				}
				
				a[x][y] = "Sastre";
				document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Edificios/sastre.png' alt='Sastre' title='Sastre'/>Sastre";
				document.getElementById(x+"-"+y).value="Sastre";
				for (var pol = 0; pol < 3; pol++) {
					for (var h = 0; h < 4; h++) {
						sastresConstruibles[pol][h] = [0,0];
					}
				}
				break;
			case 3:
				var ca = 0;
				var lol = 0;
				while(granjasConstruibles[ca][lol][0] != x || granjasConstruibles[ca][lol][1] != y){
					lol++;
					if(lol>3){
						lol = 0;
						ca++;
					}
				}
				if(a[granjasConstruibles[ca][0][0]][granjasConstruibles[ca][0][1]] != "Mercado"){
					a[granjasConstruibles[ca][0][0]][granjasConstruibles[ca][0][1]] = "A";
					document.getElementById(granjasConstruibles[ca][0][0]+"-"+granjasConstruibles[ca][0][1]).innerHTML = "";
					document.getElementById(granjasConstruibles[ca][0][0]+"-"+granjasConstruibles[ca][0][1]).value="";
				}
				else{
					//Nada
				}
				if(a[granjasConstruibles[ca][1][0]][granjasConstruibles[ca][1][1]] != "Mercado"){
					a[granjasConstruibles[ca][1][0]][granjasConstruibles[ca][1][1]] = "A";
					document.getElementById(granjasConstruibles[ca][1][0]+"-"+granjasConstruibles[ca][1][1]).innerHTML = "";
					document.getElementById(granjasConstruibles[ca][1][0]+"-"+granjasConstruibles[ca][1][1]).value="";
				}
				else{
					//Nada
				}
				if(a[granjasConstruibles[ca][2][0]][granjasConstruibles[ca][2][1]] != "Mercado"){
					a[granjasConstruibles[ca][2][0]][granjasConstruibles[ca][2][1]] = "A";
					document.getElementById(granjasConstruibles[ca][2][0]+"-"+granjasConstruibles[ca][2][1]).innerHTML = "";
					document.getElementById(granjasConstruibles[ca][2][0]+"-"+granjasConstruibles[ca][2][1]).value="";
				}
				else{
					//Nada
				}
				if(a[granjasConstruibles[ca][3][0]][granjasConstruibles[ca][3][1]] != "Mercado"){
					a[granjasConstruibles[ca][3][0]][granjasConstruibles[ca][3][1]] = "A";
					document.getElementById(granjasConstruibles[ca][3][0]+"-"+granjasConstruibles[ca][3][1]).innerHTML = "";
					document.getElementById(granjasConstruibles[ca][3][0]+"-"+granjasConstruibles[ca][3][1]).value="";
				}
				else{
					//Nada
				}
				
				a[x][y] = "Granja";
				document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Edificios/granja.png' alt='Granja' title='Granja'/>Granja";
				document.getElementById(x+"-"+y).value="Granja";
				for (var pol = 0; pol < 4; pol++) {
					for (var h = 0; h < 4; h++) {
						granjasConstruibles[pol][h] = [0,0];
					}
				}
				break;
			case 4:
				var ca = 0;
				var lol = 0;
				while(capillasConstruibles[ca][lol][0] != x || capillasConstruibles[ca][lol][1] != y){
					lol++;
					if(lol>3){
						lol = 0;
						ca++;
					}
				}
				if(a[capillasConstruibles[ca][0][0]][capillasConstruibles[ca][0][1]] != "Mercado"){
					a[capillasConstruibles[ca][0][0]][capillasConstruibles[ca][0][1]] = "A";
					document.getElementById(capillasConstruibles[ca][0][0]+"-"+capillasConstruibles[ca][0][1]).innerHTML = "";
					document.getElementById(capillasConstruibles[ca][0][0]+"-"+capillasConstruibles[ca][0][1]).value="";
				}
				else{
					//Nada
				}
				if(a[capillasConstruibles[ca][1][0]][capillasConstruibles[ca][1][1]] != "Mercado"){
					a[capillasConstruibles[ca][1][0]][capillasConstruibles[ca][1][1]] = "A";
					document.getElementById(capillasConstruibles[ca][1][0]+"-"+capillasConstruibles[ca][1][1]).innerHTML = "";
					document.getElementById(capillasConstruibles[ca][1][0]+"-"+capillasConstruibles[ca][1][1]).value="";
				}
				else{
					//Nada
				}
				if(a[capillasConstruibles[ca][2][0]][capillasConstruibles[ca][2][1]] != "Mercado"){
					a[capillasConstruibles[ca][2][0]][capillasConstruibles[ca][2][1]] = "A";
					document.getElementById(capillasConstruibles[ca][2][0]+"-"+capillasConstruibles[ca][2][1]).innerHTML = "";
					document.getElementById(capillasConstruibles[ca][2][0]+"-"+capillasConstruibles[ca][2][1]).value="";
				}
				else{
					//Nada
				}
				if(a[capillasConstruibles[ca][3][0]][capillasConstruibles[ca][3][1]] != "Mercado"){
					a[capillasConstruibles[ca][3][0]][capillasConstruibles[ca][3][1]] = "A";
					document.getElementById(capillasConstruibles[ca][3][0]+"-"+capillasConstruibles[ca][3][1]).innerHTML = "";
					document.getElementById(capillasConstruibles[ca][3][0]+"-"+capillasConstruibles[ca][3][1]).value="";
				}
				else{
					//Nada
				}
				
				a[x][y] = "Capilla";
				document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Edificios/capilla.png' alt='Capilla' title='Capilla'/>Capilla";
				document.getElementById(x+"-"+y).value="Capilla";
				for (var pol = 0; pol < 4; pol++) {
					for (var h = 0; h < 4; h++) {
						capillasConstruibles[pol][h] = [0,0];
					}
				}
				break;
			case 5:
				var ca = 0;
				var lol = 0;
				while(tabernasConstruibles[ca][lol][0] != x || tabernasConstruibles[ca][lol][1] != y){
					lol++;
					if(lol>2){
						lol = 0;
						ca++;
					}
				}
				if(a[tabernasConstruibles[ca][0][0]][tabernasConstruibles[ca][0][1]] != "Mercado"){
					a[tabernasConstruibles[ca][0][0]][tabernasConstruibles[ca][0][1]] = "A";
					document.getElementById(tabernasConstruibles[ca][0][0]+"-"+tabernasConstruibles[ca][0][1]).innerHTML = "";
					document.getElementById(tabernasConstruibles[ca][0][0]+"-"+tabernasConstruibles[ca][0][1]).value="";
				}
				else{
					//Nada
				}
				if(a[tabernasConstruibles[ca][1][0]][tabernasConstruibles[ca][1][1]] != "Mercado"){
					a[tabernasConstruibles[ca][1][0]][tabernasConstruibles[ca][1][1]] = "A";
					document.getElementById(tabernasConstruibles[ca][1][0]+"-"+tabernasConstruibles[ca][1][1]).innerHTML = "";
					document.getElementById(tabernasConstruibles[ca][1][0]+"-"+tabernasConstruibles[ca][1][1]).value="";
				}
				else{
					//Nada
				}
				if(a[tabernasConstruibles[ca][2][0]][tabernasConstruibles[ca][2][1]] != "Mercado"){
					a[tabernasConstruibles[ca][2][0]][tabernasConstruibles[ca][2][1]] = "A";
					document.getElementById(tabernasConstruibles[ca][2][0]+"-"+tabernasConstruibles[ca][2][1]).innerHTML = "";
					document.getElementById(tabernasConstruibles[ca][2][0]+"-"+tabernasConstruibles[ca][2][1]).value="";
				}
				else{
					//Nada
				}
				
				a[x][y] = "Taberna";
				document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Edificios/taberna.png' alt='Taberna' title='Taberna'/>Taberna";
				document.getElementById(x+"-"+y).value="Taberna";
				for (var pol = 0; pol < 8; pol++) {
					for (var h = 0; h < 3; h++) {
						tabernasConstruibles[pol][h] = [0,0];
					}
				}
				break;
			case 6:
				var ca = 0;
				var lol = 0;
				while(mercadosConstruibles[ca][lol][0] != x || mercadosConstruibles[ca][lol][1] != y){
					lol++;
					if(lol>4){
						lol = 0;
						ca++;
					}
				}
				if(a[mercadosConstruibles[ca][0][0]][mercadosConstruibles[ca][0][1]] != "Mercado"){
					a[mercadosConstruibles[ca][0][0]][mercadosConstruibles[ca][0][1]] = "A";
					document.getElementById(mercadosConstruibles[ca][0][0]+"-"+mercadosConstruibles[ca][0][1]).innerHTML = "";
					document.getElementById(mercadosConstruibles[ca][0][0]+"-"+mercadosConstruibles[ca][0][1]).value="";
				}
				else{
					//Nada
				}
				if(a[mercadosConstruibles[ca][1][0]][mercadosConstruibles[ca][1][1]] != "Mercado"){
					a[mercadosConstruibles[ca][1][0]][mercadosConstruibles[ca][1][1]] = "A";
					document.getElementById(mercadosConstruibles[ca][1][0]+"-"+mercadosConstruibles[ca][1][1]).innerHTML = "";
					document.getElementById(mercadosConstruibles[ca][1][0]+"-"+mercadosConstruibles[ca][1][1]).value="";
				}
				else{
					//Nada
				}
				if(a[mercadosConstruibles[ca][2][0]][mercadosConstruibles[ca][2][1]] != "Mercado"){
					a[mercadosConstruibles[ca][2][0]][mercadosConstruibles[ca][2][1]] = "A";
					document.getElementById(mercadosConstruibles[ca][2][0]+"-"+mercadosConstruibles[ca][2][1]).innerHTML = "";
					document.getElementById(mercadosConstruibles[ca][2][0]+"-"+mercadosConstruibles[ca][2][1]).value="";
				}
				else{
					//Nada
				}
				if(a[mercadosConstruibles[ca][3][0]][mercadosConstruibles[ca][3][1]] != "Mercado"){
					a[mercadosConstruibles[ca][3][0]][mercadosConstruibles[ca][3][1]] = "A";
					document.getElementById(mercadosConstruibles[ca][3][0]+"-"+mercadosConstruibles[ca][3][1]).innerHTML = "";
					document.getElementById(mercadosConstruibles[ca][3][0]+"-"+mercadosConstruibles[ca][3][1]).value="";
				}
				else{
					//Nada
				}
				if(a[mercadosConstruibles[ca][4][0]][mercadosConstruibles[ca][4][1]] != "Mercado"){
					a[mercadosConstruibles[ca][4][0]][mercadosConstruibles[ca][4][1]] = "A";
					document.getElementById(mercadosConstruibles[ca][4][0]+"-"+mercadosConstruibles[ca][4][1]).innerHTML = "";
					document.getElementById(mercadosConstruibles[ca][4][0]+"-"+mercadosConstruibles[ca][4][1]).value="";
				}
				else{
					//Nada
				}
				
				a[x][y] = "Mercado";
				document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Edificios/mercado.png' alt='Mercado' title='Mercado'/>Mercado";
				document.getElementById(x+"-"+y).value="Mercado";
				for (var pol = 0; pol < 2; pol++) {
					for (var h = 0; h < 5; h++) {
						mercadosConstruibles[pol][h] = [0,0];
					}
				}
				break;
			case 7:
				if(a[cobertizoConstruible[0][0]][cobertizoConstruible[0][1]] != "Mercado"){
					a[cobertizoConstruible[0][0]][cobertizoConstruible[0][1]] = "A";
					document.getElementById(cobertizoConstruible[0][0]+"-"+cobertizoConstruible[0][1]).innerHTML = "";
					document.getElementById(cobertizoConstruible[0][0]+"-"+cobertizoConstruible[0][1]).value="";
				}
				else{
					//Nada
				}
				if(a[cobertizoConstruible[1][0]][cobertizoConstruible[1][1]] != "Mercado"){
					a[cobertizoConstruible[1][0]][cobertizoConstruible[1][1]] = "A";
					document.getElementById(cobertizoConstruible[1][0]+"-"+cobertizoConstruible[1][1]).innerHTML = "";
					document.getElementById(cobertizoConstruible[1][0]+"-"+cobertizoConstruible[1][1]).value="";
				}
				else{
					//Nada
				}
				
				a[x][y] = "Cobertizo";
				document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Edificios/cobertizo.png' alt='Cobertizo' title='Cobertizo'/>Cobertizo";
				document.getElementById(x+"-"+y).value="Cobertizo";
				cobertizoConstruible[0] = [0,0];
				cobertizoConstruible[1] = [0,0]; 
				break;
			case 8:
				var ca = 0;
				var lol = 0;
				while(catedralesConstruibles[ca][lol][0] != x || catedralesConstruibles[ca][lol][1] != y){
					lol++;
					if(lol>2){
						lol = 0;
						ca++;
					}
				}
				if(a[catedralesConstruibles[ca][0][0]][catedralesConstruibles[ca][0][1]] != "Mercado"){
					a[catedralesConstruibles[ca][0][0]][catedralesConstruibles[ca][0][1]] = "A";
					document.getElementById(catedralesConstruibles[ca][0][0]+"-"+catedralesConstruibles[ca][0][1]).innerHTML = "";
					document.getElementById(catedralesConstruibles[ca][0][0]+"-"+catedralesConstruibles[ca][0][1]).value="";
				}
				else{
					//Nada
				}
				if(a[catedralesConstruibles[ca][1][0]][catedralesConstruibles[ca][1][1]] != "Mercado"){
					a[catedralesConstruibles[ca][1][0]][catedralesConstruibles[ca][1][1]] = "A";
					document.getElementById(catedralesConstruibles[ca][1][0]+"-"+catedralesConstruibles[ca][1][1]).innerHTML = "";
					document.getElementById(catedralesConstruibles[ca][1][0]+"-"+catedralesConstruibles[ca][1][1]).value="";
				}
				else{
					//Nada
				}
				if(a[catedralesConstruibles[ca][2][0]][catedralesConstruibles[ca][2][1]] != "Mercado"){
					a[catedralesConstruibles[ca][2][0]][catedralesConstruibles[ca][2][1]] = "A";
					document.getElementById(catedralesConstruibles[ca][2][0]+"-"+catedralesConstruibles[ca][2][1]).innerHTML = "";
					document.getElementById(catedralesConstruibles[ca][2][0]+"-"+catedralesConstruibles[ca][2][1]).value="";
				}
				else{
					//Nada
				}
				
				a[x][y] = "Catedral";
				document.getElementById(x+"-"+y).innerHTML = "<img src='IMG/Edificios/catedral.png' alt='Catedral' title='Catedral'/>Catedral";
				document.getElementById(x+"-"+y).value="Catedral";
				for (var pol = 0; pol < 5; pol++) {
					for (var h = 0; h < 3; h++) {
						catedralesConstruibles[pol][h] = [0,0];
					}
				}
				Monum = 1;
				break;
		}
		tableroLleno();
		ModoConstruccion = 0;
		deshabilitarTablero();
		desactivarBotonesEdificios();
		
	}
	tableroLleno();
}

function desactivarBotonesEdificios(){
	document.getElementById("NoConstruir").disabled = true;
	document.getElementById("Casa").disabled = true;
	document.getElementById("Sastre").disabled = true;
	document.getElementById("Capilla").disabled = true;
	document.getElementById("Granja").disabled = true;
	document.getElementById("Catedral").disabled = true;
	document.getElementById("Taberna").disabled = true;
	document.getElementById("Mercado").disabled = true;
	document.getElementById("Catedral").disabled = true;
	document.getElementById("Cobertizo").disabled = true;
}

function MaterialesAlAzar(){

	desactivarBotonesEdificios();
	//Deshabilitar todos los botones
	
	document.getElementById("Madera").disabled = true;
	document.getElementById("Trigo").disabled = true;
	document.getElementById("Ladrillo").disabled = true;
	document.getElementById("Vidrio").disabled = true;
	document.getElementById("Piedra").disabled = true;
	
	var material1=0;
	var material2=0;
	var material3=0;
		while(material1===0){
			material1 = Math.floor((Math.random() * 5) + 1);
		}
		while(material2===0){
			material2 = Math.floor((Math.random() * 5) + 1);
			if(material2===material1){
				material2=0;
			}
		}
		while(material3===0){
			material3 = Math.floor((Math.random() * 5) + 1);
			if(material3===material2 || material3===material1){
				material3=0;
			}
		}
//Material numero 1	
	switch(material1){
		case 1:
			document.getElementById("Madera").disabled = false;
			break;
		case 2:
			document.getElementById("Trigo").disabled = false;
			break;
		case 3:
			document.getElementById("Vidrio").disabled = false;
			break;
		case 4:
			document.getElementById("Ladrillo").disabled = false;
			break;
		case 5:
			document.getElementById("Piedra").disabled = false;
			break;	
	}
//Material numero 2
	switch(material2){
		case 1:
			document.getElementById("Madera").disabled = false;
			break;
		case 2:
			document.getElementById("Trigo").disabled = false;
			break;
		case 3:
			document.getElementById("Vidrio").disabled = false;
			break;
		case 4:
			document.getElementById("Ladrillo").disabled = false;
			break;
		case 5:
			document.getElementById("Piedra").disabled = false;
			break;	
	}
//Material numero 3
	switch(material3){
		case 1:
			document.getElementById("Madera").disabled = false;
			break;
		case 2:
			document.getElementById("Trigo").disabled = false;
			break;
		case 3:
			document.getElementById("Vidrio").disabled = false;
			break;
		case 4:
			document.getElementById("Ladrillo").disabled = false;
			break;
		case 5:
			document.getElementById("Piedra").disabled = false;
			break;	
	}
}

function habilitarTablero(mate){
	//Establecer el material que se va a poner	
	materialAhora = mate;
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			var tieneMaterial = document.getElementById(i+"-"+j).value; //Obtener el valor de los botones de la tabla, si no tiene nada, se habilita, 															  //Si ya tiene un dato, ya no se habilitará 
				if(tieneMaterial==""){
					document.getElementById(i+"-"+j).disabled = false;
			}			
		}
		
	}
}

function deshabilitarTablero(){
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			document.getElementById(i+"-"+j).disabled = true;
		}	
	}
	MaterialesAlAzar();
}

var contadorAlertas=0;
function tableroLleno(){
	var lleno = 0; //Variable global, si queremos hacerla local solo se agrega "var" antes de la variable
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			var X = document.getElementById(i+"-"+j).value; //Obtener el valor de los botones de la tabla, si no tiene nada, se habilita, 															  //Si ya tiene un dato, ya no se habilitará 
				if(X!=""){	
					lleno= lleno+1;
				}		
		}
	}
	//Saber si todos los botones de edicios están deshabilitados
	var noDisponible1 = document.getElementById("Casa").disabled; 
	var noDisponible2 =	document.getElementById("Sastre").disabled;
	var noDisponible3 =	document.getElementById("Granja").disabled;
	var noDisponible4 =	document.getElementById("Capilla").disabled;
	var noDisponible5 =	document.getElementById("Taberna").disabled;
	var noDisponible6 =	document.getElementById("Mercado").disabled;
	var noDisponible7 =	document.getElementById("Cobertizo").disabled;
	var noDisponible8 =	document.getElementById("Catedral").disabled;
	//Si el tablero está lleno y ningún botón de edificio está habilitado, entonces el juego se acabó porque ya no puede construir mas.
	if(lleno===16 && noDisponible1===true && noDisponible2===true && noDisponible3===true && noDisponible4===true && noDisponible5===true && noDisponible6===true && noDisponible7===true && noDisponible8===true){
	//Deshabilitar botones de Materiales
		document.getElementById("Madera").disabled = true;
		document.getElementById("Piedra").disabled = true;
		document.getElementById("Ladrillo").disabled = true;
		document.getElementById("Trigo").disabled = true;
		document.getElementById("Vidrio").disabled = true;
		
	//Generación de alerta de Game Over
		if(contadorAlertas<1){ //Para evitar doble alerta de fin de juego
		$("#GameOver").animate({
				height: '+=72px'
			},300);
		$('<div class="alert alert-danger">'+'<button type="button" class="close" data-dismiss="alert">'+'&times;</button><b>Fin del Juego!</b>'+'<br><button type="button" class="btn btn-primary botoncitos" onClick="window.location.reload();">Volver A Jugar</button>'+'<button class="btn btn-info botoncitos" data-toggle="modal" data-target="#puntuacionModal">Ver Puntuación</button></div>').hide().appendTo('#GameOver').fadeIn(1000);
			contadorAlertas=contadorAlertas+1;
		}
		
	//Sumas y restas de puntos
	var casas = 0;
	var granjas = 0;
	var capillas= 0;
	var tabernas=0;
	var sastres=0;
	var mercados=0;
	var cobertizos=0;
	var catedrales=0;
		
	for(var a=1;a<=4;a++){
		for(var b=1;b<=4;b++){
			var z = document.getElementById(a+"-"+b).value;
			
			if(z==="Casa"){
				casas=casas + 1; 
			}
			if(z==="Granja"){
				granjas=granjas + 1; 
			}
			if(z==="Capilla"){
				capillas=capillas + 1; 
			}
			if(z==="Taberna"){
				tabernas=tabernas + 1; 
			}
			if(z==="Sastre"){
				sastres=sastres + 1; 
			}
			if(z==="Mercado"){
				mercados=mercados + 1; 
			}
			if(z==="Cobertizo"){
				cobertizos=cobertizos + 1; 
			}
			if(z==="Catedral"){
				catedrales=catedrales + 1; 
			}
		}
	}
	//Suma de puntos para las casas	
	if(granjas===1 && casas<=4){ //Por cada granja 4 casas valen 3 puntos (casas alimentadas)
		if(capillas>=1){var casasAlimentadas =casas; 
						capillas=capillas*casasAlimentadas;} //Todos los if(capilla>=1) son para que no haga sumas o restas aunque no existan capillas
		casas=casas*3;	
	}else if(granjas===2 && casas<=8){
		if(capillas>=1){var casasAlimentadas2 =casas; 
						capillas=capillas*casasAlimentadas2;}
		casas=casas*3;
	}else if(granjas===3 && casas<=12){
		if(capillas>=1){var casasAlimentadas3 =casas; 
						capillas=capillas*casasAlimentadas3;}
		casas=casas*3;
	}else if(granjas===4 && casas<=16){
		if(capillas>=1){var casasAlimentadas4 =casas; 
						capillas=capillas*casasAlimentadas4;}
		casas=casas*3;
	}else if(granjas===1 && casas>4){//Si hay mas de 4 casas y solo 1 granja, solo 4 casas valen 3 puntos y las demás 0.
		if(capillas>=1){var cantCasas1= casas-4;
		capillas= casas - cantCasas1;}
		casas=4*3; 
	}else if(granjas===2 && casas>8){//Si hay mas de 8 casas y solo 2 granja, solo 8 casas valen 3 puntos y las demás 0.
		if(capillas>=1){var cantCasas2= casas-8;
		capillas= casas - cantCasas2;}
		casas=8*3; 
	}else if(granjas===3 && casas>12){//Si hay mas de 12 casas y solo 3 granja, solo 12 casas valen 3 puntos y las demás 0.
		if(capillas>=1){var cantCasas3= casas-12;
		capillas= casas - cantCasas3;}
		casas=12*3; 
	}else if(granjas===4 && casas>16){//Si hay mas de 16 casas y solo 4 granja, solo 16 casas valen 3 puntos y las demás 0, esta ultima no es posible, 																													pero por si acaso xdxdxd.
		if(capillas>=1){var cantCasas4= casas-16;
		capillas= casas - cantCasas4;}
		casas=16*3; 
	}else if(granjas===0 && casas>1){ //Si no hay  granjas las casas valen 0.
		casas=0;
		capillas=0; //Como no una granja las casa no se alimenten, por lo tanto las capillas no valen nada.
	}if(casas===0){ //Si no hay casas construidas no pueden estar alimentadas, por lo tanto las capillas no valen nada.
			capillas=0; 
			}
	if(catedrales===1){
		catedrales=catedrales+1; //Si existe una catedral en el tablero tiene 2 puntos, si hay una construida no debe de restar puntos las casilllas 							sin edificios.
	}else{
		catedrales=0;
	}
	if(tabernas>=1){ //Dependiendo de cuantas tabernas tengas valen diferentes puntos.
		if(tabernas===1){
			tabernas=2;
		}else if(tabernas===2){
				tabernas=5;
				}else if(tabernas===3){
						tabernas=9;
						}else if(tabernas===4){
								tabernas=14;
								}else if(tabernas>=5){
											tabernas=20;
											}else{
												tabernas=0;
											}}
	var SastresCentrales1 = document.getElementById("2-2").value; //Obtener el valor de los 4 botones centrales directamente.
	var SastresCentrales2 = document.getElementById("2-3").value;
	var SastresCentrales3 = document.getElementById("3-2").value;
	var SastresCentrales4 = document.getElementById("3-3").value;
	var totalSastresCentrales=0;	//Variable para saber cuantos sastres hay en el centro.	
		if(SastresCentrales1==="Sastre"){
			totalSastresCentrales=totalSastresCentrales+1;	//Si existe un sastre en uno de los botones centrales, el valor de cada sastre aumenta 1.
		}
		if(SastresCentrales2==="Sastre"){
			totalSastresCentrales=totalSastresCentrales+1;
		}
		if(SastresCentrales3==="Sastre"){
			totalSastresCentrales=totalSastresCentrales+1;
		}
		if(SastresCentrales4==="Sastre"){
			totalSastresCentrales=totalSastresCentrales+1;
		}
		if(totalSastresCentrales===1){	//Si el total de sastres en el centro es 1, todos los sastres dublican su valor
			sastres=sastres*2;
		}else if(totalSastresCentrales===2){
				sastres=sastres*3;
				}else if(totalSastresCentrales===3){
						sastres=sastres*4;
						}else if(totalSastresCentrales===4){
								sastres=sastres*5;
								}else if(totalSastresCentrales===0){
									totalSastresCentrales=0;
								}	
//Contar cuantas casillas hay sin materiales o con materiales sueltos
	var materialesSueltos=0;
	for(var f=1;f<=4;f++){
		for(var g=1;g<=4;g++){
			var temporal = document.getElementById(f+"-"+g).value;
			if(temporal==='Madera' || temporal==='Vidrio' || temporal==='Piedra' || temporal==='Ladrillo' || temporal==='Trigo' || temporal==='' || temporal==="" ){
				materialesSueltos=materialesSueltos+1;
			}
		}
	}
	//si el monumento está construido no se restarán puntos por materiales sueltos o espacios vacios
	var total=0;
	var mensaje="";	
	if(catedrales>1){
		total = casas+sastres+capillas+tabernas+mercados+cobertizos+catedrales;
		if(total<=9 && total>=1){
			mensaje="Eres un Aspirante a Arquitecto, sigue estudiando!!"
		}else if(total>=10 && total<=17){
			mensaje="Sigue así, eres un Aprendiz de Contructor con futuro.";
		}else if(total>=18 && total<=24){
			mensaje="Eres un buen Carpintero";
		}else if(total>=25 && total<=31){
			mensaje="No se esperaría menos de un Ingeniero!!";
		}else if(total>=32 && total<=37){
			mensaje="Eres todo un Urbanista";
		}else if(total>=38){
			mensaje="Un Maestro Arquitecto en toda regla!";
		}else if(total<=0){
			mensaje="Deberías empezar a estudiar";
		}
		document.getElementById("casaPuntos").value=casas;	
		document.getElementById("sastrePuntos").value=sastres;	
		document.getElementById("capillaPuntos").value=capillas;	
		document.getElementById("tabernaPuntos").value=tabernas;
		document.getElementById("mercadoPuntos").value=mercados;	
		document.getElementById("cobertizoPuntos").value=cobertizos;	
		document.getElementById("catedralPuntos").value=catedrales;
		document.getElementById("puntosRestados").value=0;
		document.getElementById("totalPuntos").value=total;
		document.getElementById("puntosMensaje").innerHTML=mensaje;
	}if(catedrales<2){
		var subtotal =casas+sastres+capillas+tabernas+mercados+cobertizos+catedrales;
		total = subtotal-materialesSueltos;
		if(total<=9 && total>=1){
			mensaje="Eres un Aspirante a Arquitecto, sigue estudiando!!"
		}else if(total>=10 && total<=17){
			mensaje="Sigue así, eres un Aprendiz de Contructor con futuro.";
		}else if(total>=18 && total<=24){
			mensaje="Eres un buen Carpintero";
		}else if(total>=25 && total<=31){
			mensaje="No se esperaría menos de un Ingeniero!!";
		}else if(total>=32 && total<=37){
			mensaje="Eres todo un Urbanista";
		}else if(total>=38){
			mensaje="Un Maestro Arquitecto en toda regla!";
		}else if(total<=0){
			mensaje="Deberías empezar a estudiar";
		}
		document.getElementById("casaPuntos").value=casas;	
		document.getElementById("sastrePuntos").value=sastres;	
		document.getElementById("capillaPuntos").value=capillas;	
		document.getElementById("tabernaPuntos").value=tabernas;
		document.getElementById("mercadoPuntos").value=mercados;	
		document.getElementById("cobertizoPuntos").value=cobertizos;	
		document.getElementById("catedralPuntos").value=catedrales;
		document.getElementById("puntosRestados").value=materialesSueltos;
		document.getElementById("totalPuntos").value=total;
		document.getElementById("puntosMensaje").innerHTML=mensaje;
	}	
		$('#puntuacionModal').modal('show');//Mostrar modal de puntuación	
	//alert("Puntuación de casas: "+casas+"\nPuntuacion de Sastres: "+sastres+"\nTotal de Granjas construidas: "+granjas+"\nPuntuacion de capillas: "+capillas+"\nPuntuación de Tabernas: "+tabernas+"\nPuntuacion de Mercados: "+mercados+"\nPuntuación de Cobertizos: "+cobertizos+"\nPuntuacion de Catedral: "+catedrales+"\nTotal: "+total);
	}
}

function detectarCasas(){
	var numCasaD = 0;
						
	var casillaT = [0,0];
	var casillaV = [0,0];
	var casillaL = [0,0];

	var edificio = "Casa";
	//Busca en todas las casillas
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			//Si hay un Vidrio en una
			if(a[i][j] == "V" || a[i][j] == "Mercado"){
				var Mercados = 0;
				if(a[i][j] == "Mercado"){Mercados++;}
				//Se toman los valores de los que estan alrededor del Vidrio
				var arriba = a[i][j-1];
				var abajo = a[i][j+1];
				var izquierda = a[i-1][j];
				var derecha = a[i+1][j];
				//Si arriba o abajo del Vidrio hay Trigo, debe haber Ladrillo a su izquierda o derecha
				if(arriba == "T" || abajo == "T" || arriba == "Mercado" || abajo == "Mercado"){
					if(arriba == "Mercado" || abajo == "Mercado"){Mercados++;}
					if(izquierda == "L" || derecha == "L" || izquierda == "Mercado" || derecha == "Mercado"){
						if(izquierda == "Mercado" || derecha == "Mercado"){Mercados++;}
						//Aqui debe ir el metodo que te pregunte si quieres construir la casa y donde
						//Alerta de nuevo edificio disponible para su construcción
						if(Mercados>2){
							//nada
						}
						else{
						alertaEdificio(edificio);
						document.getElementById("Casa").disabled = false;
						habilitarNoConstruir();
					
						casillaV[0] = i;
						casillaV[1] = j; 
						
						if(arriba == "T" || arriba == "Mercado"){						
							casillaT[0] = i;
							casillaT[1] = j-1; 
						}

						else{
							casillaT[0] = i;
							casillaT[1] = j+1; 
						}

						if(izquierda == "L" || izquierda == "Mercado"){						
							casillaL[0] = i-1;
							casillaL[1] = j; 
						}

						else{
							casillaL[0] = i+1;
							casillaL[1] = j; 
						}

						casasConstruibles[numCasaD][0] = casillaV;
						casasConstruibles[numCasaD][1] = casillaT;
						casasConstruibles[numCasaD][2] = casillaL;
						
						casillaV = [0,0];
						casillaT = [0,0];
						casillaL = [0,0];

						numCasaD++;
						Mercados = 0;
						}
					}
				}
				if(izquierda == "T" || derecha == "T" || izquierda == "Mercado" || derecha == "Mercado"){
					if(izquierda == "Mercado" || derecha == "Mercado"){Mercados++;}
					if(arriba == "L" || abajo == "L" || arriba == "Mercado" || abajo == "Mercado"){
						if(arriba == "Mercado" || abajo == "Mercado"){Mercados++;}
						//Aqui debe ir el metodo que te pregunte si quieres construir la casa y donde
						//Alerta de nuevo edificio disponible para su construcción
						if(Mercados>2){
							//Nada
						}
						else{
						alertaEdificio(edificio);
						document.getElementById("Casa").disabled = false;
						habilitarNoConstruir();

						casillaV[0] = i;
						casillaV[1] = j; 
					
						if(izquierda == "T" || izquierda == "Mercado"){		
							casillaT[0] = i-1;				
							casillaT[1] = j; 
						}

						else{
							casillaT[0] = i+1;
							casillaT[1] = j; 
						}

						if(arriba == "L" || arriba == "Mercado"){						
							casillaL[0] = i;
							casillaL[1] = j-1; 
						}

						else{
							casillaL[0] = i;
							casillaL[1] = j+1; 
						}
						
						casasConstruibles[numCasaD][0] = casillaV;
						casasConstruibles[numCasaD][1] = casillaT;
						casasConstruibles[numCasaD][2] = casillaL;

						casillaV = [0,0];
						casillaT = [0,0];
						casillaL = [0,0];

						numCasaD++;
						Mercados = 0;
						}
					}
				}
				else{
					
				}
			}	
		}
	}
}

function detectarSastres(){
	var numSastreD = 0;
						
	var casillaV = [0,0];
	var casillaT = [0,0];
	var casillaP1 = [0,0];
	var casillaP2 = [0,0];

	var edificio = "Sastre";
	//Busca en todas las casillas
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			//Si hay un Vidrio en una
			if(a[i][j] == "V" || a[i][j]=="Mercado"){
				var Mercados = 0;
				if(a[i][j]=="Mercado"){Mercados++;}
				//Se toman los valores de los que estan alrededor del Vidrio
				var arriba = a[i][j-1];
				var abajo = a[i][j+1];
				var izquierda = a[i-1][j];
				var derecha = a[i+1][j];
				//Si arriba y abajo del Vidrio hay Piedra, debe haber Trigo a su izquierda o derecha
				if( (arriba == "P" && abajo == "P") || (arriba == "P" && abajo == "Mercado") || (arriba == "Mercado" && abajo == "P") || (arriba == "Mercado" && abajo == "Mercado") ){
					if(arriba == "Mercado" && abajo == "Mercado") {Mercados = Mercados + 2;}
					else{
						if( (arriba == "P" && abajo == "Mercado") || (arriba == "Mercado" && abajo == "P") ) {Mercados++;}
					}
					if(izquierda == "T" || derecha == "T" || izquierda == "Mercado" || derecha == "Mercado"){
						if( izquierda == "Mercado" || derecha == "Mercado" ) {Mercados++;}
						//Aqui debe ir el metodo que te pregunte si quieres construir el sastre y donde
						//Alerta de nuevo edificio disponible para su construcción
						if(Mercados>3){
							//Nada
						}
						else{
						alertaEdificio(edificio);
						document.getElementById("Sastre").disabled = false;
						habilitarNoConstruir();

						casillaV[0] = i;
						casillaV[1] = j;
						casillaP1[0] = i;
						casillaP1[1] = j-1;
						casillaP2[0] = i;
						casillaP2[1] = j+1;

						if(izquierda == "T" || izquierda == "Mercado"){
							casillaT[0] = i-1;
							casillaT[1] = j;
						}
						else{
							casillaT[0] = i+1;
							casillaT[1] = j;
						}
							
						sastresConstruibles[numSastreD][0] = casillaV;
						sastresConstruibles[numSastreD][1] = casillaT;
						sastresConstruibles[numSastreD][2] = casillaP1;
						sastresConstruibles[numSastreD][3] = casillaP2;

						casillaV = [0,0];
						casillaT = [0,0];
						casillaP1 = [0,0];
						casillaP2 = [0,0];

						numSastreD++;
						Mercados = 0;
						}
					}
				}
				if( (izquierda == "P" && derecha == "P") || (izquierda == "P" && derecha == "Mercado") || (izquierda == "Mercado" && derecha == "P") || (izquierda == "Mercado" && derecha == "Mercado") ){
					if(izquierda == "Mercado" && derecha == "Mercado") {Mercados = Mercados + 2;}
					else{
						if( (izquierda == "P" && derecha == "Mercado") || (izquierda == "Mercado" && derecha == "P") ) {Mercados++;}
					}	
					if(arriba == "T" || abajo == "T" || arriba =="Mercado" || abajo=="Mercado"){
						if( arriba == "Mercado" || abajo == "Mercado" ) {Mercados++;}
							//Aqui debe ir el metodo que te pregunte si quieres construir el sastre y donde
							//Alerta de nuevo edificio disponible para su construcción
							if(Mercados>3){
								//Nada
							}
							else{
							alertaEdificio(edificio);
							document.getElementById("Sastre").disabled=false;
							habilitarNoConstruir();

							casillaV[0] = i;
						casillaV[1] = j;
						casillaP1[0] = i-1;
						casillaP1[1] = j;
						casillaP2[0] = i+1;
						casillaP2[1] = j;

						if(arriba == "T" || arriba=="Mercado"){
							casillaT[0] = i;
							casillaT[1] = j-1;
						}
						else{
							casillaT[0] = i;
							casillaT[1] = j+1;
						}
							
						sastresConstruibles[numSastreD][0] = casillaV;
						sastresConstruibles[numSastreD][1] = casillaT;
						sastresConstruibles[numSastreD][2] = casillaP1;
						sastresConstruibles[numSastreD][3] = casillaP2;

						casillaV = [0,0];
						casillaT = [0,0];
						casillaP1 = [0,0];
						casillaP2 = [0,0];

						numSastreD++;
						Mercados = 0;
						}
						}
				}
				else{
					//Nada
				}
			}	
		}
	}
}

function detectarTabernas(){
	var numTabD = 0;
						
	var casillaV = [0,0];
	var casillaL1 = [0,0];
	var casillaL2 = [0,0];

	var edificio = "Taberna";
	//Busca en todas las casillas
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			//Si hay un Ladrillo en una
			if(a[i][j] == "L" || a[i][j]=="Mercado"){
				var Mercados = 0;
				if(a[i][j]=="Mercado"){Mercados++;}
				//Se toman los valores de los que estan alrededor del Ladrillo
				var arriba = a[i][j-1];
				var abajo = a[i][j+1];
				var izquierda = a[i-1][j];
				var derecha = a[i+1][j];
				if(  (izquierda == "L" && derecha == "V") || (izquierda == "Mercado" && derecha == "V") || (izquierda == "L" && derecha == "Mercado") || (izquierda == "Mercado" && derecha == "L") || (izquierda == "V" && derecha == "Mercado") || (izquierda == "Mercado" && derecha == "Mercado")  ){
					//Aqui debe ir el metodo que te pregunte si quieres construir la taverna y donde
					//Alerta de nuevo edificio disponible para su construcción
					if(izquierda == "Mercado" && derecha == "Mercado"){Mercados = Mercados + 2;}
					else{Mercados++;}

					if(Mercados>3){
						//Nada
					}
					else{
					alertaEdificio(edificio);
					document.getElementById("Taberna").disabled= false;
					habilitarNoConstruir();

					casillaL1[0] = i;
					casillaL1[1] = j;
					casillaL2[0] = i-1;
					casillaL2[1] = j;
					casillaV[0] = i+1;
					casillaV[1] = j;

					tabernasConstruibles[numTabD][0] = casillaL1;
					tabernasConstruibles[numTabD][1] = casillaL2;
					tabernasConstruibles[numTabD][2] = casillaV;

					casillaV = [0,0];
					casillaL1 = [0,0];
					casillaL2 = [0,0];

					numTabD++;
					Mercados = 0;
					}
				}
				if(  izquierda == "V" && derecha == "L"  ){
					//Aqui debe ir el metodo que te pregunte si quieres construir la taverna y donde
					//Alerta de nuevo edificio disponible para su construcción
					alertaEdificio(edificio);
					document.getElementById("Taberna").disabled= false;
					habilitarNoConstruir();
					casillaL1[0] = i;
					casillaL1[1] = j;
					casillaL2[0] = i+1;
					casillaL2[1] = j;
					casillaV[0] = i-1;
					casillaV[1] = j;

					tabernasConstruibles[numTabD][0] = casillaL1;
					tabernasConstruibles[numTabD][1] = casillaL2;
					tabernasConstruibles[numTabD][2] = casillaV;

					casillaV = [0,0];
					casillaL1 = [0,0];
					casillaL2 = [0,0];

					numTabD++;
					Mercados = 0;
				}
				if(  arriba == "V" && abajo == "L"  ){
					//Aqui debe ir el metodo que te pregunte si quieres construir la taverna y donde
					//Alerta de nuevo edificio disponible para su construcción
					alertaEdificio(edificio);
					document.getElementById("Taberna").disabled= false;
					habilitarNoConstruir();

					casillaL1[0] = i;
					casillaL1[1] = j;
					casillaL2[0] = i;
					casillaL2[1] = j+1;
					casillaV[0] = i;
					casillaV[1] = j-1;

					tabernasConstruibles[numTabD][0] = casillaL1;
					tabernasConstruibles[numTabD][1] = casillaL2;
					tabernasConstruibles[numTabD][2] = casillaV;

					casillaV = [0,0];
					casillaL1 = [0,0];
					casillaL2 = [0,0];

					numTabD++;
					Mercados = 0;
				}
				if(  (arriba == "L" && abajo == "V") || (arriba == "Mercado" && abajo == "V") || (arriba == "L" && abajo == "Mercado") || (arriba == "Mercado" && abajo == "L") || (arriba == "V" && abajo == "Mercado") || (arriba == "Mercado" && abajo == "Mercado")  ){
					if(arriba == "Mercado" && abajo == "Mercado"){Mercados = Mercados + 2;}
					else{Mercados++;}

					if(Mercados>3){
						//Nada
					}
					//Aqui debe ir el metodo que te pregunte si quieres construir la taverna y donde
					//Alerta de nuevo edificio disponible para su construcción
					else{
					alertaEdificio(edificio);
					document.getElementById("Taberna").disabled= false;
					habilitarNoConstruir();

					casillaL1[0] = i;
					casillaL1[1] = j;
					casillaL2[0] = i;
					casillaL2[1] = j-1;
					casillaV[0] = i;
					casillaV[1] = j+1;

					tabernasConstruibles[numTabD][0] = casillaL1;
					tabernasConstruibles[numTabD][1] = casillaL2;
					tabernasConstruibles[numTabD][2] = casillaV;

					casillaV = [0,0];
					casillaL1 = [0,0];
					casillaL2 = [0,0];

					numTabD++;
					Mercados = 0;
					}
				}
				else{
					//Nada
				}
			}	
		}
	}
}

function detectarGranjas(){
	var numGranjaD = 0;
						
	var casillaM1 = [0,0];
	var casillaM2 = [0,0];
	var casillaT1 = [0,0];
	var casillaT2 = [0,0];

	var edificio = "Granja";
	//Busca en todas las casillas
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			if(a[i][j] == "M" || a[i][j] == "Mercado"){

				var arriba = a[i][j-1];
				var abajo = a[i][j+1];
				var izquierda = a[i-1][j];
				var derecha = a[i+1][j];
				var arribaIzquierda = a[i-1][j-1];
				var abajoIzquierda = a[i-1][j+1];
				var arribaDerecha = a[i+1][j-1];
				if(izquierda == "M" || izquierda=="Mercado"){
					if(arriba == "T" || arriba =="Mercado"){
						if(arribaIzquierda == "T" || arribaIzquierda=="Mercado"){
							alertaEdificio(edificio);
							document.getElementById("Granja").disabled = false;
							habilitarNoConstruir();

							casillaM1[0] = i;
							casillaM1[1] = j;
							casillaM2[0] = i-1;
							casillaM2[1] = j;
							casillaT1[0] = i;
							casillaT1[1] = j-1;
							casillaT2[0] = i-1;
							casillaT2[1] = j-1;
							
							granjasConstruibles[numGranjaD][0] = casillaM1;
							granjasConstruibles[numGranjaD][1] = casillaM2;
							granjasConstruibles[numGranjaD][2] = casillaT1;
							granjasConstruibles[numGranjaD][3] = casillaT2;

							casillaM1 = [0,0];
							casillaM2 = [0,0];
							casillaT1 = [0,0];
							casillaT2 = [0,0];

							numGranjaD++;
						}
						
					}
					if(abajo == "T" || abajo =="Mercado"){
						if(abajoIzquierda == "T" || abajoIzquierda == "Mercado" ){
							alertaEdificio(edificio);
							document.getElementById("Granja").disabled = false;
							habilitarNoConstruir();

							casillaM1[0] = i;
							casillaM1[1] = j;
							casillaM2[0] = i-1;
							casillaM2[1] = j;
							casillaT1[0] = i;
							casillaT1[1] = j+1;
							casillaT2[0] = i-1;
							casillaT2[1] = j+1;
						
							granjasConstruibles[numGranjaD][0] = casillaM1;
							granjasConstruibles[numGranjaD][1] = casillaM2;
							granjasConstruibles[numGranjaD][2] = casillaT1;
							granjasConstruibles[numGranjaD][3] = casillaT2;

							casillaM1 = [0,0];
							casillaM2 = [0,0];
							casillaT1 = [0,0];
							casillaT2 = [0,0];

							numGranjaD++;
						}
					}
					
					else{
						//Nada
					}
				}
				if(arriba == "M" || arriba =="Mercado"){
					if(derecha == "T" || derecha == "Mercado"){
						if(arribaDerecha == "T" || arribaDerecha =="Mercado"){
							alertaEdificio(edificio);
							document.getElementById("Granja").disabled = false;
							habilitarNoConstruir();

							casillaM1[0] = i;
							casillaM1[1] = j;
							casillaM2[0] = i;
							casillaM2[1] = j-1;
							casillaT1[0] = i+1;
							casillaT1[1] = j;
							casillaT2[0] = i+1;
							casillaT2[1] = j-1;
						
							granjasConstruibles[numGranjaD][0] = casillaM1;
							granjasConstruibles[numGranjaD][1] = casillaM2;
							granjasConstruibles[numGranjaD][2] = casillaT1;
							granjasConstruibles[numGranjaD][3] = casillaT2;

							casillaM1 = [0,0];
							casillaM2 = [0,0];
							casillaT1 = [0,0];
							casillaT2 = [0,0];

							numGranjaD++;
						}
					}
					if(izquierda == "T" || izquierda=="Mercado"){
						if(arribaIzquierda == "T" || arribaIzquierda=="Mercado"){
							alertaEdificio(edificio);
							document.getElementById("Granja").disabled = false;
							habilitarNoConstruir();

							casillaM1[0] = i;
							casillaM1[1] = j;
							casillaM2[0] = i;
							casillaM2[1] = j-1;
							casillaT1[0] = i-1;
							casillaT1[1] = j;
							casillaT2[0] = i-1;
							casillaT2[1] = j-1;
					
							granjasConstruibles[numGranjaD][0] = casillaM1;
							granjasConstruibles[numGranjaD][1] = casillaM2;
							granjasConstruibles[numGranjaD][2] = casillaT1;
							granjasConstruibles[numGranjaD][3] = casillaT2;

							casillaM1 = [0,0];
							casillaM2 = [0,0];
							casillaT1 = [0,0];
							casillaT2 = [0,0];

							numGranjaD++;
						}
					}
					else{
						//Nada
					}
				}
				else{
					//Nada
				}
			}	
		}
	}
}

function detectarCapillas(){
	var numCapiD = 0;
						
	var casillaV1 = [0,0];
	var casillaV2 = [0,0];
	var casillaP1 = [0,0];
	var casillaP2 = [0,0];

	var edificio = "Capilla";
	//Busca en todas las casillas
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			//Si hay un Vidrio en una
			if(a[i][j] == "V" || a[i][j] == "Mercado"){
				var Mercados = 0;
				if(a[i][j] == "Mercado"){Mercados++;}
				//Se toman los valores de los que estan alrededor del Vidrio
				var arriba = a[i][j-1];
				var abajo = a[i][j+1];
				var izquierda = a[i-1][j];
				var derecha = a[i+1][j];
				var arribaIzquierda = a[i-1][j-1];
				var abajoIzquierda = a[i-1][j+1];
				var arribaDerecha = a[i+1][j-1];
				var abajoDerecha = a[i+1][j+1];
				if(  (arriba == "P" && abajo == "P") || (arriba == "Mercado" && abajo == "P") || (arriba == "P" && abajo == "Mercado") || (arriba == "Mercado" && abajo == "Mercado") ){
					if(arriba == "Mercado" && abajo == "Mercado") {Mercados = Mercados + 2;}
					else{
						if( (arriba == "P" && abajo == "Mercado") || (arriba == "Mercado" && abajo == "P") ) {Mercados++;}
					}
					if(arribaIzquierda == "V" || abajoIzquierda == "V" ||arribaDerecha == "V" ||abajoDerecha == "V" || arribaIzquierda == "Mercado" || abajoIzquierda == "Mercado" ||arribaDerecha == "Mercado" ||abajoDerecha == "Mercado"){
						if(arribaIzquierda == "Mercado" || abajoIzquierda == "Mercado" ||arribaDerecha == "Mercado" ||abajoDerecha == "Mercado"){Mercados++;}
						if(Mercados>3){
							//Nada
						}
						else{
						alertaEdificio(edificio);
						document.getElementById("Capilla").disabled = false;
						habilitarNoConstruir();
						
						casillaV1[0] = i;
						casillaV1[1] = j;
						casillaP1[0] = i;
						casillaP1[1] = j-1;
						casillaP2[0] = i;
						casillaP2[1] = j+1;

						if(arribaIzquierda == "V"){
							casillaV2[0] = i-1;
							casillaV2[1] = j-1;
						}
						else{
							if(arribaDerecha == "V"){
								casillaV2[0] = i+1;
								casillaV2[1] = j-1;
							}
							else{
								if(abajoIzquierda == "V"){
									casillaV2[0] = i-1;
									casillaV2[1] = j+1;
								}
								else{
									if(abajoDerecha == "V"){
										casillaV2[0] = i+1;
										casillaV2[1] = j+1;
									}
								}
							}
						}
						
						capillasConstruibles[numCapiD][0] = casillaV1;
						capillasConstruibles[numCapiD][1] = casillaV2;
						capillasConstruibles[numCapiD][2] = casillaP1;
						capillasConstruibles[numCapiD][3] = casillaP2;

						casillaV1 = [0,0];
						casillaV2 = [0,0];
						casillaP1 = [0,0];
						casillaP2 = [0,0];

						numCapiD++;
						Mercados = 0;
						}
					}
				}
				if( (izquierda == "P" && derecha == "P") || (izquierda == "Mercado" && derecha == "P") || (izquierda == "P" && derecha == "Mercado") || (izquierda == "Mercado" && derecha == "Mercado") ){
					if(izquierda == "Mercado" && derecha == "Mercado") {Mercados = Mercados + 2;}
					else{
						if( (izquierda == "P" && derecha == "Mercado") || (izquierda == "Mercado" && derecha == "P") ) {Mercados++;}
					}
					if(arribaIzquierda == "V" || abajoIzquierda == "V" ||arribaDerecha == "V" ||abajoDerecha == "V" || arribaIzquierda == "Mercado" || abajoIzquierda == "Mercado" ||arribaDerecha == "Mercado" ||abajoDerecha == "Mercado"){
						if(arribaIzquierda == "Mercado" || abajoIzquierda == "Mercado" ||arribaDerecha == "Mercado" ||abajoDerecha == "Mercado"){Mercados++;}
						if(Mercados > 3){
							//Nada
						}
						else{
						alertaEdificio(edificio);
						document.getElementById("Capilla").disabled = false;
						habilitarNoConstruir();

						casillaV1[0] = i;
						casillaV1[1] = j;
						casillaP1[0] = i-1;
						casillaP1[1] = j;
						casillaP2[0] = i+1;
						casillaP2[1] = j;

						if(arribaIzquierda == "V" || arribaIzquierda == "Mercado"){
							casillaV2[0] = i-1;
							casillaV2[1] = j-1;
						}
						else{
							if(arribaDerecha == "V" || arribaDerecha == "Mercado"){
								casillaV2[0] = i+1;
								casillaV2[1] = j-1;
							}
							else{
								if(abajoIzquierda == "V" || abajoIzquierda == "Mercado"){
									casillaV2[0] = i-1;
									casillaV2[1] = j+1;
								}
								else{
									if(abajoDerecha == "V" || abajoDerecha == "Mercado"){
										casillaV2[0] = i+1;
										casillaV2[1] = j+1;
									}
								}
						}
					}
					
					capillasConstruibles[numCapiD][0] = casillaV1;
					capillasConstruibles[numCapiD][1] = casillaV2;
					capillasConstruibles[numCapiD][2] = casillaP1;
					capillasConstruibles[numCapiD][3] = casillaP2;

					casillaV1 = [0,0];
					casillaV2 = [0,0];
					casillaP1 = [0,0];
					casillaP2 = [0,0];

					numCapiD++;
					Mercados = 0;
					}
					}
				}
				else{
					//Nada
				}
			}	
		}
	}
}

function detectarMercados(){
	var numMercaD = 0;
						
	var casillaM1 = [0,0];
	var casillaM2 = [0,0];
	var casillaP1 = [0,0];
	var casillaP2 = [0,0];
	var casillaL = [0,0];

	var edificio = "Mercado";
	//Busca en todas las casillas
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			if(a[i][j] == "M"){
				var arriba = a[i][j-1];
				var abajo = a[i][j+1];
				var izquierda = a[i-1][j];
				var derecha = a[i+1][j];
				var arribaIzquierda = a[i-1][j-1];
				var abajoIzquierda = a[i-1][j+1];
				var arribaDerecha = a[i+1][j-1];
				var abajoDerecha = a[i+1][j+1];
				if(izquierda == "M" || izquierda =="Mercado"){
					if(arriba == "P" || arriba =="Mercado"){
						if(arribaIzquierda == "P" || arribaIzquierda=="Mercado"){
							if(abajo == "L" || abajoIzquierda == "L" || abajo == "Mercado" || abajoIzquierda == "Mercado"){
								alertaEdificio(edificio);
								document.getElementById("Mercado").disabled = false;
								habilitarNoConstruir();

								casillaM1[0] = i;
								casillaM1[1] = j;
								casillaM2[0] = i-1;
								casillaM2[1] = j;
								casillaP1[0] = i;
								casillaP1[1] = j-1;
								casillaP2[0] = i-1;
								casillaP2[1] = j-1;

								if(abajo=="L" || abajo =="Mercado"){
									casillaL[0] = i;
									casillaL[1] = j+1;
								}
								else{
									casillaL[0] = i-1;
									casillaL[1] = j+1;
								}
							
								mercadosConstruibles[numMercaD][0] = casillaM1;
								mercadosConstruibles[numMercaD][1] = casillaM2;
								mercadosConstruibles[numMercaD][2] = casillaP1;
								mercadosConstruibles[numMercaD][3] = casillaP2;
								mercadosConstruibles[numMercaD][4] = casillaL;

								casillaM1 = [0,0];
								casillaM2 = [0,0];
								casillaP1 = [0,0];
								casillaP2 = [0,0];
								casillaL = [0,0];

								numMercaD++;
							}
						}
					}
					if(abajo == "P" || abajo=="Mercado"){
						if(abajoIzquierda == "P" || abajoIzquierda=="Mercado"){
							if(arriba == "L" || arribaIzquierda == "L" || arriba == "Mercado" || arribaIzquierda == "Mercado"){
								alertaEdificio(edificio);
								document.getElementById("Mercado").disabled = false;
								habilitarNoConstruir();

								casillaM1[0] = i;
								casillaM1[1] = j;
								casillaM2[0] = i-1;
								casillaM2[1] = j;
								casillaP1[0] = i;
								casillaP1[1] = j+1;
								casillaP2[0] = i-1;
								casillaP2[1] = j+1;

								if(arriba=="L" || arriba =="Mercado"){
									casillaL[0] = i;
									casillaL[1] = j-1;
								}
								else{
									casillaL[0] = i-1;
									casillaL[1] = j-1;
								}
						
								mercadosConstruibles[numMercaD][0] = casillaM1;
								mercadosConstruibles[numMercaD][1] = casillaM2;
								mercadosConstruibles[numMercaD][2] = casillaP1;
								mercadosConstruibles[numMercaD][3] = casillaP2;
								mercadosConstruibles[numMercaD][4] = casillaL;

								casillaM1 = [0,0];
								casillaM2 = [0,0];
								casillaP1 = [0,0];
								casillaP2 = [0,0];
								casillaL = [0,0];

								numMercaD++;
							}
						}
					}
					else{
						
					}
				}
				if(arriba == "M" || arriba == "Mercado"){
					if(derecha == "P" || derecha =="Mercado"){
						if(arribaDerecha == "P" || arribaDerecha =="Mercado"){
							if(izquierda == "L" || arribaIzquierda == "L" || izquierda == "Mercado" || arribaIzquierda == "Mercado" ){
								alertaEdificio(edificio);
								document.getElementById("Mercado").disabled = false;
								habilitarNoConstruir();

								casillaM1[0] = i;
								casillaM1[1] = j;
								casillaM2[0] = i;
								casillaM2[1] = j-1;
								casillaP1[0] = i+1;
								casillaP1[1] = j;
								casillaP2[0] = i+1;
								casillaP2[1] = j-1;

								if(izquierda=="L" || izquierda =="Mercado"){
									casillaL[0] = i-1;
									casillaL[1] = j;
								}
								else{
									casillaL[0] = i-1;
									casillaL[1] = j-1;
								}
						
								mercadosConstruibles[numMercaD][0] = casillaM1;
								mercadosConstruibles[numMercaD][1] = casillaM2;
								mercadosConstruibles[numMercaD][2] = casillaP1;
								mercadosConstruibles[numMercaD][3] = casillaP2;
								mercadosConstruibles[numMercaD][4] = casillaL;

								casillaM1 = [0,0];
								casillaM2 = [0,0];
								casillaP1 = [0,0];
								casillaP2 = [0,0];
								casillaL = [0,0];

								numMercaD++;
							}
						}
					}
					if(izquierda == "P" || izquierda =="Mercado"){
						if(arribaIzquierda == "P" || arribaIzquierda =="Mercado"){
							if(derecha == "L" || arribaDerecha == "L" || derecha == "Mercado" || arribaDerecha == "Mercado" ){
								alertaEdificio(edificio);
								document.getElementById("Mercado").disabled = false;
								habilitarNoConstruir();

								casillaM1[0] = i;
								casillaM1[1] = j;
								casillaM2[0] = i;
								casillaM2[1] = j-1;
								casillaP1[0] = i-1;
								casillaP1[1] = j;
								casillaP2[0] = i-1;
								casillaP2[1] = j-1;

								if(derecha=="L" || derecha =="Mercado"){
									casillaL[0] = i+1;
									casillaL[1] = j;
								}
								else{
									casillaL[0] = i+1;
									casillaL[1] = j-1;
								}
							
								mercadosConstruibles[numMercaD][0] = casillaM1;
								mercadosConstruibles[numMercaD][1] = casillaM2;
								mercadosConstruibles[numMercaD][2] = casillaP1;
								mercadosConstruibles[numMercaD][3] = casillaP2;
								mercadosConstruibles[numMercaD][4] = casillaL;

								casillaM1 = [0,0];
								casillaM2 = [0,0];
								casillaP1 = [0,0];
								casillaP2 = [0,0];
								casillaL = [0,0];

								numMercaD++;
							}
						}
					}
					else{
						//Nada
					}
				}
				else{
					//Nada
				}
			}		
		}
	}
}

function detectarCobertizos(){
	var casillaM = [0,0];
	var casillaP = [0,0];

	var edificio = "Cobertizo";
	//Busca en todas las casillas
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			//Si hay un Madera en una
			if(a[i][j] == "M" || a[i][j] == "Mercado"){
				var Mercados = 0;
				if(a[i][j]=="Mercado"){Mercados++;}
				//Se toman los valores de los que estan alrededor del Madera
				var arriba = a[i][j-1];
				var abajo = a[i][j+1];
				var izquierda = a[i-1][j];
				var derecha = a[i+1][j];
				//Si alrededor del Madera hay Piedra
				if(arriba == "P" || abajo == "P" || izquierda == "P" || derecha == "P" || arriba == "Mercado" || abajo == "Mercado" || izquierda == "Mercado" || derecha == "Mercado"){
					if(arriba == "Mercado" || abajo == "Mercado" || izquierda == "Mercado" || derecha == "Mercado"){Mercados++;}
					//Aqui debe ir el metodo que te pregunte si quieres construir el cobertizo y donde
					//Alerta de nuevo edificio disponible para su construcción
					if(Mercados>1){
						//Nada
					}
					else{
					alertaEdificio(edificio);
					document.getElementById("Cobertizo").disabled= false;
					habilitarNoConstruir();

					casillaM = [i,j];

					if(arriba == "P" || arriba =="Mercado"){
						casillaP = [i,j-1];
					}
					else{
						if(izquierda == "P" || izquierda == "Mercado"){
							casillaP = [i-1,j];
						}
						else{
							if(abajo == "P" || abajo == "Mercado"){
								casillaP = [i,j+1];
							}
							else{
								casillaP = [i+1,j];
							}
						}
					}

					cobertizoConstruible[0] = casillaM;
					cobertizoConstruible[1] = casillaP;

					casillaM = [0,0];
					casillaP = [0,0];

					Mercados = 0;
					}
				}
			}	
		}
	}
}
	
function detectarCatedralDeCaterina(){
	var numCatD = 0;
						
	var casillaT = [0,0];
	var casillaV = [0,0];
	var casillaP = [0,0];

	var edificio = "Catedral";
	//Busca en todas las casillas
	for(var i=1;i<=4;i++){
		for(var j=1;j<=4;j++){
			//Si hay un Vidrio en una
			if(a[i][j] == "V" || a[i][j] == "Mercado"){
				var Mercados=0;
				if(a[i][j]=="Mercado"){Mercados++;}
				//Se toman los valores de los que estan alrededor del Vidrio
				var arriba = a[i][j-1];
				var abajo = a[i][j+1];
				var izquierda = a[i-1][j];
				var derecha = a[i+1][j];
				//Si arriba o abajo del Vidrio hay Trigo, debe haber Piedra a su izquierda o derecha
				if(arriba == "T" || abajo == "T" || arriba == "Mercado" || abajo == "Mercado"){
					if(arriba == "Mercado" || abajo == "Mercado"){Mercados++;}
					if(izquierda == "P" || derecha == "P" || izquierda == "Mercado" || derecha == "Mercado"){
						if(izquierda == "Mercado" || derecha == "Mercado"){Mercados++;}
						//Aqui debe ir el metodo que te pregunte si quieres construir la catedral y donde
						//Alerta de nuevo edificio disponible para su construcción
						if(Mercados>2){
							//Nada
						}
						else{
						alertaEdificio(edificio);
						document.getElementById("Catedral").disabled= false;
						habilitarNoConstruir();

						casillaV[0] = i;
						casillaV[1] = j; 
						
						if(arriba == "T" || arriba =="Mercado"){						
							casillaT[0] = i;
							casillaT[1] = j-1; 
						}

						else{
							casillaT[0] = i;
							casillaT[1] = j+1; 
						}

						if(izquierda == "P" || izquierda=="Mercado"){						
							casillaP[0] = i-1;
							casillaP[1] = j; 
						}

						else{
							casillaP[0] = i+1;
							casillaP[1] = j; 
						}

						catedralesConstruibles[numCatD][0] = casillaV;
						catedralesConstruibles[numCatD][1] = casillaT;
						catedralesConstruibles[numCatD][2] = casillaP;
						
						casillaV = [0,0];
						casillaT = [0,0];
						casillaP = [0,0];

						numCatD++;
						Mercados = 0;
						}
					}
				}
				if(izquierda == "T" || derecha == "T" || izquierda == "Mercado" || derecha == "Mercado"){
					if(izquierda == "Mercado" || derecha == "Mercado"){Mercados++;}
					if(arriba == "P" || abajo == "P" || arriba == "Mercado" || abajo == "Mercado"){
						if(arriba == "Mercado" || abajo == "Mercado"){Mercados++;}
						//Aqui debe ir el metodo que te pregunte si quieres construir la catedral y donde
						//Alerta de nuevo edificio disponible para su construcción
						if(Mercados>2){
							//Nada
						}
						else{
						alertaEdificio(edificio);
						document.getElementById("Catedral").disabled= false;
						habilitarNoConstruir();

						casillaV[0] = i;
						casillaV[1] = j; 
					
					if(izquierda == "T" || izquierda=="Mercado"){						
						casillaT[0] = i-1;
						casillaT[1] = j; 
					}

					else{
						casillaT[0] = i+1;
						casillaT[1] = j; 
					}

					if(arriba == "P" || arriba=="Mercado" ){						
						casillaP[0] = i;
						casillaP[1] = j-1; 
					}

					else{
						casillaP[0] = i;
						casillaP[1] = j+1; 
					}

					catedralesConstruibles[numCatD][0] = casillaV;
					catedralesConstruibles[numCatD][1] = casillaT;
					catedralesConstruibles[numCatD][2] = casillaP;
					
					casillaV = [0,0];
					casillaT = [0,0];
					casillaP = [0,0];

					numCatD++;
					Mercados=0;
						}
					}
				}
				else{

				}
			}	
		}
	}
}