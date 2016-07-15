class AccountController {
  constructor($scope) {
    $scope.todos = [
      {'title': 'Build a todo app', 'done':false}
    ];
    $scope.addTodo = function(){
      $scope.todos.push({'title':$scope.newTodo, 'done':false})
      $scope.newTodo = ' '
    }
    $scope.clearCompleted = function(){
      $scope.todos = $scope.todos.filter(function(item) {
        return !item.done
      })
    }

    $scope.$watch('todos', function(newValue, oldValue){
      if(newValue!=oldValue){
        localStorage.setItem('todos',JSON.stringify(newValue))
      }
    },true)

  // Let's define a command.
      var commands = {
        'new item *val' : function(val) {
          $scope.newTodo = val;
          $scope.addTodo();
          $scope.$apply();
         }
      }
      // Add our commands to annyang
      annyang.addCommands(commands);
      //debug
      annyang.debug();
      annyang.addCommands(commands);
      // Start listening.
      annyang.start();

  }
}
angular.module('ToDo',[]);
export default AccountController;
