export default {
    loaded: false,
    callbacks: [],
    load() {
        window.Typekit.load({
            async: true,
            active: this.loadCompleteHandler.bind(this)
        });
    },
    loadCompleteHandler() {
        this.loaded = true;
        this.callbacks.forEach((callback) => {
            callback();
        });
    },
    addLoadCallback(callback) {
        this.callbacks.push(callback);
    }
}