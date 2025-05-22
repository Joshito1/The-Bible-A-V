// Function to toggle the "Show Both Clocks" button
function toggleBothClocks() {
    const analogClockDiv = document.getElementById('analogClock');
    const digitalClockDiv = document.getElementById('digitalClock');

    if (analogClockDiv.style.display === 'none' || analogClockDiv.style.display === '') {
        analogClockDiv.style.display = 'block';
        digitalClockDiv.style.display = 'block';
        clock(); // Start the analog clock

        // Start the digital clock
        const digitalClockDisplay = document.getElementById('digitalClock');
        setInterval(myTimer, 1000);

        function myTimer() {
            const d = new Date();
            digitalClockDisplay.innerHTML = d.toLocaleTimeString();
        }
    } else {
        analogClockDiv.style.display = 'none';
        digitalClockDiv.style.display = 'none';
    }
}

// Analog Clock
function showAnalogClock() {
    const analogClockDiv = document.getElementById('analogClock');
    if (analogClockDiv.style.display === 'none' || analogClockDiv.style.display === '') {
        analogClockDiv.style.display = 'block';
        clock()
    } else {
        analogClockDiv.style.display = 'none';
    }
}

var H = '....';
var H = H.split('');
var M = '.....';
var M = M.split('');
var S = '......';
var S = S.split('');
var Ypos = 0;
var Xpos = 0;
var Ybase = 8;
var Xbase = 8;
var dots = 12;

function clock() {
    var time = new Date();
    var secs = time.getSeconds();
    var sec = -1.57 + Math.PI * secs / 30;
    var mins = time.getMinutes();
    var min = -1.57 + Math.PI * mins / 30;
    var hr = time.getHours();
    var hrs = -1.57 + Math.PI * hr / 6 + Math.PI * parseInt(time.getMinutes()) / 360;
    for (i = 0; i < dots; ++i) {
        document.getElementById("dig" + (i + 1)).style.top = 0 - 15 + 60 * Math.sin(-0.49 + dots + i / 1.9).toString() + "px";
        document.getElementById("dig" + (i + 1)).style.left = 0 - 14 + 60 * Math.cos(-0.49 + dots + i / 1.9).toString() + "px";
    }
    for (i = 0; i < S.length; i++) {
        document.getElementById("sec" + (i + 1)).style.top = Ypos + i * Ybase * Math.sin(sec).toString() + "px";
        document.getElementById("sec" + (i + 1)).style.left = Xpos + i * Xbase * Math.cos(sec).toString() + "px";
    }
    for (i = 0; i < M.length; i++) {
        document.getElementById("min" + (i + 1)).style.top = Ypos + i * Ybase * Math.sin(min).toString() + "px";
        document.getElementById("min" + (i + 1)).style.left = Xpos + i * Xbase * Math.cos(min).toString() + "px";
    }
    for (i = 0; i < H.length; i++) {
        document.getElementById("hour" + (i + 1)).style.top = Ypos + i * Ybase * Math.sin(hrs).toString() + "px";
        document.getElementById("hour" + (i + 1)).style.left = Xpos + i * Xbase * Math.cos(hrs).toString() + "px";
    }
    setTimeout(clock, 50);
}

// Digital Clock
function showDigitalClock() {
    const digitalClockDiv = document.getElementById('digitalClock');
    if (digitalClockDiv.style.display === 'none' || digitalClockDiv.style.display === '') {
        digitalClockDiv.style.display = 'block';
        setInterval(myTimer, 1000);
        function myTimer() {
            const d = new Date();
            document.getElementById("digitalClock").innerHTML = d.toLocaleTimeString();
        }
    } else {
        digitalClockDiv.style.display = 'none';
    }
}