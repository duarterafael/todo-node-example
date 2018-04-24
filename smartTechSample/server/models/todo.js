(function () {

  "use strict"

  module.exports = (sequelize, DataTypes) => {

    const Todo = sequelize.define('Todo', {
      text: DataTypes.STRING
    }, {});

    return Todo;
  };
})();