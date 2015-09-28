define(['drp-plugin-api', 'deparam'], function(pluginAPI, deparam) {
    'use strict';

    var AppAuth = function(params, callback) {
        if (typeof params === 'function') {
            callback = params;
            params = null;
        }

        params = params || deparam((window.location.search || '').substr(1));

        if (callback) {
            pluginAPI.eventListeners.add('appAuthenticated', callback);
        }

        pluginAPI.setAppName(params.appName);
    };

    return AppAuth;
});
