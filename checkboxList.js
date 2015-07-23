/* jshint undef:true, latedef:false */
/* global app */

app.directive('checkboxList', ['$timeout', 'selectionsFactory', function($timeout, selectionsFactory) {
'use strict';
    return {
        restrict: "A",
        scope: {
          selections: '=selections',
          item: '=item',
          set:'@'
        },
        link: function(scope, elem, attrs) {

                /** necessary to force directive to refire **/
                $timeout(function(){
                    if (scope.selections.indexOf(scope.item) != -1) {
                        selectionsFactory.filters.push({
                            "group": scope.set,
                            "children": scope.item
                        });
                        elem[0].checked = true;
                    }
                });

                elem.bind('click', function() {
                    var index = scope.selections.indexOf(scope.item);
                    if (elem[0].checked) {
                        if (index === -1) {
                            scope.selections.push(scope.item);
                        }
                    } else {
                        if (index !== -1) {
                            scope.selections.splice(index, 1);
                        }
                    }
                    scope.$apply(scope.selections.sort(function(a, b) {
                        return a - b;
                    }));
                });

        }
    };
}]);