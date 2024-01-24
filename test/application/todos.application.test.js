import todosApplication from '../../src/application/todos.application.js';
import { data } from '../../src/infrastructure/database/local/data/todos.data';

test('Find All Todo', async () => {
  // Mockup data
  const todosMock = data;

  // Get todo from todos application
  const todos = await todosApplication.findAll();

  // Compare todos data from todo application and hard code data
  expect(todos).toEqual(todosMock);
});

test('Find Todo by ID 1', async () => {
  // Mockup data
  const todosMock = data.filter((todo) => todo._id === 1);

  // Get todo from todos application
  const todos = await todosApplication.findById(1);

  // Compare todos data from todo application and hard code data
  expect(todos).toEqual(todosMock);
});

test('Find Todo by criterial check is false', async () => {
  // Mockup data
  const todosMock = data.filter((todo) => todo.check === false);
  console.log(todosMock);
  // Get todo from todos application
  const todos = await todosApplication.findByCriterial({ check: false });

  // Compare todos data from todo application and hard code data
  expect(todos).toEqual(todosMock);
});

test('Find Todo by criterial create by is admin', async () => {
  // Mockup data
  const todosMock = data.filter((todo) => todo.createBy === 'admin');

  // Get todo from todos application
  const todos = await todosApplication.findByCriterial({ createBy: 'admin' });

  // Compare todos data from todo application and hard code data
  expect(todos).toEqual(todosMock);
});

test('Find Todo by criterial description is desc', async () => {
  // Mockup data
  const todosMock = data.filter((todo) => todo.description.includes('desc'));

  // Get todo from todos application
  const todos = await todosApplication.findByCriterial({ description: 'desc' });

  // Compare todos data from todo application and hard code data
  expect(todos).toEqual(todosMock);
});

test('Find Todo by criterial description is description 1', async () => {
  // Mockup data
  const todosMock = data.filter((todo) =>
    todo.description.includes('description 1')
  );
  console.log(todosMock);
  // Get todo from todos application
  const todos = await todosApplication.findByCriterial({
    description: 'description 1'
  });

  // Compare todos data from todo application and hard code data
  expect(todos).toEqual(todosMock);
});

test('Create Todo', async () => {
  // Mockup data
  const todoCreate = {
    _id: 5,
    check: false,
    description: 'desc 5',
    createBy: 'toffy'
  };

  data.push(todoCreate);
  const todosMock = data.filter((todo) => todo._id === 5);

  // Get todo from todos application
  todosApplication.Insert(todoCreate);
  const todo = await todosApplication.findById(todoCreate._id);

  // Compare todos data from todo application and hard code data
  expect(todo).toEqual(todosMock);
});

test('Update Todo id 1', async () => {
  // Mockup data for update
  const todoUpdate = {
    _id: 1,
    description: 'desc 1'
  };

  const todoIndex = 0;
  const todosMock = data;
  todosMock[todoIndex] = { ...todosMock[todoIndex], ...todoUpdate };

  // Get todo from todos application
  todosApplication.update(todoUpdate);
  const todos = await todosApplication.findById(todoUpdate._id);

  // Compare todos data from todo application and hard code data
  expect(todos).toEqual(todosMock);
});

test('Update Todo id 3', async () => {
  // Mockup data for update
  const todoUpdate = {
    _id: 3,
    check: false,
    description: 'desc 5',
    createBy: 'toffy'
  };

  const todoIndex = 2;
  const todosMock = data;
  todosMock[todoIndex] = todoUpdate;
  // Get todo from todos application
  todosApplication.updateAll(todoUpdate);
  const todo = await todosApplication.findById(todoUpdate._id);

  // Compare todos data from todo application and hard code data
  expect(todo).toEqual(todosMock);
});
