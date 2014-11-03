angular.module('de.cismet.crisma.widgets.scenarioEvolutionWidget.directives').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/scenarioEvolutionWidgetTemplate.html',
    "<span>\n" +
    "    <cids-node-path-widget input-node=\"inputNode\" selected-node=\"selectedNode\"/>\n" +
    "</span>"
  );

}]);
