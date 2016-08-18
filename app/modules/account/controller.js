class AccountController {
  constructor($scope) {
    $scope.todos = [];

    $scope.clearCompleted = function(){
      $scope.todos = $scope.todos.filter(function(item) {
        return !item.done
      })

      // Initialization
      $scope.onEditChangeResult = "";

      // Event handlers
      $scope.onEditChange = function () {
        $scope.onEditChangeResult = "the value is '" + $scope.newTodo + "'";
      };
    }

///ngRepeat Todo List Example
    $scope.groceryList = [];

    $scope.itemAdd = function() {
      $scope.groceryList.push({itemText:$scope.itemInput, done:false});
        $scope.itemInput = "";
    };

    $scope.remove = function() {
      var oldList = $scope.groceryList;
      $scope.groceryList = [];
      angular.forEach(oldList, function(x) {
        if (!x.done) $scope.groceryList.push(x);
      });
    };

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

//////////////////////////////////////////////
