angular.module('DatapointService', [])

.factory('Datapoint', function($http) {
    return {
        find: function(datapoint_id) {
            return $http.get('/api/datapoint/' + datapoint_id);
        },
        
        updateClass: function(datapoint_id, new_class) {
            return $http.put('/api/datapoint/' + datapoint_id, {label: new_class});
        },
        
        nextDatapoint: function(datapoint_id) {
            return $http.get('/api/datapoint/next_no_label');
        }
        
        
    }
});