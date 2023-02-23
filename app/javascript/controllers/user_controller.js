import { Controller } from "@hotwired/stimulus"
import consumer from "../channels/consumer"
import CableReady from "cable_ready";


export default class extends Controller {
    connect() {
        this.subscriptions = [];
        this.registerChannels();
    }

    disconnect() {
        this.unregisterChannels();
    }

    registerChannels() {
        console.log("creating subscription for Channel");

        let subscription =  consumer.subscriptions.create(
            { channel: "UserChannel" },
            {
                received(data) {
                    console.log("Received on channel ");
                    console.log(data);
                    if (data.cableReady) CableReady.perform(data.operations);
                },
            });
        if(subscription) {
            this.subscriptions.push(subscription);
        }
    }

    unregisterChannels() {
        for (var sub in this.subscriptions) {
            console.log("removing subscriptions ");
            console.log(sub);
            consumer.subscriptions.remove(sub);
        }
    }
}
