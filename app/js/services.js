/* Services */
/* TODO: use cidsjs module when available */
angular.module(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.services',
    [
        'de.cismet.crisma.widgets.configuration'
    ]
).factory(
    'de.cismet.crisma.widgets.scenarioEvolutionWidget.services.Worldstate',
    [
        'CRISMA_DOMAIN',
        function (CRISMA_DOMAIN) {
            'use strict';

            return {
                get: function (id) {
                    return ci.getObject(
                        CRISMA_DOMAIN,
                        'worldstates',
                        id,
                        {"fields": "id,name,parentworldstate", "expand": "parentworldstate"}
                    );
                }
            };
        }
    ]
);
