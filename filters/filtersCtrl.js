/* jshint undef:true, unused:true, latedef:false */
/* global app  */

app.controller('filtersCtrl', ['$scope',
    function filtersCtrl($scope) {
        'use strict';

        $scope.combos = $scope.item.combos;

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };

        $scope.removeQuery = function(val) {
            $scope.dataSelections.sets[val] = {
                "tuples": [],
                "managers": [],
                "groups": [],
                "licenses": [],
                "regions": [],
                "profiles": []
            };
        };

    }
]);