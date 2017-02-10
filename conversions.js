/* below functions from 
     https://github.com/dchest/tweetnacl-util-js/blob/master/nacl-util.js
*/
(function(conversions) {
    'use strict';
    conversions.s2u = function(s) {
        var i, d = unescape(encodeURIComponent(s)),
            b = new Uint8Array(d.length);
        for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
        return b;
    };
    conversions.u2s = function(arr) {
        var i, s = [];
        for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
        return decodeURIComponent(escape(s.join('')));
    };
})(typeof module !== 'undefined' && module.exports ? module.exports : (self.conversions = self.conversions || {}));