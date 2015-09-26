/**
 * NewsInfiniteScroll
 * https://github.com/markocupic/news_infinite_scroll
 * Marko Cupic, Oberkirch (Switzerland)
 * Copyright 2015
 */

(function ($) {
    /**
     * @param {Object} options
     */
    NewsInfiniteScroll = function (options) {
        var opts = $.extend({
            // Defaults
            arrUrls: [],
            loadAllOnDomready: false,
            bottomPixels: 0,
            container: '.mod_newslist',
            fadeInTime: 800,
            msgText: '',
            scrollContainer: '',
            // css selector
            anchorPoint: '',

            // Callbacks
            onInitialize: function (instance) {
            },
            onXHRStart: function (instance) {
            },
            onXHRComplete: function (response, instance) {
                return response;
            },
            onXHRFail: function (instance) {

            },
            onAppendCallback: function (instance) {
            }
        }, options || {});


        // Private variables
        var self = this;
        var container = null;
        var blnLoading = 0;
        var blnStopRequesting = 0;
        var interval = 0;

        // Public variables
        self.error = false;
        self.url = '';
        self.urlIndex = 0;

        /** Public Methods **/

        /**
         * Get option
         * @param option
         * @returns {boolean|string}
         */
        this.getOption = function (option) {
            if (typeof opts[option] !== 'undefined') {

                return opts[option];
            }
            return false;
        };

        /** Private Methods **/

        /**
         * Init function
         */
        var initialize = function () {
            // Call onInitialize-callback
            opts.onInitialize(self);

            container = $(opts.container)[0];
            if (typeof container === 'undefined') {
                console.log('NewsInfiniteScroll aborted! Define a valid container in the template settings.');
                return;
            }

            if (opts.bottomPixels == 0) {
                opts.bottomPixels = 1;
            }

            // anchor points settings
            var anchorPoint = $(container);
            if (typeof $(opts.anchorPoint)[0] !== 'undefined') {
                anchorPoint = $(opts.anchorPoint)[0];
            }

            // scrollContainer
            var scrollContainer = $(window);
            if (opts.scrollContainer != '') {
                if (typeof $(opts.scrollContainer)[0] !== 'undefined') {
                    scrollContainer = $(opts.scrollContainer)[0];
                }
            }

            // Load elements on domready or load them when scrolling to the bottom
            if (opts.loadAllOnDomready === true) {
                load();
                interval = setInterval(load, 3000);
            } else {
                // Load content by event scroll
                $(scrollContainer).on('scroll', function () {
                    if ($(scrollContainer).scrollTop() > ($(anchorPoint).offset().top + $(anchorPoint).innerHeight() - $(scrollContainer).height() - opts.bottomPixels)) {
                        load();
                    }
                });
            }
        };


        /**
         * Load html with xhr
         */
        var load = function () {

            if (blnLoading == 1 || blnStopRequesting == 1) return;
            self.error = false;

            if (opts.arrUrls.length == self.urlIndex) {
                blnStopRequesting = 1;
                if (typeof interval !== 'undefined') {
                    clearInterval(interval);
                }
            }

            self.url = opts.arrUrls[self.urlIndex];
            if (typeof self.url !== 'undefined') {
                $.ajax({
                    url: self.url,
                    beforeSend: function () {
                        // Call onXHRStart-Callback
                        opts.onXHRStart(self);

                        blnLoading = 1;

                        if (opts.msgText != '') {
                            // Append Load Icon
                            $(opts.msgText).addClass('infiniteScrollMsgText').appendTo(container).fadeIn(100);
                        }
                    }
                }).done(function (response) {
                    self.error = false;
                    var html = opts.onXHRComplete(response, self);
                    if (self.error === false) {
                        self.urlIndex++;
                        appendToDom(html);
                    } else {
                        fail();
                    }
                }).fail(function () {
                    fail();
                }).always(function () {
                    // Remove Load Icon
                    $('.infiniteScrollMsgText').remove();
                    blnLoading = 0;
                })
            } else {
                blnStopRequesting = 1;
                if (typeof interval !== 'undefined') {
                    clearInterval(interval);
                }
            }
        };

        /**
         * Fail Method
         */
        var fail = function () {

            blnLoading = 0;
            // Call onXHRFail-callback
            opts.onXHRFail(self);
        };

        /**
         * Append items to DOM
         * @param html
         */
        var appendToDom = function (html) {
            // Append html to dom and fade in
            $(html).hide().appendTo(container).fadeIn(opts.fadeInTime);

            // Call onAppendCallback-callback
            opts.onAppendCallback(self);
        }

        // Start procedure
        initialize();
    };
})(jQuery);
