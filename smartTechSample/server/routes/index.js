 (function() {
     
    "use strict"

     const todosController = require('../controllers').todos;
     
     module.exports = (server) => {
         server.get('/api', (req, res) => res.status(200).send({
             message: 'Smart Tech API message test OK',
         }));
     
         server.post('/api/todos', todosController.create);
         server.get('/api/todos', todosController.list);
         server.delete('/api/todos/:id', todosController.destroy);
     };

 })();