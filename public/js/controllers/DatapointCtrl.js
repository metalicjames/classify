angular.module('DatapointCtrl', []).controller('DatapointController',
    function($scope, Datapoint, $routeParams) {
        
    $scope.loadDatapoint = function() {
        Datapoint.find($routeParams.datapoint_id).then(function(res) {
            $scope.datapoint = res;
        });
    });
        
    $scope.loadDatapoint();
    
    $scope.lowerClass = function() {
        Datapoint.updateClass($routeParams.datapoint_id, "Lower Class").then(function(res) {
           //$scope.datapoint = res; 
        });
        $scope.loadDatapoint();
    }
    
    $scope.middleClass = function() {
        Datapoint.updateClass($routeParams.datapoint_id, "Middle Class").then(function(res) {
            //$scope.datapoint = res;
        });
        $scope.loadDatapoint();
    }
    
    $scope.upperClass = function() {
        Datapoint.updateClass($routeParams.datapoint_id, "Upper Class").then(function(res) {
            //$scope.data
        });
        $scope.loadDatapoint();
    }
    
    $scope.noClass = function() {
        Datapoint.updateClass($routeParams.datapoint_id, "No label").then(function(res) {
            // nothing
        });
        $scope.loadDatapoint();
    }
    
    $scope.nextImg = function() {
        // find next ID
        // go to URL
        var id;
        Datapoint.nextDatapoint().then(function(res) {
           id = res; 
        });
        $window.location.href = '/datapoint/' + id;
    }
});