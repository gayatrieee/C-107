function startClassification()
{
    navigator.mediaDevices.getUsermedia({ audio: true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/F1iBCUOz9/model.json', modelReady);
    }
    function modelReady(){
     classifier.classify(gotResults);
     }