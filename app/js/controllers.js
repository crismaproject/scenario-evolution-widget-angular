angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers',
    [
        'de.cismet.crisma.widgets.scenarioEvolutionWidget.services',
        'de.cismet.commons.angular.angularTools',
        'de.cismet.crisma.widgets.configuration'
    ]
).controller(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers.ScenarioEvolutionWidgetController',
    [
        '$scope',
        '$injector',
        'de.cismet.crisma.widgets.scenarioEvolutionWidget.services.Worldstate',
        'de.cismet.commons.angular.angularTools.AngularTools',
        'DEBUG',

        function ($scope, $injector, Worldstate, AngularTools, DEBUG) {
            'use strict';

            var shareService;

            if ($injector.has('de.cismet.crisma.widgets.shared.SharedService')) {
                if (DEBUG) {
                    console.log("shareservice available, attaching selectedWorldstatesChanged listener");
                }

                shareService = $injector.get('de.cismet.crisma.widgets.shared.SharedService');

                $scope.$on('selectedWorldstatesChanged', function () {
                    var selectedWorldstates;

                    selectedWorldstates = shareService.getSelectedWorldstates();

                    if (selectedWorldstates.length === 1) {
                        AngularTools.safeApply($scope, function () {
                            $scope.selectedWorldstate = selectedWorldstates[0];
                        });
                    } else {
                        if (DEBUG) {
                            console.log("multiple worldstate selection not supported yet");
                        }
                    }
                });
            } else {
                if (DEBUG) {
                    console.log("shareservice not available, not listening for selectedWorldstatesChanged");
                }
            }

            $scope.selectedWorldstate = null;
            $scope.worldstatePath = [];

            $scope.$watch('selectedWorldstate', function (n, o, s) {
                var ws, path;

                if (typeof n === 'undefined') {
                    throw {
                        name: 'IllegalStateException',
                        message: 'selected worldstate undefined'
                    };
                }

                if (o === n) {
                    // ignore event, do nothing
                    return;
                }

                ws = n;
                path = [];
                while (ws) {
                    path.push(ws);
                    ws = ws.parentworldstate;
                }

                if (typeof ws === 'undefined') {
                    // assume non-expanded worldstate
                    ws = path.pop();
                    Worldstate.get(ws.id).done(function (data) {
                        var cur = data;
                        while (cur) {
                            path.push(cur);
                            cur = cur.parentworldstate;
                        }

                        AngularTools.safeApply($scope, function () {
                            $scope.worldstatePath = path.reverse();
                        });
                    });
                } else {
                    AngularTools.safeApply($scope, function () {
                        $scope.worldstatePath = path.reverse();
                    });
                }

                if (shareService) {
                    shareService.setSelectedWorldstates([$scope.selectedWorldstate]);
                }
            });

            Worldstate.get(58).done(function (t) {
                AngularTools.safeApply($scope, function () {
                    $scope.selectedWorldstate = t;
                });
            });
        }
    ]
);