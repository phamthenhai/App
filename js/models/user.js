(function(){
    'use strict';
    angular.module('app').factory('UserService', UserService);
    UserService.$inject = ['$http'];
    function UserService($http){
        var service = {};
        
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUserName = GetByUserName;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        
        return service;
        function GetUserName(username){
            return $http.get('/api/users/'+username).then(handleSuccess, handleError('Error getting user by username')); 
        }
        
        function Create(user){
            return $http.post('/api/users', user).then(handleSuccess, handleError('Error create user')); 
        }
        
        function Update(user){
            return $http.post('/api/users', user.id, user).then(handleSuccess, handleError('Error updating user')); 
        }
        
        function handleSuccess(res){
            return res.data;
        }
        
        function handleError(error){
            return function(){
                return {success:false, message:error};
            }
        }
    }
})();