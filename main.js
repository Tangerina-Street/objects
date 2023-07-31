video="";
status = "";

function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(415,300);

    video = createCapture(600,500);
    video.hide(); 
}

function start()
{
    objectDetector.detect(video, gotResult);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input");
}

function modelLoaded()
{
    console.log("model has been loaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 600, 500);
}