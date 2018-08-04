const qs = sel => document.querySelector(sel);
const qsa = sel => document.querySelectorAll(sel);
const getValue = ({
  name,
  value
}) => ({
  [name]: value
});

const setValue = (obj, key, val) => (obj[key] = val, obj);

const getInputValues = () => {
  const inputNodes = [...qsa('input'), qs('[name="memo"]')];
  const inputValues = _.reduce(inputNodes, (res, inp) => _.extend(res, getValue(inp)), {});

  return inputValues;
}

const todoTemplate = ({
  title,
  author,
  memo
}) => `
  <li>
    <div class="todo">
        <h3 class="title">${title}</h3>

        <p class="author">${author}</p>

        <p class="memo">${memo}</p>
    </div>
  </li>
  `;

const appendTodo = todo => {
  const todoList = qs('.todo-list');
  todoList.innerHTML = todoList.innerHTML + todoTemplate(todo);
}

const clearFields = () => {
  setValue(qs('[name="author"]'), 'value', todoApp.getUserName());
  setValue(qs('[name="title"]'), 'value', '');
  setValue(qs('[name="memo"]'), 'value', '');
  setValue(qs('[name="status"]'), 'checked', true);
}

const init = () => {
  clearFields();
  todoApp.create([{
      title: '할일1',
      author: '이도형',
      memo: '하하하'
    },
    {
      title: '할일2',
      author: '서한샘',
      memo: '공부'
    },
    {
      title: '할일3',
      author: '이도형',
      memo: '피파'
    }
  ]);

  todoApp.read().forEach(appendTodo);
}


function main() {
  init();

  qs('.btn-create').addEventListener("click", function () {
    const values = getInputValues();
    todoApp.create(values);
    appendTodo(values);
    clearFields();
  });
}

document.addEventListener("DOMContentLoaded", main);