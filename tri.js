var liste=[[1,"MULOT Cyrille",3],[2,"AMIOT Antoine",2],[3,"BRUNET Xavier",36],[4,"FONTENAY Karine",1],[5,"PRIVAT Nicolas",61],[6,"KAMINSKI Stephan",98],[7,"GARDENT Thierry",51],[8,"HENNENFENT Roland",17],[9,"BENOIT Philippe",39],[10,"LANGEVIN Samuel",58],[11,"REVILLER Thierry",86],[12,"SAVART Jerome",65],[13,"MOULIN Franck",68],[14,"ALENDOURO Victor",66],[15,"PECOT Stève",95],[16,"VASTESAEGER Sven",75],[17,"GARNIER Dominique",23],[18,"FLOURET Michel",46],[19,"MINARD Anne laure",76],[20,"PASQUET Frederic",79],[21,"DEVILLERT Christophe",28],[22,"LAPIERRE Michael",85],[23,"ROUX Thierry",82],[24,"ROULET David",59],[25,"DORDAIN Tony",93],[26,"MENDER Miloud",96],[27,"FONTAINE Julien",29],[28,"FOUQUET Arnaud",48],[29,"GICQUEL Fabrice",97],[30,"ARAR Didier",84],[31,"BRAJON Bertrand",57],[32,"SCIACCA Aurélia",50],[33,"LOPES LELO Maria",5],[34,"FORESTIER David",33],[35,"HUET Jérôme",53],[36,"MARSURA Philippe",42],[37,"LINVAL Philippe",69],[38,"HERNOT Laurent",89],[39,"LAKAS Patrice",67],[40,"MARCHAND Eric",40],[41,"BOURNAT Thierry",38],[42,"CAMBONI Mario",25],[43,"BARICHARD Jérôme",47],[44,"SANSELME Philippe",87],[45,"ANDRE Serge",71],[46,"CARTON Noël",24],[47,"PETITJEAN Rémy",64],[48,"TEISSEDRE Christian",37],[49,"AMY Jérôme",99],[50,"MOYNAULT Christophe",35],[51,"VéNIANT Romu",92],[52,"LEBIGUE Tristan",88],[53,"JUGE Fabrice",26],[54,"VINCENT Jérémy",90],[55,"IVART Yann",30],[56,"DESJOUR Patrick",70],[57,"GALLON Fabrice",77],[58,"GUYOT Jean-joseph",27],[59,"CHATARD Benoit",80],[60,"ROUX Claude",9],[61,"KOWALSKI Dany",63],[62,"PERRETTE Christophe",34],[63,"DUBOURDIEU Stephane",81],[64,"LAMBERT Guillaume",54],[65,"FAMBRINI Cyril",52],[66,"MOUNIER Christian",72],[67,"BROSSARD Remy",13],[68,"FOUQUET Arnaud",94],[69,"ARNAUD Christian",44]];
var liste2 = [[70,"MOSNIER Bernard",55],[71,"BERGERET Lise",8],[72,"BERGERET Christophe",7],[73,"LEFEBVRE Michel",91],[74,"FLEURY Stephanie",15],[75,"AUBARD Nicolas",74],[76,"VALLEE Nelly",45],[77,"BERNABEU Julien",73],[78,"DUPRé Alain",78],[79,"SALIGNAT Jean-claude",4],[80,"VOLAT Marc",21],[81,"BENIGAUD Sylviane",18],[82,"LEPAIN Laurent",22]];


///////////////////////////////////////////
//FONCTION DE TRI GENERAL
//----------------------------------------
//???????????????????????????????
//----------------------------------------

////////////////////////////////////////////
//TRI PAR DOSSART
//-----------------------------------------
//travailler dans l'index[i][2] des 2 listes
//demander et enregistrer la saisi
//faire boucle pour parcourir tout le tableau
//Si num entré dans interface = num dans le tableau
//Alors afficher l'objet
//-------------------------------------------

var saisi='';

function dossart(){
//reinit l'affichage a chaque clic
	document.getElementById('tableau').innerHTML = '';
//demande et enregistrement du num de dossart voulu
	saisi=prompt('Quel num de dossart tu cherches toi la?!!');
//recherche dans la première liste
	for (i = 0; i < liste.length; i++) {
		if (saisi==liste[i][2]) {
//si trouver alors on donne la réponse
			//alert(liste[i]);
			document.getElementById('tableau').innerHTML += '<li>n° de classement : <strong>'
			+liste[i][0]+' </strong>nom <strong>: '+liste[i][1]+' </strong>n° de dossart : <strong>'+liste[i][2]+'</strong></li>';
		}
	}
//recherche dans la 2eme liste
	for (i = 0; i < liste2.length; i++) {
		if (saisi==liste2[i][2]) {
//reponse si l'on trouve
			//alert(liste2[i]);
			document.getElementById('tableau').innerHTML += '<li>n° de classement : <strong>'
			+liste2[i][0]+' </strong>nom : <strong>'+liste2[i][1]+' </strong>n° de dossart : <strong>'+liste2[i][2]+'</strong></li>';
		}
	}
}

