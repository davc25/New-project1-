let noCount = 0;

function shrinkNoExpandYes() {
    var noButton = document.getElementById('no-button');
    var yesButton = document.getElementById('yes-button');
    var message = document.getElementById('message');

    // Shrink "No" button
    var currentNoSize = window.getComputedStyle(noButton).getPropertyValue('font-size');
    var newNoSize = parseFloat(currentNoSize) * 0.8;
    noButton.style.fontSize = newNoSize + 'px';

    // Expand "Yes" button in a controlled way
    var currentYesSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
    var newYesSize = Math.min(parseFloat(currentYesSize) * 1.2, 40); // Max font size set to 40px
    yesButton.style.fontSize = newYesSize + 'px';

    // Update message
    noCount++;
    const sadMessages = [
        "Ma sad ko if no😢",
        "Every 'No' breaks my heart a little 💔",
        "Gwapa man kaayo akoa babyyyyyy",
        "Ma sad si siansian if no😢",
        "No jud???",
        "Gwapa kaayo akoa palanggaaaa",
        "Last nani no jud??",
        "Di pwede mo no HAHAHAHAHA 😔"
    ];
    if (noCount < sadMessages.length) {
        message.innerText = sadMessages[noCount];
    }

    // Make "No" button disappear when too small
    if (newNoSize < 5) {
        noButton.style.display = 'none';
        message.innerText = "No choice na hehe 😊❤️";
        yesButton.style.fontSize = '36px';
        yesButton.style.width = '220px';
        yesButton.style.height = '80px';
        yesButton.style.display = 'block';
    }
}

function respondYes() {
    document.getElementById('message').innerText = "Yay! Gi accept na niya nga gwapa siyaaa!!! ❤️🥰";

    // Change background to GIF
    document.body.style.background = "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2FxaDFvZmNsZWszYmJ3anczZXUxejdvNnlsZXJsM3hrNTYzYm1rayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H5PUsFQn7YEAlXgL5w/giphy.gif')";
    document.body.style.backgroundSize = "70% auto";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundAttachment = "fixed";

    // Hide Yes and No buttons
    document.getElementById('yes-button').style.display = "none";
    document.getElementById('no-button').style.display = "none";

    // Highlight the message
let message = document.getElementById('message');
message.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Light white background
message.style.padding = "10px";
message.style.borderRadius = "10px";
message.style.fontWeight = "bold";
message.style.display = "inline-block"; // Keeps the background tight around the text

    // Play music
    let music = document.getElementById('loveSong');
    music.volume = 0.5;
    music.play();

    // Show letter icon with fade-in effect
    let letterIcon = document.getElementById('letter-icon');
    letterIcon.style.display = "block";
    setTimeout(() => {
        letterIcon.classList.add('fade-in');
    }, 300);

    // Show GIFs on the sides
    showSideGifs();
}

// Function to show the letter with slow fade-in and typewriter effect
function showLetter() {
    let letter = document.getElementById('letter');
    letter.style.display = "block";
    setTimeout(() => {
        letter.classList.add('fade-in');
    }, 300);
    let letterText =`Dear Myrian, 💕  

Happy National Girlfriend's Day, baby!  
Even layo kaayo ta, ganahan ko makahibaw ka nga every single day, gina thank nako si God nga nagkaila ta.  
Bisag naa kas davao akoang heart kay para nimo rajud ni
Usahay maguol ko kay dili tika ma hug or makit an personally, pero akoang gugma para nimo strong kaayo walay kulang.
I know one day kataw-an rani nato tanan ang atoang kaagi ron, pero for now, I just want you to know that
I'm so proud of you jud, inlove kaayo nimo, og naa rako diri permi love para nimo.
Padayon lang ta baby ah? Makaya rani natoooo, kaya!! Puhon mag kuyog nata permi pero for now,
Alow me to love you from afar lang sa 😊❤️  
See you soon, beautiful. I can’t wait.  

Love you always and forever,
Dave`; 
     
    
    
document.getElementById("letter-text").textContent = ""; // Clear previous text
typeWriterEffect("letter-text", letterText, 50);

// Hide letter icon after clicking
document.getElementById('letter-icon').style.display = "none";
}

// Function to display GIFs on the sides
function showSideGifs() {
    const gifUrls = [       
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTBlc2EwM2VsOXhuMG93eTRteHRyNnN5aHVraGdseWE2c240N291ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FLdmIp6wJr91JAI/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Z5MzBuOWlybWg2aDFsdXdqMHBsbGM2N2phbjZ3MzA3YXM0YTZvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l49JFIqAYshRSD6tq/giphy.gif"
];

let leftGif = document.createElement("img");
leftGif.src = gifUrls[0];
leftGif.classList.add("side-gif", "left-gif");
leftGif.alt = "Valentine's GIF";

let rightGif = document.createElement("img");
rightGif.src = gifUrls[1];
rightGif.classList.add("side-gif", "right-gif");
rightGif.alt = "Valentine's GIF";

document.body.appendChild(leftGif);
document.body.appendChild(rightGif);
    };

// Typewriter effect function
function typeWriterEffect(elementId, text, speed) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear previous text

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-animation');
    heart.innerText = "❤️";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
