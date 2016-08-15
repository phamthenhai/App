(function () {
    'use strict'
    angular.module('app')
        .controller('Controller', ['$scope', '$rootScope','$timeout', function ($scope, $rootScope, $timeout) {
            //            var myDataRef = new Firebase('https://finalfire.firebaseio.com/');
            //            var arrAll = [];
            //            myDataRef.on("value", function (snapshot) {
            //                snapshot.forEach(function (itemSnap) {
            //                    arrAll.push(itemSnap.val());
            //                });
            //                $scope.$apply();
            //                myDataRef.off("value");
            //            }, function (errorObject) {
            //                console.log("The read failed: " + errorObject.code);
            //            });
            
            //init value
            var arrAll = [
                ['Nguyen Van Teo', 'Nguyen Thi Men', 'Nguyen Thi Men1', 'Nguyen Thi Men3', 'Nguyen Thi Men2', 'Nguyen Thi Men5'],
                 ['Tran Sach Se', 'Le Thi Cham Chi','Tran Sach Se1', 'Le Thi Cham Chi2','Tran Sach Se2', 'Le Thi Cham Chi4','Tran Sach Se3', 'Le Thi Cham Chi3'],
                ['Nguyen Van Con', 'Le Thi Chu Y'],
                ['Conan', 'Be Bi']
            ]
            
            var cate = ['Bảo Vệ', 'Vệ Sinh', 'Giữ Xe', 'Thám Tử']
            //variable 
            $scope.danhMucSTT = 1;
            $scope.arrAll = arrAll;
            $scope.cates = cate;
            $scope.listSPs = arrAll[1];
            $scope.idDanhMuc = 0;
            $scope.tenNhanVien = arrAll[0][0];
            //function
            $scope.loadDanhMuc = function(index){
                $scope.listSPs = arrAll[index];
                 $scope.idDanhMuc = index;
            } 
            $scope.loadSanPham = function(index){
                var a= arrAll[$scope.idDanhMuc];
                var ten= arrAll[$scope.idDanhMuc][index];
                $scope.tenNhanVien = ten;
                console.log(ten);
            }     
            }]);
})();