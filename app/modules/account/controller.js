class AccountController {
  constructor($scope) {
    $scope.todos = [
      {'title': 'Build a todo app', 'done':false, 'tester': 'I rub it and you do it'}
    ];

    $scope.clearCompleted = function(){
      $scope.todos = $scope.todos.filter(function(item) {
        return !item.done
      })
    }

  // Let's define a command.
  // This one populates to text field but not the list
      var commands = {
        'new item *val' : function(val) {
          $scope.newTodo = val;
          $scope.addTodo = function(){
          }
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
