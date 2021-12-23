//https://teachablemachine.withgoogle.com/models/_2Rz4JzhK/




function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_2Rz4JzhK/model.json',modelready);

}


function modelready(){
    classifier.classify(gotResults);
}

function gotResults()
{
    
}