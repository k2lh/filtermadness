/* jshint undef:true, unused:true, latedef:false */
/* global app */

app.controller('activityComparisonController', ['$scope', '$http', 'API',
    function activityComparisonController($scope, $http, API) {
        'use strict';

        var calls = API;
        $http.get(calls.activityComparisondata).then(function(response){

            $scope.dataSelections = response.data.selections;
            $scope.fromDate = response.data.selections.fromDate;
            $scope.toDate = response.data.selections.toDate;

            $scope.activityComparisonCols = response.data.columns;
            $scope.activityComparisonRows = response.data.datasets.rows;
            $scope.activityComparisonChart = response.data.datasets.chart;
        });

    }
]);