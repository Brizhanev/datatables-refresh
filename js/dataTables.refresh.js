/*! Refresh for DataTables 1.0.0
 * 2018 Brizhanev Oleg
 */

/**
 * @summary     Refresh for DataTables
 * @description Adds the "refresh" button to DataTable
 * @version     1.0.0
 * @file        dataTables.refresh.js
 * @author      Brizhanev Oleg (mr.brizhanev@yandex.ru)
 * @contact     mr.brizhanev@yandex.ru
 * @copyright   Copyright 2018 Brizhanev Oleg
 *
 */

 (function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'datatables.net'], function ($) {
            return factory($, window, document);
        });
    }
    else if (typeof exports === 'object') {
        // CommonJS
        module.exports = function (root, $) {
            if (!root) {
                root = window;
            }

            if (!$ || !$.fn.dataTable) {
                $ = require('datatables.net')(root, $).$;
            }

            return factory($, root, root.document);
        };
    }
    else {
        // Browser
        factory(jQuery, window, document);
    }
}(function ($, window, document, undefined) {
    'use strict';

    $.fn.dataTable.Refresh = function ( inst ) {
        var api = new $.fn.dataTable.Api( inst );
        var settings = api.settings()[0];
        var opts = settings.oInit.refresh;

        var name = 'Refresh';
        var selector = 'button';

        if ($.isPlainObject(opts)) {
            if (opts.name !== undefined) {
                name = opts.name;
            }
            if (opts.selector !== undefined) {
                selector = opts.selector;
            }
        }
        var button = $('<button>' + name + '</button>').addClass( selector );

        // API so the feature wrapper can return the node to insert
        this.button = function () {
            return button[0];
        };

        // Listen for events
        button.on( 'click.dtll', function (e) {
            e.preventDefault();
            api.ajax.reload();
        } );

        api.on( 'destroy', function () {
            button.off( 'click.dtll' );
        } );
    };

    $.fn.dataTable.ext.feature.push( {
        fnInit: function ( settings ) {
            var refresh = new $.fn.dataTable.Refresh( settings );
            return refresh.button(); // input element
        },
        cFeature: 'R'
    });

}));