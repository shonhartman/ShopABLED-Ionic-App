
class ChatsController {
  constructor($scope) {
    $scope.todos = [];
    $scope.addTodo = function(){
      $scope.todos.push({'title':this.newTodo,'done':false})
      this.newTodo = '';
    }
    $scope.clearCompleted = function(){}
  }
}

export default ChatsController;
