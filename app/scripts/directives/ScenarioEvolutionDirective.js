angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.directives',
    []
).directive(
    'scenarioEvolutionWidget',
    function () {
        'use strict';

        return {
            scope: {
                inputWorldstate: '=',
                selectedWorldstate:'=',
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/ScenarioEvolutionWidgetTemplate.html',
            controller: 'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers.ScenarioEvolutionDirectiveController'
        };
    }
);
