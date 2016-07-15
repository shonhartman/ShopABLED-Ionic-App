class DashController {
  constructor($scope) {

    let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    let SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    let SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    let grammar = '#JSGF V1.0;'
    let item = $scope.items;

    this.recognition = new SpeechRecognition();
    this.speechRecognitionList = new SpeechGrammarList();
    this.speechRecognitionList.addFromString(grammar, 1);
    this.recognition.grammars = this.speechRecognitionList;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    this.diagnosticText = '';

    this.recognition.onerror = function(event) {
      console.log('error!');
    };

    this.reply_click = () => {
      this.recognition.start();
      // console.log('Ready to receive a command.');
    };

    this.recognition.onspeechend = () => {
      this.recognition.stop();
      let utterance = new SpeechSynthesisUtterance(this.diagnosticText);
      speechSynthesis.speak(utterance);
    }

    this.recognition.onresult = (event) => {
      let command = event.results[0][0].transcript;

      if (command === 'book delivery') {
        this.diagnosticText = 'Your delivery will arrive between 7 and 8.';
      }else if (command === 'cancel delivery') {
        this.diagnosticText = 'Delivery has been cancelled.';
      }else {
        this.diagnosticText = 'What can I do for you?';
      }

      $scope.$apply();
    }

    for (command === 'make a list' || 'lets make a list' || 'lets shop' ) {
      this.diagnosticText = 'What would you like to add to your list?';
      //this is where I assume a function would be called to initiate a new SpeechRecognition()
      //then it goes through the same steps as before? ...with the result populating to a list
    }
  }
}



angular.module('example',[]);
angular.module('example').controller('DashController', DashController);


export default DashController;
