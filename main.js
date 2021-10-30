Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="img_click" src="'+data_uri+'"/>';
    });
}
console.log('ml5.version: ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelloaded)
 function modelloaded(){
     console.log('Model Loaded!');
}
function check(){
    checkImage = document.getElementById("img_click");
    classifier.classify(checkImage, gotResult)
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        document.getElementById("emotion-name1").innerHTML = results[0].label;
        document.getElementById("emotion-name2").innerHTML = results[1].label;
        if(results[0].label == "happy"){
            document.getElementById("emoji1").innerHTML = "&#128522"
        }
        if(results[0].label == "sad"){
            document.getElementById("emoji1").innerHTML = "&#128532"
        }
        if(results[0].label == "angry"){
            document.getElementById("emoji1").innerHTML = "&#128548"
        }
        if(results[1].label == "happy"){
            document.getElementById("emoji2").innerHTML = "&#128522"
        }
        if(results[1].label == "sad"){
            document.getElementById("emoji2").innerHTML = "&#128532"
        }
        if(results[1].label == "angry"){
            document.getElementById("emoji2").innerHTML = "&#128548"
        }
    }
}
