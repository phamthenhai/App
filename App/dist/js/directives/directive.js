angular.module('app').directive('xngInfo', function () {
    return {
        scope: {
            tennv: '=tennhanvien'
        },
        template: '<h4 class="color-white text-uppercase" >{{tennv}}</h4>',
        link: function (scope, elm, iAttrs) {
            scope.$watch(function () {
                scope.tennhanv = scope.tennv;
                console.log(scope.tennv);
            }, false);
        }
    }
});
