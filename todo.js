function Todo(params) {
  params = params || {};

  this.id = Todo.getNextId();
  this.title = params.title || ('할일' + this.id);
  this.author = params.author;
  this.status = params.status || 'todo'; // 'todo' || 'doing' || 'done'
  this.memo = params.memo;
}

Todo.getNextId = (function () {
  var id = 0;

  return function () {
    return id++;
  }
})();

var isNumber = function (num) {
  return typeof num === 'number' && !Number.isNaN(num) && Number.isFinite(num);
};

var isUndefined = function (val) {
  return val === undefined;
}

var isNotUndefined = function (val) {
  return !isUndefined(val);
}

var findById = function (list, id) {
  return list.find(function (item) {
    return item.id === id;
  });
};

var todoApp = (function () {
  var userName = '서한샘';
  var todos = [];

  return {
    create: function (arg) {
      var push = function (todo) {
        todos.push(new Todo(todo));
      };

      // 인자 없거나
      if (arg === undefined) {
        push({
          author: userName
        });
      }

      // 배열
      if (arg instanceof Array) {
        arg.forEach(push);
      } else if (arg instanceof Object) {
        push(arg);
      }
    },

    read: function (arg) {
      if (arg == undefined) return todos;

      var findTodo = id => findById(todos, id);

      if (isNumber(arg)) {
        return findTodo(arg);
      } else if (arg instanceof Array) {
        return arg.map(findTodo).filter(isNotUndefined);
      }
    },



    update: function (arg) {
      const merge = props => {
        const todo = findById(todos, props.id);

        if (todo instanceof Object) {
          Object.assign(todo, props);
          console.log(todo.id);
        }
      }

      if (arg instanceof Array) {
        arg.forEach(merge);
      } else if (arg instanceof Object) {
        merge(arg);
      }
    },

    delete: function (arg) {
      const removeAt = index => todos.splice(index, 1);

      const removeById = id => {
        const index = todos.findIndex(item => item.id === id);

        if (index !== -1) {
          removeAt(index);
          console.log(id);
        }
      }

      if (isNumber(arg)) {
        removeById(arg);
      } else if (arg instanceof Array) {
        arg.forEach(removeById);
      }
    },
    getUserName() {
      return userName;
    }
  }
})();