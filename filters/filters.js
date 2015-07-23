/* jshint undef:true, unused:true, latedef:false */
/* global app */

app.directive('filters' ,
    function filters(){
        'use strict';
        return {
            restrict: 'A',
            templateUrl: 'components/shared/filters/filters.html',
            controller: 'filtersCtrl'
        };
});