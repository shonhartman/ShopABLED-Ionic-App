class AccountController {
  constructor($scope) {
    $scope.groceryList = [];
    $scope.itemAdd = function() {
      $scope.groceryList.push({itemText:$scope.itemInput, done:false});
        $scope.itemInput = "";
        console.log($scope.groceryList[0].itemText);
    };

    $scope.remove = function() {
    var oldList = $scope.groceryList;
    $scope.groceryList = [];
    angular.forEach(oldList, function(x) {
        if (!x.done) $scope.groceryList.push(x);
    });
  };

    var commands = {
      'new item *val' : function(val) {
        $scope.itemInput = val;
        $scope.itemAdd();
        $scope.$apply();
    },
    'remove item *val' : function(val){
      if($scope.itemInput == val) {
        console.log("removed")
        $scope.remove();
        $scope.$apply();
      }
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
