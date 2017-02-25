(function(angular) {
    angular.module('game.lol.Jsonp', [])
        .service('HttpService', ['$window', '$document', function($window, $document) {
            this.jsonp = function(url, obj, func) {
                var rod;
                var aaa = "a1";
                $window[aaa] = func;
                var str = "?";
                for (var a in obj) {
                    str += a + "=" + obj[a] + "&";
                }
                str += "callback=" + aaa;
                var scriptM = document.createElement("script");
                scriptM.src = url + str;
                $document[0].body.appendChild(scriptM);
            }
        }])
})(angular)
