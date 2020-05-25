(function()
{
    'use strict';
    angular.module("DIApp",[])
           .controller('Controller', Control);

    
           Control.$inject =['$scope','$filter'];

    function Control($scope,$filter) {
        $scope.name="Urvashi";

        $scope.ctoupper = function () {
            var uppcase = $filter('uppercase');
            $scope.name = uppcase($scope.name);
        };
        
    }
               

})
();