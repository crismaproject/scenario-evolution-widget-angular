angular.module('tmptest', []).run(['$templateCache', function ($templateCache) {
    $templateCache.put('partials/scenarioEvolutionTemplate.html', 
'<button '
    + 'class="sew-pathbutton-islast-{{$last}}" '
    + 'type="button" '
    + 'data-ng-repeat="ws in worldstatePath"'
    + 'data-ng-click="setSelectedWorldstate({{$index}})">'
    + '<!-- why does this not work but the redirection over a controller function does? -->'
    + '<!--data-ng-click="selectedWorldstate=worldstatePath[{{$index}}]">-->'
    + '{{ws.name}}'
+'</button>');
}]);

angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget',
    [
        'de.cismet.crisma.widgets.scenarioEvolutionWidget.directives',
        'de.cismet.crisma.widgets.scenarioEvolutionWidget.services',
        'de.cismet.crisma.widgets.scenarioEvolutionWidget.controllers',
        'tmptest'
    ]
);