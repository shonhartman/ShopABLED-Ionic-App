
class ChatsController {
  constructor($scope) {
    $scope.todos = [
      {'title':'Build a todo app', 'done':false},
    ];
    $scope.addTodo = function(){
      console.log('WTF');
      $scope.todos.push({'title':this.newTodo,'done':false})
      this.newTodo = '';
    }
    $scope.clearCompleted = function(){}
  }
}

export default ChatsController;
