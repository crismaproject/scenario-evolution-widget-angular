'use strict';

angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget',
    [
        'de.cismet.crisma.widgets.scenarioEvolutionWidget.directives',
        'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers',
        'de.cismet.cids.rest.collidngNames.Nodes',
        'de.cismet.crisma.ICMM.Worldstates',
        'de.cismet.crisma.widgets.scenarioNodeEvolutionWidget'
    ]
).controller(
    'AppCtrl',
    [
        '$scope',
        'de.cismet.crisma.ICMM.Worldstates',
        function ($scope, Worldstates) {
            'use strict';
            $scope.selectedNode = {};
            Worldstates.get({wsId: '58'}, function (worldstate) {
                $scope.inputWorldstate = worldstate;
            });
        }
    ]
);
