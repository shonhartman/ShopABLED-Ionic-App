class DashController {
  constructor() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    var grammar = '#JSGF V1.0;'
    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    var diagnostic = document.querySelector('.output');

    function reply_click(clicked_id)
    {
    recognition.start();
      console.log('Ready to receive a command.');
    }

    recognition.onresult = function(event) {
      var command = event.results[0][0].transcript;
      if (command === 'book delivery') {
        diagnostic.textContent = 'Your delivery will arrive between 7 and 8.';
      }else {
        diagnostic.textContent = 'What can I do for you?';
      }

    }

    recognition.onspeechend = function() {
      recognition.stop();
        var utterance = new SpeechSynthesisUtterance(diagnostic.textContent);
      // speak the utterance
      speechSynthesis.speak(utterance);
    }
  }
}

export default DashController;
