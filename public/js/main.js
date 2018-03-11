angular.module('alurapic',['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true); //faz com o que o angular deixe de trabalhar com Hash para trabalhar em HTML 5 (O BACKEND PRECISA DEIXAR VC FAZER ISSO)

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/foto.html',
		controller: "FotoController"
	});

	//rota padrão para caso de alguma m.
	$routeProvider.otherwise({
		redirectTo: '/fotos'
	});
});