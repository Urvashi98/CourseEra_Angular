(function()
{
    'use strict';
    angular.module("DIApp",[])
           .controller('Controller', Control);

    
           Control.$inject =['$scope','$filter'];

    function Control($scope,$filter) {

        
        $scope.property="";

        $scope.namefunc = function (myName) {
         
            console.log(myName);

            $filter.splitfunction = function (myName){

                if(myName==null){
                    $scope.property = "Please Enter Value.";
                }
                var arr = myName.split(',');
                return arr;
            };

            var array = $filter.splitfunction(myName);

            console.log(array);
           

            if(array.length<=3){
                $scope.property = "Easy!!";
            }
            else if(array.length>3){
                $scope.property = "Too much!!";
            }

           

            
        };
        
    };
               

})
();