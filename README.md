# Layer Swipe Bundle
The Layer Swipe bundle allows you to easily compare the content of two different layers in a map using the LayerSwipe widget of the Esri ArcGIS API for JavaScript. In the configuration you can choose between horizontal, vertical and scope viewing modes. 

![Screenshot Layer Swipe Sample](https://github.com/conterra/mapapps-layer-swipe/blob/master/screenshot.JPG)

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_layer_swipe4/index.html

## Installation Guide
**Requirement: map.apps 4.3.0**

[dn_layerlist Documentation](https://github.com/conterra/mapapps-layer-list/tree/master/src/main/js/bundles/dn_layerlist)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
