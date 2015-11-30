app.controller('CtrlUsuarios', function($scope){
	
	$scope.list = [
		{
			'nome' : 'Thiago',
			'email' : 'devthiagolino@gmail.com',
			'telefone' : '(82) 99885-34863'
		},
		{
			'nome' : 'João',
			'email' : 'joão@gmail.com',
			'telefone' : '(82) 99885-34822'
		}
	];

	$scope.total = $scope.list.length;


	$scope.adicionar = function(){
		$scope.list.push({
			nome: $scope.vnome,
			email: $scope.vemail,
			telefone: $scope.vtelefone
		});

		$scope.vnome = "";
		$scope.vemail = "";
		$scope.vtelefone = "";
		
		$scope.total++;
		
	}


	$scope.remover = function(index){
		$scope.list.splice(index,1);
		$scope.total--;
	}

});