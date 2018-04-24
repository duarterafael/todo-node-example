(function () {

    "use strict"

    const Todo = require('../models').Todo;

    module.exports = {
        create(req, res) {
            return Todo
                .create({
                    text: req.body.text
                })
                .then(todo => res.status(201).send(todo))
                .catch(error => res.status(400).send(error));
        },

        list(req, res) {
            return Todo
                .all()
                .then(todos => res.status(200).send(todos))
                .catch(error => res.status(400).send(error));
        },

        destroy(req, res) {
            return Todo
                .destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(() => res.status(200).send({ message: 'Todo deleted successfully.' }))
                .catch(error => res.status(400).send(error));
        }

    };

})();