/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * This class provides the controller for the Esri Swipe Widget.
 *
 * The controller retrieves the corresponding layers and creates the Esri Swipe
 * Widget. When activating this component (bundle start) the swiper is created
 * and enabled.
 */
define([
    // required amd modules
    "dojo/_base/declare",
    "dojo/query",
    "dojo/window",
    "dojo/dom-construct",
    "esri/dijit/LayerSwipe",
    "ct/_Connect"

], function (declare, d_query, d_window, d_construct, LayerSwipe, _Connect) {

    return declare([_Connect], {
        /**
         * function called when component starts - used to initialize
         */
        swipeWidget: null,
        type: "vertical",
        activate: function () {
            // retrieve the Esri map from references
            var esriMap = this._esriMap;
            // retrive the EsriMapReference from references
            var esriMapReference = this._esriMapReference;
            // retrieve the MapModel from references
            var mapModel = this._mapModel;

            // read properties and create or create an empty project if none
            // are available
            var properties = this._properties || {};
            // retrieve layer id from properties
            var mapModelNodeId = properties.mapModelNodeId;
            // check if property is undefined and throw an error if not
            if (!mapModelNodeId) {
                throw Error("SwipeController: Property 'mapModelNodeId' not defined!");
            }

            // get swipeLayer node from map model (defined in operational
            // layers) and store it in local and member variable
            // Please note that the node needs to be enabled - if not
            // it needs to be enabled programmatically
            var swipeLayer = this._swipeLayer = mapModel.getNodeById(mapModelNodeId);

            // get the corresponding Esri layer for the map model node
            var esriLayer = esriMapReference.getEsriLayer(swipeLayer);

            // create new div element and place it as child element of the map
            var node = d_construct.create("div", {id: "swipeDiv"});
            var mapNode = d_query(".mainMap");
            d_construct.place(node, mapNode[0], "first");

            // get options from configuration
            var opts = properties.swipeLayerWidgetOpts || {};
            // add swipe layer to widget options
            opts.layers = [esriLayer];
            //add Esri map object to widget options
            opts.map = esriMap;

            // get viewsize
            var vs = d_window.getBox();

            if (opts.left) {
                if (typeof(opts.left) == "string" && opts.left.indexOf("%")) {
                    var ratioWidth = parseFloat(opts.left.replace("%", "")) / 100;
                    var width = vs.w;
                    opts.left = width * ratioWidth;
                }
            }
            if (opts.top) {
                if (typeof(opts.top) == "string" && opts.top.indexOf("%")) {
                    var ratioHeight = parseFloat(opts.top.replace("%", "")) / 100;
                    var height = vs.h;
                    opts.top = height * ratioHeight;
                }
            }

            // create LayerSwipe widget and store it in local and member
            // variable for later use
            this.swipeWidget = new LayerSwipe(opts, "swipeDiv");

            // finalizes the creation of this dijit
            this.swipeWidget.startup();

            // hide swipe widget initially
            this.swipeWidget.disable();
        },

        /*
         * Function triggered when tool is activated
         */
        showSwipeWidget: function () {
            // show swipe widget
            this.swipeWidget.enable();
        },

        /*
         * Function triggered when tool is deactivated
         */
        hideSwipeWidget: function () {
            // hide swipe widget
            this.swipeWidget.disable();
        },

        deactivate: function () {
            // Layer Swipe widget
            this.swipeWidget.destroy();
            // clear all member variables
            this.swipeWidget = null;
        }
    });
});