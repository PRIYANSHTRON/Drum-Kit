//for adding event listener from a corresponding alphabet key is clicked on keyboard
document.addEventListener('keypress',function(event) {

    makesound(event.key);
    buttonanimation(event.key)
});



// for finding total number of buttons
var numberofDrumButtons = document.querySelectorAll(".drum").length

//to add event listener to each button
for (i = 0; i <= numberofDrumButtons; i++) {
    //to play sound when button is clicked
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {

        let key=this.innerHTML
        makesound(key);
        buttonanimation(key)

    });
}

//to play sound
function makesound(key){
    switch (key) {
        case 'a': var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
            break;

        case 's': var audio = new Audio('sounds/crash.mp3')
            audio.play()
            break;

        case 'w': var audio = new Audio('sounds/snare.mp3')
            audio.play()
            break;

        case 'd': var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
            break;

        case 'j': var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
            break;

        case 'k': var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
            break;

        case 'l': var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
            break;

        default:
            break;
    }
}

function buttonanimation(currentkey){

    var activeButton = document.querySelector("." + currentkey)

    activeButton.classList.add(".pressed")

    setTimeout(function(){
        activeButton.classList.remove(".pressed")
    },1000)

}