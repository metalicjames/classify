angular.module('DatapointCtrl', []).controller('DatapointController',
    function($scope, Datapoint, $routeParams, $location) {
        
    $scope.loadDatapoint = function() {
        Datapoint.find($routeParams.datapoint_id).then(function(res) {
            $scope.datapoint = res.data.datapoint;
        });
    };
        
    $scope.loadDatapoint();
    
    $scope.lowerClass = function() {
        Datapoint.updateClass($routeParams.datapoint_id, "Lower Class").then(function(res) {
            $scope.loadDatapoint();
        });
    }
    
    $scope.middleClass = function() {
        Datapoint.updateClass($routeParams.datapoint_id, "Middle Class").then(function(res) {
            $scope.loadDatapoint();
        });
    }
    
    $scope.upperClass = function() {
        Datapoint.updateClass($routeParams.datapoint_id, "Upper Class").then(function(res) {
            $scope.loadDatapoint();
        });
    }
    
    $scope.noClass = function() {
        Datapoint.updateClass($routeParams.datapoint_id, "Unclassified").then(function(res) {
            $scope.loadDatapoint();
        });
    }
    
    $scope.nextImg = function() {
        // find next ID
        // go to URL
        Datapoint.nextDatapoint().then(function(res) {
            $scope.datapoint = res.data.datapoint;
            console.log(res.data.datapoint);
            $location.path('/datapoint/' + res.data.datapoint._id);
        });
    }
});