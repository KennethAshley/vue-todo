(function(){

  'use strict';

  var app = new Vue({
    el: '#todo',
    data: {
      todos: [],
      newTodo: ''
    },

    methods: {
      addTodo: function () {
        this.todos.push(this.newTodo);
      },
      removeTodo: function (todo) {
        this.todos.$remove(todo);
      }
    }
  });

})();
