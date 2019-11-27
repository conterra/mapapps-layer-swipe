# dn_layerswipe

The Layer Swipe bundle allows you to easily compare the content of two different layers in a map using the LayerSwipe widget of the Esri ArcGIS API for JavaScript. In the configuration you can choose between horizontal, vertical and scope viewing modes.

## Usage

1. First, you need to add the bundle "dn_layerswipe" to your app.
2. Then you can configure it.

To make the functions of this bundle available to the user, the following tool can be added to a toolset:

| Tool ID         | Component       | Description              |
|-----------------|-----------------|--------------------------|
| swipeToggleTool | SwipeToggleTool | Show or hide the widget. |

## Configuration Reference

### Config:
```json
"Config": {
    "leadingLayerIds": [
        "infrared"
    ],
    "trailingLayerIds": [
        "nearInfrared"
    ],
    "direction": "horizontal",
    "position": 50
}
```

| Property         | Type   | Possible Values                        | Default          | Description                                                                                                                                                     |
|------------------|--------|----------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| leadingLayerIds  | Array  |                                        |                  | A list of layer ids. The Layers will show on the left or top side of the Swipe widget.                                                                          |
| trailingLayerIds | Array  |                                        |                  | A list of layer ids. The Layers will show on the right or top side of the Swipe widget.                                                                         |
| direction        | String | ```vertical``` &#124; ```horizontal``` | ```horizontal``` | The direction the Swipe widget moves across the view. If "horizontal", the widget will move left and right and if "vertical", the widget will move up and down. |
| position         | Number |                                        | 50               | The position of the Swipe widget.                                                                                                                               |
