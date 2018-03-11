angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

	var ddo = {};

	ddo.restric = "AE"; //precisa

	ddo.scope = {
		//o que vai ser o atributo da tag que vou crar
		titulo : '@'
	}

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
});