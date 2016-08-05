class ChatsController {
  constructor($ionicModal, $scope) {
    $scope.tasks = [];
 // [  { title: 'Carrots' },
 //   { title: 'Celery' },
 //   { title: 'Spinach' },
 //   { title: 'Beer' }
 // ];

    // Called when the form is submitted
    $scope.createTask = function(task) {
      $scope.tasks.push({
        title: task.title
      });
      task.title = "";
      $scope.createItemField.$setPristine();
      alert("pristine");
    };

    // Open our new task modal
    // $scope.newTask = function() {
    //   $scope.taskModal.show();
    // };
  }
}

export default ChatsController;
