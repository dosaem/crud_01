var todoApp = {
  userName : '서한샘',
  todos : [
    {
      id:0,
      title: '할일1',
      author: '이도형',
      status: 'done',
      memo: 'abcd'
    },
    {
      id:1,
      title: '할일2',
      author: '서한샘',
      status: 'doing',
      memo: 'efg'
    },
    {
      id:2,
      title: '할일2',
      author: '서한샘',
      status: 'done',
      memo: "hi"
    }
  ],
  
  create: function() {
    if (arguments.length > 0) {
      if(arguments[0] instanceof Array){
        for(var i = 0; i<arguments[0].length; i++){
          arguments[0][i]['id'] = this.todos.length;
          this.todos.push(arguments[0][i]);
        }

      } else {
        arguments[0].id = this.todos.length;
        this.todos.push(arguments[0]);
      }
      
  
    } else {
      var newTodo = {id:this.todos.length, title: null, autor: null, status: 'todo'};
      this.todos.push(newTodo);
    }

    // const arg = arguments[0];

    // const add = function(arr, todo) {
    //   todo.id = arr.length;
    //   arr.push(todo);
    // };

    // if (arguments.length > 0) {
    //   if(arg instanceof Array) {
    //     for(var i = 0; i < arg.length; i++) {
    //       const todo = arg[i];

    //       add(this.todos, todo);
    //     }

    //   } else {
    //     add(this.todos, arg);
    //   }
      
  
    // } else {
    //   var newTodo = {
    //     title: null,
    //     autor: null,
    //     status: 'todo'
    //   };

    //   add(this.todos, newTodo);
    // }
    
    
    // 조건 1: 함수에 인자를 전달하지 않으면 title과 author가 비어있는 todo 생성 (status: 'todo')
    // var todo = todoApp.create();
    // console.log(todo) => {id: 6, title: null, author: null, status: 'todo'};

    // 조건 2: 함수에 todo 객체의 배열이 인자로 전달되면 현재 todos배열 뒤에 순차적으로 삽입
  },



  read: function(id) {
    // todos 배열에서 id에 해당하는 할 일 객체 찾아서 반환
    if(id == undefined) {
      return this.todos;
    }
    else if(typeof id === 'number') {
      for(var i = 0; i < this.todos.length; i++) {
        if(this.todos[i]['id'] == id) {
          //console.log(this.todos[i]);
          return this.todos[i];
        }
      }
    }
    else if(id instanceof Array) {
      var newId = new Array;
      for(var i = 0; i < this.todos.length; i++) {
        for(var j = 0; j <id.length; j++){
          if(this.todos[i]['id'] == id[j]) {
            newId[i] = this.todos[i];
            //console.log(this.todos[i]);
          }
        }
      }
      return newId;
    }


    // 조건 1: 함수의 첫 번째 인자가 숫자 일 때 id로 간주하고 id에 해당하는 객체 반환
    // 조건 2: 인자가 없으면 모든 할일 객체 배열로 반환
    // 조건 3: 함수 인자로 id의 배열을 입력받으면 id에 해당하는 객체 배열 반환
    //var todos2 = todos.find(i == id)
    //return this.todos.title;
    // 시간남으면
    // 인자가 1개일때 id가 숫자 혹은 숫자의 배열이 아닌 경우 undefined 반환
  },



  update: function() {
    // todos 배열에 존재하는 todo 객체의 정보 수정

    /*
     *  사용 예시
     *  todoApp.update({id: 1, author: '서한샘', memo: 'javascript'});
     */
      if(arguments[0] instanceof Array){
        for(var i = 0; i < this.todos.length; i++) {
          for(var j = 0; j <arguments[0].length; j++){
            if(this.todos[i]['id'] == arguments[0][j]['id']) {
              const newTodo2 = Object.assign(this.todos[i], arguments[0][j]);
              console.log(newTodo2);
            }
            //else if(this.todos[i]['id'] =! arguments[0][j]['id'] || this.todos[i]['id'] == undefined  ) {}
          }
        }
      }
    },
  
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
     


  delete: function(id) {
    // id를 입력받아 todos배열에서 해당하는 객체를 삭제

    // var str = "삭제할 id를 입력해주세요";
    // var content =Number(prompt(str, ''));
    // const idx = this.todos.indexOf(content);
    // this.todos.splice(idx, idx+1);
    
        if(typeof id === 'number'){
          for(var i = 0; i < this.todos.length; i++) {
            for(var j = 0; j <id; j++){
              if(this.todos[i]['id'] == id) {
                console.log(id);
                delete this.todos[i];
              }
            }
          }
        }
       else if(id instanceof Array) {
        for(var i = 0; i < this.todos.length; i++) {
          for(var j = 0; j <id.length; j++){
            if(this.todos[i]['id'] == id[j]) {
              console.log(id);
              this.todos.splice([i],1);
            }
          }
        }
      }
  

    // 조건 1. 객체 배열을 함수 인자로 받은 경우 해당하는 객체 모두 삭제
    // 조건 2. 삭제 된 객체 id console.log로 출력 (여러개면 배열로)
    // 조건 3. 없는 id인 경우 무시

  
  },

//   rememo: function() {
//     var newMemo = new Array;
//     var n = 0;
//     for(var i = 0; i < this.todos.length; i++) {
//       for(var j = 0; j <this.todos[i]['memo'].length; j++) {
//         newMemo[n] = this.todos[i]['memo'][j];
//         n++;
//       }
//     }
//     newMemo.sort();
//     console.log(newMemo);
//   }

};




// Create 함수

// todoApp.create();

// todoApp.create(
//   {
//     title: '할일1',
//     author: 'sdf',
//     status: 'todo'
//   }
// )

// todoApp.create(
//   [
//     {
//       title: '할일2',
//       author: 'sdf',
//       status: 'todo'
//     },
//     {
//       title: '할일3',
//       author: 'sdf',
//       status: 'todo'
//     },
//     {
//       title: '할일4',
//       author: 'sdf',
//       status: 'todo'
//     } 
//   ]
// )



// Read 함수
// const todo0 = todoApp.read();
// console.log(todo0);

// const todo1 = todoApp.read(0);
// console.log(todo1);

// const todo2 = todoApp.read([0,1]);
// console.log(todo2);



// Update 함수
// todoApp.update(
//   [
//     {
//     id: 0, 
//     author: '서한샘', 
//     memo: 'javascript',
//     meuu : 'qweq'
//     },
//     {
//     id: 2,
//     author: '황유성', 
//     memo: 'python'
//     }
//   ]
// );


// Delete 함수

//todoApp.delete(1);
//todoApp.delete([0,2]);

// Rememo 함수
//todoApp.rememo();



// 시간 남으면

const newTodo = todoApp.read();

// 1. todos 객체 배열에 존재하는 모든 memo 값을 순회하며 거꾸로 출력하기
var memoArray = new Array()
for(var i=0; i<newTodo.length; i++){
    memoArray.push(newTodo[i]['memo'].split("").reverse().join(""));
  }
  console.log(memoArray);


// 2. status === done인 객체들을 찾아 객체 배열 만들기

// var stArray = new Array()
  // for(var i=0; i<newTodo.length; i++){
  //   if(newTodo[i]['status'] === 'done') {
  //     stArray.push(newTodo[i]);
  //   }
  // }
  //   console.log(stArray);


// 3. author가 '서한샘'인 객체의 id 합 구하기

    // var sumId
    // for(var i=0; i<newTodo.length; i++){
    //   if(newTodo[i]['author'] == '서한샘') {
    //      sumId =+ newTodo[i]['id'];
    //   }
    // }
    // console.log(sumId);






