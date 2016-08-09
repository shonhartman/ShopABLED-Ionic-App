
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








//////////WORKING///////////////////////////////////////////////////
// class ChatsController {
  // constructor($ionicModal, $scope) {
    // $scope.tasks = [];
 // [  { title: 'Carrots' },
 //   { title: 'Celery' },
 //   { title: 'Spinach' },
 //   { title: 'Beer' }
 // ];

    // Called when the form is submitted
    // $scope.createTask = function(task) {
    //   $scope.tasks.push({
    //     title: task.title
    //   });
    //   task.title = "";
    //   $scope.createItemField.reset();
    // };

    // Open our new task modal
    // $scope.newTask = function() {
    //   $scope.taskModal.show();
    // };
//   }
// }
/////////////////////////////////////////////////////////////////////////

export default ChatsController;
