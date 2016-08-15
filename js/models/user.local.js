(function (){
    'use strict';
    angular.module('app').factory('UserService', UserService);
    UserService.$inject = ['$timeout', '$filter', '$q'];
    function UserService($timeout, $filter, $q){
        var service = {};
        service.GetById = GetById;
        service.GetByUserName = GetByUserName;
        service.Create = Create;
        service.Update = Update;
        return service;
        function GetById(id){
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), {id:id});
            var user = filtered.length ? filtered[0] : null;
            defered.resolve(user);
            return deferred.promise;
        }
         function GetByUserName(username) {
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), { username: username });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);
            return deferred.promise;
        }
        function Create(user){
            var deferred = $q.defer();
            $timeout(function(){
                     GetByUserName(user.username)
                     .then(function (duplicateUser){
                if(duplicateUser !== null){
                    deferred.resolve({success:false, message:'Username "' + user.username + '" is already taken' });
                }else{
                    var users = getUsers();
                    var lastUser = user[user.length-1] || {id:0};
                    user.id = lastUser.id + 1;
                    
                    users.push(user);
                    setUsers(users);
                    
                    deferred.resolve({success:true});
                }
            });
        
        }, 1000);
        return deferred.promise;
        }
        function Update(user) {
                var deferred = $q.defer();

                var users = getUsers();
                for (var i = 0; i < users.length; i++) {
                    if (users[i].id === user.id) {
                        users[i] = user;
                        break;
                    }
                }
                setUsers(users);
                deferred.resolve();

                return deferred.promise;
            }
        function getUsers() {
            if(!localStorage.users){
                localStorage.users = JSON.stringify([]);
            }

            return JSON.parse(localStorage.users);
        }

        function setUsers(users) {
            localStorage.users = JSON.stringify(users);
        }
    }
})();