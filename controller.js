var app = angular.module('app', []); // usado também para manipular regras de negócio que podem ou não alterar os models
	app.controller('simpleController', function ($scope) 
	{
		$scope.user = $scope = // ponteiro da aplicação, ou seja, a própria página ele cria a conexão entre o model e a view
		{
			name:"Israel"
		}
	});

	app.controller('countController', function ($scope)
	{
		$scope.counter	= 0; //counter inicia com 0

		$scope.addOne = function() //addOne: método que manipula a variável e o seu valor é refletido na view
		{
			$scope.counter++; //counter incrementa mais 1
		}
	});

	app.controller('loopController', function ($scope) 
	{
		$scope.fruits = ['banana','apple','orange'];
	});
