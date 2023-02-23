import { Controller } from "@hotwired/stimulus"
import StimulusReflex from "stimulus_reflex"

export default class extends Controller {

    connect() {
        StimulusReflex.register(this);
        this.userId = this.element.dataset.userId;

        // this.registerLocation();

        this.coords = false;

        setInterval(() => {
            if (this.coords) {
                navigator.geolocation.watchPosition( (position) => {
                    this.sendLocation(position);
                });
            }else {

                    this.registerLocation()
                    console.log("Pegando localização")
            }
        }, 1000)
    }

    registerLocation() {
        navigator.permissions.query({name:'geolocation'}).then((result) => {
            if (result.state === 'granted') {
                this.getLocation()
            } else if (result.state === 'prompt') {
                this.getPermission()
            } else if (result.state === 'denied') {
                console.log('Permissão para acessar a localização negada');
            }
        });
    }

    getPermission() {
        navigator.geolocation.getCurrentPosition(() => {
          this.sendLocation(position);
        });
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.sendLocation(position);
        })
    }

    sendLocation(position) {
        const data = {
            user_id: this.userId,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };

        if (this.isActionCableConnectionOpen()) {
            this.coords = true;
            this.stimulate('Location#update', data);
        }
    }
}
