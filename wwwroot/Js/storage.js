window.templateStorage = {
    save: function (key, json) {
        localStorage.setItem(key, json);
    },
    load: function (key) {
        return localStorage.getItem(key);
    }
};