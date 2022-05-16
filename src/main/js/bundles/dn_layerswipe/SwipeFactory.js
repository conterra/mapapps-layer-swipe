/*
 * Copyright (C) 2022 con terra GmbH (info@conterra.de)
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

import Swipe from "esri/widgets/Swipe";

const _swipeWidget = Symbol("_swipeWidget");
const _viewModeWatcher = Symbol("_viewModeWatcher");

export default class LayerListWidgetFactory {

    deactivate() {
        this.hideWidget();
    }

    showWidget() {
        const properties = this._properties;

        const leadingLayers = this._getLayers(properties.leadingLayerIds);
        const trailingLayers = this._getLayers(properties.trailingLayerIds);

        const swipeWidget = this[_swipeWidget] = new Swipe({
            leadingLayers: leadingLayers,
            trailingLayers: trailingLayers,
            position: properties.position,
            direction: properties.direction
        });
        swipeWidget.own(this._getView().then((view) => {
            swipeWidget.set("view", view);
            view.ui.add(swipeWidget);
        }));

        this[_viewModeWatcher] = this._mapWidgetModel.watch("viewmode", ({value: viewmode}) => {
            if (viewmode === "3D") {
                this._tool.set("active", false);
            }
        });
    }

    hideWidget() {
        this._getView().then((view) => {
            view.ui.remove(this[_swipeWidget]);
            this[_swipeWidget]?.destroy();
            this[_swipeWidget] = null;
            this[_viewModeWatcher]?.remove();
            this[_viewModeWatcher] = null;
        });
    }

    _getLayers(ids) {
        const map = this._mapWidgetModel.get("map");
        return ids.map((id) => map.findLayerById(id));
    }

    _getView() {
        const mapWidgetModel = this._mapWidgetModel;
        return new Promise((resolve) => {
            if (mapWidgetModel.view) {
                resolve(mapWidgetModel.view);
            } else {
                mapWidgetModel.watch("view", ({value: view}) => {
                    resolve(view);
                });
            }
        });
    }
}
