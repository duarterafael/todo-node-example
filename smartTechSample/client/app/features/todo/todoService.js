(function () {

    'use strict';

    var API_URL = "/api/todos/";
    var API_BY_ID_URL = "/api/todos/:id";

    angular.module('smartTechSampleApp').factory('todoService', todoService);
    todoService.$inject = ['$resource'];

    function todoService($resource) {
        return {
            getTodos: function () {
                return $resource(API_URL, {}, {
                    execute: {
                        method: 'GET', 
                        isArray: true
                    }
                });
            },
            createTodo: function () {
                return $resource(API_URL, {}, {
                    execute: {
                        method: 'POST'
                    }
                });
            },
            deleteTodo: function () {
                return $resource(API_BY_ID_URL, {id: '@id'}, {
                    execute: {
                        method: 'DELETE'
                    }
                });
            }
        };
    }
})();