angular.module('alurapic').controller('FotoController', function($scope, $http){

	$scope.foto = {};
	$scope.mensagem = "";

	$scope.submeter = function(){
		if($scope.formulario.$valid){
			$http.post('v1/fotos', $scope.foto)
			.success(function(){
				$scope.foto = {}; //limpa o form
				$scope.mensagem = "Foto Cadastrada com Sucesso";
			}).error(function(erro){
				console.log("Erro: " + erro);
				$scope.mensagem = "Não foi possivel incluir a foto";
			})	
		}
	};

})