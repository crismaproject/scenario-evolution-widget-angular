angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget',
    [
        'de.cismet.crisma.widgets.scenarioEvolutionWidget.directives',
        'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers',
        'de.cismet.cids.rest.collidngNames.Nodes',
        'de.cismet.crisma.ICMM.Worldstates',
        'de.cismet.cids.widgets.nodePathWidget'
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

angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers',
    []
);
angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers'
).controller(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers.ScenarioEvolutionDirectiveController',
    [
        '$scope',
        'de.cismet.crisma.ICMM.Worldstates',
        'de.cismet.collidingNameService.Nodes',
        function ($scope, Worldstates, Nodes) {
            'use strict';
            // When the input worldstate changes we need to fetch the  
            // corrsponding node and pass it to the node based evolution widget
            $scope.$watch('inputWorldstate', function (newVal, oldVal) {
                if (!angular.equals(newVal,oldVal)) {
                    Nodes.get({nodeId: Nodes.utils.getRequestIdForWorldstate($scope.inputWorldstate)}, function (node) {
                        $scope.inputNode = node;
                    });
                }
            });
            
            //We need to convert the selected node also to a worldstate
            $scope.$watch('selectedNode', function (newVal, oldVal) {
                if (!angular.equals(newVal,oldVal)) {
                    var worldstateRef = $scope.selectedNode.objectKey;
                    $scope.selectedWorldstate = Worldstates.get({wsId: worldstateRef.substring(worldstateRef.lastIndexOf('/')+1,worldstateRef.length)});
                }
            });
        }
    ]
);
angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.directives',
    []
);
angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.directives'
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
            templateUrl: 'templates/scenarioEvolutionWidgetTemplate.html',
            controller: 'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers.ScenarioEvolutionDirectiveController'
        };
    }
);
