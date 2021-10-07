function preload(){

}

function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
classifier=ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/nE22zgrjJ/model.json',modelLoaded)
}

function draw(){
image(video,0,0,300,300)

classifier.classify(video,gotresult)
}

function modelLoaded(){
    console.log('model is loaded')
}

function gotresult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)

        document.getElementById("name").innerHTML=results[0].label
        document.getElementById("confidence").innerHTML=results[0].confidence.toFixed(3)
    }
}
