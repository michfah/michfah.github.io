(function() {
    
    var AllPlayersController = function ($scope, clubsFactory) {
        $scope.players = null;
        $scope.totalType;
        
        function init() {
             clubsFactory.getPlayers()
                .then(function(response) {
                    $scope.players = response.data;
                }, function(data, status, headers, config) {
                    //handle error
                });
        }        
        
        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    AllPlayersController.$inject = ['$scope', 'clubsFactory'];

    angular.module('clubsApp')
      .controller('AllPlayersController', AllPlayersController);
    
}());