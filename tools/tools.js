/* jshint undef:true, unused:true, latedef:false */
/* global app */

app.directive('tools' ,
    function tools(){
        'use strict';
        return {
            restrict: 'A',
            templateUrl: 'components/shared/tools/tools.html',
            controller: 'toolsCtrl'
        };
});