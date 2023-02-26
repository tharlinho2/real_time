import consumer from "./consumer"

consumer.subscriptions.create("UserChannel", {
  received(data) {
    if (data.cableReady) CableReady.perform(data.operations)
  }
});
