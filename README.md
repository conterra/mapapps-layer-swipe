# Layer Swipe Bundle
The Layer Swipe bundle allows you to easily compare the content of two different layers in a map using the LayerSwipe widget of the Esri ArcGIS API for JavaScript. In the configuration you can choose between horizontal, vertical and scope viewing modes. 

In order to use the bundle "out-of-the-box" the sample app already provides two layers which will be used by the bundle. If you want to use your own layers please make sure to enter the map model node in the configuration of the bundle (Live Configuration -> Widgets -> Layer Swipe).

Sample App
------------------
http://www.mapapps.de/mapapps/resources/apps/downloads_layer_swipe/index.html

![Screenshot Layer Swipe Sample](https://github.com/conterra/mapapps-layer-swipe/blob/master/LayerSwipe.JPG)

#### Configurable Components of dn_querybuilder:

##### SwipeController:
```
"SwipeController": {
  "mapModelNodeId" : "swipeLayer",
  "swipeLayerWidgetOpts": {
    "type": "vertical",
    "left": "50%"
  }
}
```
```
"SwipeController": {
  "mapModelNodeId" : "swipeLayer",
  "swipeLayerWidgetOpts": {
    "type": "horizontal",
    "top": "50%"
  }
}
```
```
"SwipeController": {
  "mapModelNodeId" : "swipeLayer",
  "swipeLayerWidgetOpts": {
    "type": "scope"
  }
}
```

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
