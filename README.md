scenario-evolution-widget-angular [![Build Status](http://ci.cismet.de/buildStatus/icon?job=scenario-evolution-widget-angular)](https://ci.cismet.de/view/html5%20javascript/job/scenario-evolution-widget-angular/)
=================================

The AngularJS implementation of the Scenario Evolution Widget Functional Building Block.


## Get started

Simply pull in the libraries and all the dependencies via [bower](http://bower.io/)

```sh
  bower install --save scenario-evolution-widget-angular
```

There is basically one directive available in this AngularJS module that is important for you:

```xml
  <scenario-evolution-widget class="breadcrumb" input-worldstate="inputWS" selected-worldstate="selectedWS"></scenario-evolution-widget>
```

However, this will only work correctly if you provide info where to finde the ICMM instance to use:

```javascript
angular.module(
    'myCoolModule'
).config(
  [
    '$provide',
    function ($provide) {
        'use strict';

        $provide.constant('CRISMA_DOMAIN', 'CRISMA');                       // the name of the CRISMA domain to use
        $provide.constant('CRISMA_ICMM_API', 'http://url/to/the/icmm/api'); // the url to the API of the ICMM instance to use
      }
    }
  ]
);

```

Put the directive in your html, provide the constants and bind your model to the relevant items. 

### input-worldstate
single worldstate object

### selected-worldstate
single worldstate object

The input worldstate is used to actually build the scenario path. It is not changed by the component (read-only). The selected worldstate is change whenever the user clicks on worldstates that constitute the path. The path does not change (i.e. the input worldstate) but the component notifies about a change in selection (i.e. selected worldstate).

## Demo
Simply checkout the project and put the app folder in your favourite web server, or even more simple, use grunt to fire up a web server for you

```sh
grunt serve
```

## Bootstrap based styling with breadcrumb class

![bildschirmfoto vom 2014-06-06 14 37 30](https://cloud.githubusercontent.com/assets/1785245/3200194/d22301c2-ed78-11e3-800b-82ee0e3b95d5.png)

## Customized styling

![bildschirmfoto vom 2014-06-06 14 49 30](https://cloud.githubusercontent.com/assets/1785245/3200197/e9a9b08e-ed78-11e3-8663-52633b66a530.png)
