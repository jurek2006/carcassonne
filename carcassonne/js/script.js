$(function(){
	console.log("Start");
	var game1 = new GameClass("#game");
});

function GameClass(where){
	this.where = where; //ścieżka do elementu div o klasie podanej w 'where', gdzie tworzone będą elementy gry

	var $gameTable = null;
	var gameTableArr = new Array();
	gameTableArr[999] = new Array();
	gameTableArr[1000] = new Array();
	gameTableArr[1000][1000] = 'x';

	// SPRAWDZENIE CZY ISTNIEJE DIV O ID ZADANYM W where

	if($("div" + this.where).length == 0){
	// jeśli nie istnieje div o id zadanym w where - wyświetlanie komunikatu o błędzie
		$('body').append("Nie udało się zainicjować przestrzeni gry");
		console.log("Nie istnieje div" + this.where);
	}
	else{
	// jeśli istnieje div o id zadanym w where - przypisanie do zmiennej $gameTable referencji do table.gameTable

		$gameTable = $('<table class="gameTable"></table>');
		$("div" + this.where).append($gameTable);
	}

	drawGameTable();

	function drawGameTable(){
		// tutaj jeszcze sprawdzić czy $gameTable nie jest null
		// console.table(gameTableArr);
		for (var x in gameTableArr) {
		    // Shows only the explicitly set index of "5", and ignores 0-4
		    console.log(x[1000]);
		}


	}

	// function putTile(row, col){
	// 	// tutaj dodać sprawdzenie, czy można położyć kafelek

	// }

}