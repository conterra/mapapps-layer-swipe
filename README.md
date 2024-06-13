# Layer Swipe Bundle
The Layer Swipe bundle allows you to easily compare the content of two different layers in a map using the LayerSwipe widget of the Esri ArcGIS API for JavaScript. In the configuration you can choose between horizontal, vertical and scope viewing modes.

![Screenshot Layer Swipe Sample](https://github.com/conterra/mapapps-layer-swipe/blob/master/screenshot.JPG)

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_layer_swipe4/index.html

## Installation Guide
**Requirement: map.apps 4.8.0**

[dn_layerswipe Documentation](https://github.com/conterra/mapapps-layer-swipe/tree/master/src/main/js/bundles/dn_layerswipe)

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
