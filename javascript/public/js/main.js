"use strict";

var planet = "Земля";
var userName = "Петя";

/**
 * Проверяет числа
 * @param {number} num
 * @returns {boolean}
 */
function number(num) {
    if (num > 0) {
        return true;
    } else {
        return typeof num === "array"
    }
}

var img = $('<img/>');
var div = $('<div/>');

img.wrap(div);
div.append('<span/>');

var myModule = {
    myProperty: 'someValue',

    myConfig: {
        useCaching: true,
        language: 'en'
    },
    myMethod: function() {
        console.log('I can haz functionality?');
    },
    myMethod2: function() {
        console.log('Caching is: ' + ((this.myConfig.useCaching) ? 'enabled' : 'disabled'));
    },
    myMethod3: function(newConfig) {
        if (typeof newConfig == 'object') {
            this.myConfig = newConfig;

            console.log(this.myConfig.language);
        }
    }
};

myModule.myMethod(); // 'I can haz functionality'
myModule.myMethod2(); // Вывод 'enabled'
myModule.myMethod3({language:'fr',useCaching:false}); // 'fr'