/////////////////////////////////////////////
//TRI du TABLEAU par DOSSART et AFFICHE le TABLEAU
//------------------------------------------
//avec .sort()

var tabl1= new Array;
var tabl2 =new Array;

function arrive(){
document.getElementById('classementTab').innerHTML = '';
//insertion de "liste" dans "tabl1"
	for (a = 0; a < liste.length; a++) {
		tabl1.push(liste[a]);
	}
//insertion de "liste2" dans "tabl1"
	for (c = 0; c < liste2.length; c++) {
		tabl1.push(liste2[c]);
	}
//tri de tabl1
//	tabl1.sort();

//tri avec comparaison a une addition
//si le nb de l'index est == 0+z
//mettre le nb dans le nouveau tableau
for (z = 0; z < tabl1.length; z++) {
	if (tabl1[z][0]=z) {
		tabl2.push(tabl1[z]);
	}
}
//boucle pour afficher a la ligne dans la liste
	for (b = 0; b < tabl2.length; b++) {
	document.getElementById('classementTab').innerHTML += '<li> Le coureur <strong>'+tabl2[b][1]+
	'</strong> numéro de dossart <strong>'+tabl2[b][2]+'</strong> est arrivé en position <strong>'+tabl2[b][0]+'</strong></li>';
	}
	
}


////////////////////////////////////////////////
//TRI PAR NUM CLASSEMENT
//---------------------------------------------
//travailler dans l'index[j][0]
//demander le num et enregistrement dela saisi
//faire boucle pour la recherche
//si trouvé alors affiché
//---------------------------------------------

var numClassement='';
function classement(){
//reinit l'affichage a chaque clic
	document.getElementById('tableau').innerHTML = '';

	numClassement=prompt('Entrez un num d\'arrivé');
	for (j = 0; j < liste.length; j++) {
		if (numClassement==liste[j][0]) {
			//alert(liste[j]);
			document.getElementById('tableau').innerHTML += '<li><strong>n° de classement : </strong>'
			+liste[j][0]+' <strong>nom </strong>: '+liste[j][1]+' <strong>n° de dossart : </strong>'+liste[j][2]+'</li>';
		
		}
	}
	for (j = 0; j < liste2.length; j++) {
		if (numClassement==liste2[j][0]) {
			//alert(liste2[j]);
				document.getElementById('tableau').innerHTML += '<li><strong>n° de classement : </strong>'
			+liste2[j][0]+' <strong>nom </strong>: '+liste2[j][1]+' <strong>n° de dossart : </strong>'+liste2[j][2]+'</li>';
		}
	}
}
//classement();



////////////////////////////////////////////////
//NEW ARRAY
//---------------------------------------------
//mettre tous les nom et prenom dans 1 tableau
//--------------------------------------------
var nom='';
var tab=new Array;
for (m= 0; m < liste.length; m++) {
	tab.push(liste[m][1]);
}
for (m= 0; m < liste2.length; m++) {
	tab.push(liste2[m][1]);
}
//console.log(tab);

////////////////////////////////////////////////
//
//----------------------------------------------
//prendre la fonction des cookie pour savoir quand
//on arrive a l'espace entre le nom et prenom

var tabAll= new Array;
var tabNom=new Array;
var tabPrenom=new Array;
var nomPrenom='';









/*PROBLEME AVEC LE 2n+1!!!!!!!!!!!!!!!!!!!!!!!!!!!!
for (n = 1; n < tab.length; n++) {
	nomPrenom=tab[2*n-1].split(' ');
	tabAll.push(nomPrenom);
	//tabNom.push(tabAll[n]);
	//tabPrenom.push(tabAll);

}
console.log(tabAll);
*/



/////////////////////////////////////////////////
//TRI PAR NOM
//----------------------------------------------
//travailler dans l'index[k][1]
//demander le nom 
//ajouter un espace après et enregistrer
//faire la boucle
//afficher le résultat





/* A VERIFIE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function name(){
//demande le nom
	nom=prompt('le nom du participant en majuscule');
	for (k = 0; k < liste.length; k++) {
		if (nom==liste[k][1]) {
			alert(liste[k]);
		}
	}
	for (k = 0; k < liste2.length; k++) {
		if (nom==liste2[k][1]) {
			alert(liste2[k]);
		}
	}
}
name();
*/
/////////////////////////////////////////////////
//TRI PAR PRENOM
//----------------------------------------------
//travailler dans l'index[l][1]
//demander le prenom 
//ajouter un espace avant et enregistrer