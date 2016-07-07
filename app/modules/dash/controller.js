class DashController {
  constructor($scope) {

    let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    let SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    let SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    let grammar = '#JSGF V1.0;'

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
      console.log('Ready to receive a command.');
    };

    this.recognition.onresult = (event) => {
      let command = event.results[0][0].transcript;
      console.log(command);

      if (command === 'book delivery') {
        this.diagnosticText = 'Your delivery will arrive between 7 and 8.';
      } else if (command === 'cancel delivery') {
        this.diagnosticText = 'Delivery has been cancelled.';
      } else if (command === 'make a list' || 'lets make a list' || 'lets shop' ) {
        this.diagnosticText = 'What would you like to add to your list?';
        this.myFunction = () => {
          console.log("making list");
          // let node = document.createElement("LI");
          // let textnode = document.createTextNode("Water");
          // node.appendChild(textnode);
          // document.getElementById("myList").appendChild(node);
      }
      } else {
        this.diagnosticText = 'What can I do for you?';
      }

      $scope.$apply();
    }

    this.recognition.onspeechend = () => {
      this.recognition.stop();
      let utterance = new SpeechSynthesisUtterance(this.diagnosticText);
      speechSynthesis.speak(utterance);
      console.log(utterance);
      console.log("speak utterance");
    }

  }
}

angular.module('example',[]);
angular.module('example').controller('DashController', DashController);


export default DashController;
