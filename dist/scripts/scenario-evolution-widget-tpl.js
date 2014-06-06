angular.module('de.cismet.crisma.widgets.scenarioEvolutionWidget.directives').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/ScenarioEvolutionWidgetTemplate.html',
    "<span>\n" +
    "    <scenario-node-evolution-widget input-node=\"inputNode\" selected-node=\"selectedNode\"/>\n" +
    "</span>"
  );

}]);
