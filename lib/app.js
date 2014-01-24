(function() {
	var app = angular.module('app', []);

	app.config(['$httpProvider',
		function($httpProvider) {
			var headers = $httpProvider.defaults.headers;

			// this format will send JSON over the wire
			headers.post['Content-Type'] = headers.put['Content-Type'] = 'application/json';

			// this function will convert a JS Object Literal into a string if form-urlencoded format is used
			function transformRequestData(data) {
				if (angular.isObject(data) && String(data) !== '[object File]') {
					data = $.param(data);
				}

				return data;
			}

			// Uncomment to force "form-urlencoded" data type on POST/PUT requests
			// and convert object literals into form data

			// headers.post['Content-Type'] = headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
			// $httpProvider.defaults.transformRequest = [transformRequestData];
		}
	]);

	app.controller('ProductEditController', ['$scope', '$http',
		function($scope, $http) {
			$scope.product = {
				name: 'Product name',
				price: 12.34
			};

			$scope.saveProduct = function() {
				var params = {
					product: $scope.product
				};

				$http.post('/save.php', params).then(function(response) {
					console.log(response);
				});
			};
		}
	]);
}());