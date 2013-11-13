angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.directives',
    []
).directive(
    'scenarioEvolution',
    function () {
        'use strict';

        var scope = {
                worldstatePath: '=',
                selectedWorldstate: '='
            };

        return {
            scope: scope,
            restrict: 'E',
            templateUrl: 'partials/scenarioEvolutionTemplate.html',
            controller: function ($scope) {
                $scope.setSelectedWorldstate = function (pathIndex) {
                    $scope.selectedWorldstate = $scope.worldstatePath[pathIndex];
                };
            }
        };
    }
);
