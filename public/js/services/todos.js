angular.module('todoService', [])
  // super simple service
  // each function returns a promise object
  .factory('Todos', ['$http', function($http){
    return {
      get : function(){
        return $http.get('/api/todos');
      },
      create : function(){
        return $http.post('/api/todos', todoData);
      },
      delete : function(){
        return $http.delete('/api/todos/' + id);
      }
    }
  }]);
