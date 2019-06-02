import {MapController} from 'react-map-gl';

export default class MyMapController extends MapController {
    constructor() {
        super();
        // subscribe to additional events
        this.events = ['click'];
    }

    // Override the default double tap handler
    _onDoubleTap(event) {
        // Go to New York City
        this.updateViewport(this.getMapState(), {
            longitude: -74.0,
            latitude: 40.7,
            zoom: 10
        });
    }
    _onPan(event) {
        return this.isFunctionKeyPressed(event) || event.rightButton ?
            //  Default implementation in MapController
            //  this._onPanRotate(event) : this._onPanMove(event);
            this._onPanMove(event) : this._onPanRotate(event);
    }
    setOptions(options) {
        super.setOptions(options);
        // save the custom callback
        this.onRotate = options.onRotate;
    }

    handleEvent(event) {
        if (event.type === 'click') {
            console.log('hi');
        }
        return super.handleEvent(event);
    }
}