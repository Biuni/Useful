/**
*
* Useful.js
* Write less. Use(full) these API.
*
* @author Gianluca Bonifazi <info@biuni.it>
* www.biuni.it
* MIT License
* Version: 1.0.0
*
**/

;(function() {

    this.Useful = (function() {

        /**
        * name: randomString
        *
        * Create a random string
        * @param {Object} options
        * @return {String}
        **/
        Useful.prototype.randomString = function(options) {

            (!options) ? options = {length: null, shuffle: null} : options;

            var randomString = '',
                alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            (!options.length) ? options.length = 16: options.length;
            (!options.shuffle) ? options.shuffle = alphabet: options.shuffle;

            for (var i = 0; i < options.length; i++)
                randomString += options.shuffle.charAt(Math.floor(Math.random() * options.shuffle.length));

            return randomString;
        };

        /**
        * name: randomInt
        *
        * Create a random integer
        * @param {Object} options
        * @return {Number}
        **/
        Useful.prototype.randomInt = function(options) {

            (!options) ? options = {max: null, min: null} : options;

            (!options.max) ? options.max = 100: options.max;
            (!options.min) ? options.min = 0: options.min;

            return Math.floor((Math.random() * options.max) + options.min);

        };


        /**
        * name: timeRemain
        *
        * Calculates the time remaining
        * @param {String} endtime
        * @return {Object}
        *
        **/
        Useful.prototype.timeRemain = function(endtime) {

            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));

            if (minutes < 0) {
                days = 0; minutes = 0; hours = 0; seconds = 0;
            }

            return {
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        };

        /**
        * name: isNative
        *
        * Knowing if a given function is native or not
        * @param {Function} value
        * @return {Boolean}
        *
        **/
        Useful.prototype.isNative = function(value) {

            var toString = Object.prototype.toString;
            var fnToString = Function.prototype.toString;
            var reHostCtor = /^\[object .+?Constructor\]$/;

            var reNative = RegExp('^' +
                String(toString)
                .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
                .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
            );

            var type = typeof value;
            return type == 'function' ?
                reNative.test(fnToString.call(value)) :
                (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;

        };

        /**
        * name: insertStyle
        *
        * Add style into header
        * @param {String} css
        * @return {Void}
        *
        **/
        Useful.prototype.insertStyle = function(css) {

            var head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            style.setAttribute('media', 'screen');

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);

        };

        /**
        * name: inArray
        *
        * Check if element is in array
        * @param {Array Element} value
        * @param {Array} array
        * @return {Boolean}
        *
        **/
        Useful.prototype.inArray = function(value, array) {

            var result = false;

            for (var i = 0; i < array.length; i++) {
                if (array[i] === value)
                    result = true;
            }

            return result;
        };

        /**
        * name: rndItem
        *
        * Return random item from array
        * @param {Array} array
        * @return {Array Element}
        *
        **/
        Useful.prototype.rndItem = function(array) {

            return array[Math.floor(Math.random() * array.length)];

        };

        /**
        * name: escapeHTML
        *
        * Escape HTML string
        * @param {String} text
        * @return {String}
        *
        **/
        Useful.prototype.escapeHTML = function(text) {

            var entityMap = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#x2F;',
                '`': '&#x60;',
                '=': '&#x3D;'
            };

            return String(text).replace(/[&<>"'`=\/]/g, function(s) {
                return entityMap[s];
            });
        };

        /**
        * name: storageSupport
        *
        * Check browser support of Storage typeof
        * @return {Boolean}
        *
        **/
        Useful.prototype.storageSupport = function() {

            if (typeof(Storage) !== "undefined") {
                return true;
            } else {
                return false;
            }

        };

        /**
        * name: setLStorage
        *
        * Set a localStorage
        * @param {String} key
        * @param {String} value
        *
        **/
        Useful.prototype.setLStorage = function(key, value) {

            if (Useful.prototype.storageSupport()) {
                localStorage.setItem(key, value);
            }

        };

        /**
        * name: getLStorage
        *
        * Get a localStorage
        * @param {String} key
        *
        **/
        Useful.prototype.getLStorage = function(key) {

            if (Useful.prototype.storageSupport()) {
                return localStorage.getItem(key);
            }

        };

        /**
        * name: removeLStorage
        *
        * Remove a localStorage
        * @param {String} key
        *
        **/
        Useful.prototype.removeLStorage = function(key) {

            if (Useful.prototype.storageSupport()) {
                localStorage.removeItem(key);
            }

        };

        /**
        * name: clearLStorage
        *
        * Clear all localStorage
        *
        **/
        Useful.prototype.clearLStorage = function() {

            if (Useful.prototype.storageSupport()) {
                localStorage.clear();
            }

        };

        /**
        * name: setSStorage
        *
        * Set a sessionStorage
        * @param {String} key
        * @param {String} value
        *
        **/
        Useful.prototype.setSStorage = function(key, value) {

            if (Useful.prototype.storageSupport()) {
                sessionStorage.setItem(key, value);
            }

        };

        /**
        * name: getSStorage
        *
        * Get a sessionStorage
        * @param {String} key
        *
        **/
        Useful.prototype.getSStorage = function(key) {

            if (Useful.prototype.storageSupport()) {
                return sessionStorage.getItem(key);
            }

        };

        /**
        * name: removeSStorage
        *
        * Remove a sessionStorage
        * @param {String} key
        *
        **/
        Useful.prototype.removeSStorage = function(key) {

            if (Useful.prototype.storageSupport()) {
                sessionStorage.removeItem(key);
            }

        };

        /**
        * name: clearSStorage
        *
        * Clear all sessionStorage
        *
        **/
        Useful.prototype.clearSStorage = function() {

            if (Useful.prototype.storageSupport()) {
                sessionStorage.clear();
            }

        };

        /**
        * name: dumpArray
        *
        * Print array like print_r function
        * @param {Array} arr
        * @return {String}
        *
        **/
        Useful.prototype.dumpArray = function(arr) {

            var dumped_text = "";
            var level = 0;
            var level_padding = "";

            for (var j = 0; j < level + 1; j++) level_padding += "    ";

            if (typeof(arr) == 'object') { 
                for (var item in arr) {
                    var value = arr[item];

                    if (typeof(value) == 'object') {
                        dumped_text += level_padding + "'" + item + "' ...\n";
                        dumped_text += dump(value, level + 1);
                    } else {
                        dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
                    }
                }
            } else {
                dumped_text = "=>" + arr + "<=(" + typeof(arr) + ")";
            }
            
            return dumped_text;

        };

        /**
        * name: cleanURL
        *
        * Clean an URL string toAscii
        * @param {String} url
        * @return {String}
        *
        **/
        Useful.prototype.cleanURL = function(url) {

            var keyword = url.replace(/[^a-zA-Z0-9/_|+ -]/g, '');
            keyword = keyword.replace(/\s{2,}/g, ' ');
            keyword = keyword.replace(/\s/g, "-");
            keyword = keyword.replace(/[/_|+ -]+/g, "-");
            keyword = keyword.toLowerCase();

            return keyword;

        };
    });

}).call(this);