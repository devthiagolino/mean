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

	$scope.total = 0;

});