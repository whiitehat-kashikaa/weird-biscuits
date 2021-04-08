const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    //{"abbreviation":"IST","client_ip":"182.70.95.224","datetime":"2021-04-08T20:19:28.267194+05:30",
    //"day_of_week":4,"day_of_year":98,"dst":false,"dst_from":null,"dst_offset":0,"dst_until":null,
    //"raw_offset":19800,"timezone":"Asia/Kolkata","unixtime":1617893368,
    //"utc_datetime":"2021-04-08T14:49:28.267194+00:00","utc_offset":"+05:30","week_number":14}

    // write code to display time in correct format here

}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON = await response.json();

    var dt = responseJSON.datetime;

    var time = dt.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if(time >= 4 && time <= 6){
        bg = "sunrise1.png";
    } else if(time >= 7 && time <= 8){
        bg = "sunrise2.png"
    } else if(time >= 9 && time <= 10){
        bg = "sunrise3.png";
    } else if(time >= 11 && time <= 12){
        bg = "sunrise4.png";
    } else if(time >= 13 && time <= 14){
        bg = "sunrise5.png";
    } else if(time >= 15 && time <= 16){
        bg = "sunrise6.png";
    } else if(time >= 17 && time <= 18){
        bg = "sunset7.png";
    } else if(time >= 21 && time <= 22){
        bg = "sunset8.png";
    } else if(time >= 23 && time <= 24){
        bg = "sunset10.png";
    } else if(time >= 1 && time <= 2){
        bg = "sunset10.png";
    } else{
        bg = "sunset12.png"
    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
