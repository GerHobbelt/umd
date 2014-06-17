// Uses CommonJS, AMD or browser globals to create a jQuery plugin.

// Similar to jqueryPlugin.js but also tries to
// work in a CommonJS environment.
// It is unlikely jQuery will run in a CommonJS
// environment. See jqueryPlugin.js if you do
// not want to add the extra CommonJS detection.

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(root.jQuery);
    }
}(this, function ($) {
    $.fn.jqueryPluginCommonJs = function () {};
}));
