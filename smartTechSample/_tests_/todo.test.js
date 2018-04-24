const todosController = require('../server/controllers').todos;
const fetch = require('node-fetch');

let id = null;

test('Create a Todo', async () => {
    const formData = { text: 'mirella' };
    const response = await fetch(`http://127.0.0.1:8000/api/todos`, {method: 'POST', body: JSON.stringify(formData), headers: { 'Content-Type': 'application/json' }});
    const data = await response.json();
    id = data.id;

    expect(data.text).toBe('mirella');
});

test('Create another Todo', async () => {
    const formData = { text: 'mirella2' };
    const response = await fetch(`http://127.0.0.1:8000/api/todos`, {method: 'POST', body: JSON.stringify(formData), headers: { 'Content-Type': 'application/json' }});
    const data = await response.json();

    expect(data.text).toBe('mirella2');
});

test('Get All Todos', async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/todos`);
    const data = await response.json();

    expect(data.map(todo => todo.text)).toContain('mirella');
});

test('Remove a Todo', async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {method: 'DELETE', headers: { 'Content-Type': 'application/json' }});
    const data = await response.json();

    expect(data.message).toBe('Todo deleted successfully.');
});