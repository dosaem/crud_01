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
  
  // browser: window
  // node: global
  
  var todoApp = (function () {
    var userName = '서한샘';
    var todos = [];
  
    return {
      create: function (arg) {
        var push = function (todo, index, nowArg) {
          todos.push(new Todo(todo));
          index = index;
          nowArg = nowArg;
          console.log(todos,index,nowArg);
        };

        function newForEach(arg, push) {
          for(var i = 0; i < arg.length; i++) {
            push(arg[i], i, arg);
          }
        }
  
        // 인자 없거나
        if (arg === undefined) {
          push({
            author: userName
          });
        }
  
        // 배열
        if (arg instanceof Array) {
          //arg.forEach(push);
          newForEach(arg, push);
         

        } else if (arg instanceof Object) {
          push(arg);
        }

        //console.log(todos);
  
        // 조건 1: 함수에 인자를 전달하지 않으면 title과 author가 비어있는 todo 생성 (status: 'todo')
        // var todo = todoApp.create();
        // console.log(todo) => {id: 6, title: null, author: null, status: 'todo'};
  
        // 조건 2: 함수에 todo 객체의 배열이 인자로 전달되면 현재 todos배열 뒤에 순차적으로 삽입
      },
  
      // read: function (arg) {
      //   // todos 배열에서 id에 해당하는 할 일 객체 찾아서 반환
      //   if (arg == undefined) return todos;
  
      //   var findTodo = id => findById(todos, id);
  
      //   if (isNumber(arg)) {
      //     return findTodo(arg);
      //   } else if (arg instanceof Array) {
      //     return arg.map(findTodo).filter(isNotUndefined);
      //   }
  
  
      //   // arg = [null, 2, "3", 4];
      //   // res = [undefined, {id:2}, undefined, {id:4}]
      //   // [{id: 2}, {id: 4}]
  
  
      //   // 조건 1: 함수의 첫 번째 인자가 숫자 일 때 id로 간주하고 id에 해당하는 객체 반환
      //   // 조건 2: 인자가 없으면 모든 할일 객체 배열로 반환
      //   // 조건 3: 함수 인자로 id의 배열을 입력받으면 id에 해당하는 객체 배열 반환
      //   //var todos2 = todos.find(i == id)
      //   //return this.todos.title;
      //   // 시간남으면
      //   // 인자가 1개일때 id가 숫자 혹은 숫자의 배열이 아닌 경우 undefined 반환
      // },
  
  
  
      // update: function (arg) {
      //   // todos 배열에 존재하는 todo 객체의 정보 수정
  
      //   /*
      //    *  사용 예시
      //    *  todoApp.update({id: 1, author: '서한샘', memo: 'javascript'});
      //    */
  
      //   const merge = props => {
      //     const todo = findById(todos, props.id);
  
      //     if (todo instanceof Object) {
      //       Object.assign(todo, props);
      //       console.log(todo.id);
      //     }
      //   }
  
      //   if (arg instanceof Array) {
      //     arg.forEach(merge);
      //   } else if (arg instanceof Object) {
      //     merge(arg);
      //   }
      // },
  
      // 조건 1. 객체 배열을 함수 인자로 받은 경우 해당하는 객체 정보에 알맞게 수정
  
      /*
       *  사용 예시
       *  todoApp.update(
       *    [
       *      {id: 1, author: '서한샘', memo: 'javascript'},
       *      {id: 2, author: '황유성', memo: 'python'}
       *    ]
       *  );
       */
  
      // 조건 2. 변경 된 객체 id console.log로 출력 (여러개면 배열로)
  
      // 조건 3. id가 없는 객체거나 해당하는 id가 없으면 무시
  
  
  
      // delete: function (arg) {
      //   // id를 입력받아 todos배열에서 해당하는 객체를 삭제
  
      //   // var str = "삭제할 id를 입력해주세요";
      //   // var content =Number(prompt(str, ''));
      //   // const idx = todos.indexOf(content);
      //   // todos.splice(idx, idx+1);
  
      //   const removeAt = index => todos.splice(index, 1);
  
      //   const removeById = id => {
      //     const index = todos.findIndex(item => item.id === id);
  
      //     if (index !== -1) {
      //       removeAt(index);
      //       console.log(id);
      //     }
      //   }
  
      //   if (isNumber(arg)) {
      //     removeById(arg);
      //   } else if (arg instanceof Array) {
      //     arg.forEach(removeById);
      //   }
  
      //   // 조건 1. 객체 배열을 함수 인자로 받은 경우 해당하는 객체 모두 삭제
      //   // 조건 2. 삭제 된 객체 id console.log로 출력 (여러개면 배열로)
      //   // 조건 3. 없는 id인 경우 무시
      // }
    }
  })();
  
  
  
  
  // Create 함수
  
  // todoApp.create();
  
  // todoApp.create({
  //   title: '공부',
  //   author: 'sdf',
  //   status: 'doing'
  // })
  
  todoApp.create(
    [{
        title: '할일2',
        author: '서한샘',
        status: 'todo'
      },
      {
        title: '할일3',
        author: '서한샘',
        status: 'todo'
      },
      {
        title: '할일4',
        author: '서한샘',
        status: 'todo'
      }
    ]
  )
  
  
  
  // Read 함수
  // const todo0 = todoApp.read();
  // console.log(todo0);
  
  // const todo1 = todoApp.read(0);
  // console.log(todo1);
  
  // const todo2 = todoApp.read([0, 1]);
  // console.log(todo2);
  
  // todoApp.update({
  //   id: null,
  //   memo: "할일 3임"
  // })
  
  // // Update 함수
  // todoApp.update(
  //   [{
  //       id: 0,
  //       author: '서한샘',
  //       memo: 'javascript',
  //       meuu: 'qweq'
  //     },
  //     {
  //       id: 2,
  //       author: '서한샘',
  //       memo: 'python'
  //     }
  //   ]
  // );
  
  // console.log(todoApp.read());
  
  
  // console.log('delete 시작');
  
  // Delete 함수
  
  // todoApp.delete(1);
  // todoApp.delete([0, 2]);
  
  
  // console.clear();
  
  // // 시간 남으면
  
  // const newTodo = todoApp.read();
  // const log = a => console.log(a);
  
  // const prop = name => obj => obj[name];
  // const hasProp = name => obj => !!obj[name];
  // const propEq = (key, val) => obj => obj[key] === val;
  // const add = (a, b) => a + b;

  // // 내함수
  // const plusMap = memo => array => array.push(); 

  
  // // 1. todos 객체 배열에 존재하는 모든 memo 값을 순회하며 거꾸로 출력하기
  
  // const reverse = str => str.split("").reverse().join("");
  
  // newTodo
  //   .filter(hasProp("memo"))
  //   .map(prop("memo"))
  //   .map(reverse)
  //   .forEach(log);



  // function newMap(){
  //   for(i = 0; i<newTodo[i]['memo']; i++) {

  //   }



  // }
  
  
  // // 2. status === done인 객체들을 찾아 객체 배열 만들기
  // newTodo.filter(propEq("status", "done"));
  
  
  // // 3. author가 '서한샘'인 객체의 id 합 구하기
  
  // // [{id, author}, {id, author}, {id, author} ...]
  // // [{id, '서한샘'}, {id, '서한샘'}, {id, '서한샘'}] // filter
  // // [1, 2, 3] // map
  // // 1 + 2 + 3 // reduce
  
  // log(newTodo
  //   .filter(propEq("author", "서한샘"))
  //   .map(prop("id"))
  //   .reduce(add, 0)
  // );
  
  
  // // bind, apply, call
  // function read(i) {
  //   return this.arr[i];
  // }
  
  // const obj = {
  //   arr: [0, 1, 2],
  //   readBind: function (idx) {
  //     const binded = read.bind(this);
  //     return binded(idx);
  //   },
  
  //   readCall: function (idx) {
  //     return read.call(this, idx);
  //   },
  
  //   readApply: function (idx) {
  //     return read.apply(this, [idx]);
  //   }
  // }
  
  // log(obj.readBind(0));
  // log(obj.readCall(1));
  // log(obj.readApply(2));