let mainContent =  `
var numberOfDrumButtons = document.querySelectorAll(" .drum ").length; <br>
<br>
 for (var i=0; numberOfDrumButtons > i; i++){ <br>
 &nbsp document.querySelectorAll(" .drum ")[i].addEventListener("click", function (){ <br>
&nbsp var buttonClicked = this.innerHTML; <br>
&nbsp makeSound(buttonClicked); <br>
&nbsp buttonAnimation(buttonClicked); <br>
&nbsp }); <br>
} <br>
<br>
// Dectecting for key <br>
<br>
document.addEventListener('keypress', function (event){ <br>
&nbsp makeSound(event.key); <br>
&nbsp buttonAnimation(event.key); <br>
}); <br>
<br>
<br>
// make Sound If Clicked or Pressed <br>
<br>
function makeSound(key) { <br>
&nbsp switch (key) { <br>
&nbsp case "w": <br>
&nbsp &nbsp var tom1 = new Audio('sounds/tom-1.mp3'); <br>
&nbsp &nbsp tom1.play(); <br>
&nbsp &nbsp break; <br>
<br>
&nbsp case "a": <br>
&nbsp &nbsp var tom2 = new Audio('sounds/tom-2.mp3'); <br>
&nbsp &nbsp tom2.play(); <br>
&nbsp &nbsp break; <br>
<br>
&nbsp case "s": <br>
&nbsp &nbsp var tom3 = new Audio('sounds/tom-3.mp3'); <br>
&nbsp &nbsp tom3.play(); <br>
&nbsp &nbsp break; <br>
<br>
&nbsp case "d": <br>
&nbsp &nbsp var tom4 = new Audio('sounds/tom-4.mp3'); <br>
&nbsp &nbsp  tom4.play(); <br>
&nbsp &nbsp break; <br>
<br>
&nbsp &nbsp case "j": <br>
&nbsp &nbsp var snare = new Audio('sounds/snare.mp3'); <br>
&nbsp &nbsp snare.play(); <br>
&nbsp &nbsp break; <br>
<br>
&nbsp &nbsp case "k": <br>
&nbsp &nbsp var kickBass = new Audio('sounds/kick-bass.mp3'); <br>
&nbsp &nbsp kickBass.play(); <br>
&nbsp &nbsp break; <br>
<br>
&nbsp &nbsp case "l": <br>
&nbsp &nbsp var crash = new Audio('sounds/crash.mp3'); <br>
&nbsp &nbsp crash.play(); <br>
&nbsp &nbsp break; <br>
&nbsp default: <br>
&nbsp console.log(buttonClicked); <br>
<br>
&nbsp } <br>
} <br>
<br>
function buttonAnimation(currentKey){ <br>
&nbsp var current = "." + currentKey; <br>
&nbsp document.querySelector( current ).classList.add('pressed'); <br>
&nbsp setTimeout(function(){ <br>
    &nbsp document.querySelector( current ).classList.remove('pressed'); <br>
    &nbsp },100); <br>
} <br>
`











//All the content which is to be displayed are stored here in an object
const allContents = {
    mainContent: mainContent,
    welcomeContent : `Welcome to ICodee. Start typing....... ;) Code will be automatically generated as soon as you press the keys on your keyboard. Have fun`,
    thankingContent : `Hope you had fun :) Try with other themes.`
}







// For Displaying welcome content
let i = 0

window.onload = function welcomeTyping(){
    const { welcomeContent } = allContents

     i < welcomeContent.length &&
        document.querySelector('.welcome').append(welcomeContent.charAt(i))
        i++
        setTimeout(welcomeTyping, 40)
        if (i === welcomeContent.length) {
                if (screen.width <= 800) { document.querySelector(".keyboard__msg").style.display = "block" }
            mainContentTyping()
        }
}









// Displaying the Content When user presess a key on keyboard.


function  mainContentTyping() {
    let keypressCount = 0;
    const { mainContent } = allContents

    $(document).keyup(function() {
        keypressCount += 5
        let displayContent = mainContent.slice(0, keypressCount)
        document.querySelector(".main-content").innerHTML = displayContent
        window.scrollTo(0,document.body.scrollHeight);

        //Displaying final Content
        if (displayContent.length === mainContent.length) { 
            $(document).off("keyup")  
            // Calling the final content
            finalContent()
        }
    })
}


 








// Displaying the final thanks content when the main content gets empty.
function finalContent() {
    const { thankingContent } = allContents
    let j = 0

    function thanksTyping () {
        if (j < thankingContent.length) {
            document.querySelector(".thanks__content").innerHTML += thankingContent.charAt(j)
            j++
            $(document).scrollTop($(document).height())
            setTimeout(thanksTyping, 50)
        }  

        if (j == thankingContent.length) {
            $(".creator").css("display", "block")
            $(".restart").css("display", "block")
            $(document).scrollTop($(document).height())
        }
    }

    thanksTyping();
}




let pervTheme = "Hacking"


function activateTheme(themeName) {

    pervTheme && document.body.classList.remove(pervTheme)
    
    let color = ""

    themeName === "Hacking" ? color = "chartreuse" : themeName === "Dark" ? color = "#bc6ff1" : color = "#ffe9d6"
    

    document.body.classList.add(themeName)
    document.querySelector('.main-content').style.color = color
    pervTheme = themeName
}





let currSong = ""
let lastSong = ""

function playSong(songName) {
    if (lastSong === songName) {
        currSong.pause()
    } else {
        currSong != "" && currSong.pause()
        currSong = new Audio(`./music/${songName}.mp3`)
        currSong.play()
        lastSong = songName
    }
}






const keyboardActivate = function () {
    $('#keyboard').focus()
}


function restart () {
    window.location.reload()
}









 


















