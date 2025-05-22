// Display screen information
function showScreenInfo() {
    const screenInfoDiv = document.getElementById('screenInfo');
    if (screenInfoDiv.style.display === 'none' || screenInfoDiv.style.display === '') {
        screenInfoDiv.style.display = 'block';
        screenInfoDiv.innerHTML = `
            <p class="infoTitle">Screen Info:</p>
            <p>Width: ${screen.width}</p>
            <p>Height: ${screen.height}</p>
            <p>Available Width: ${screen.availWidth}</p>
            <p>Available Height: ${screen.availHeight}</p>
            <p>Color Depth: ${screen.colorDepth}</p>
            <p>Pixel Depth: ${screen.pixelDepth}</p>
        `;
    } else {
        screenInfoDiv.style.display = 'none';
    }
}

// Display window size information
function showWindowSizeInfo() {
    const windowSizeInfoDiv = document.getElementById('windowSizeInfo');
    if (windowSizeInfoDiv.style.display === 'none' || windowSizeInfoDiv.style.display === '') {
        windowSizeInfoDiv.style.display = 'block';
        windowSizeInfoDiv.innerHTML = `
            <p class="infoTitle">Window Size Info:</p>
            <p>Inner Width: ${window.innerWidth}</p>
            <p>Inner Height: ${window.innerHeight}</p>
        `;
    } else {
        windowSizeInfoDiv.style.display = 'none';
    }
}

// Window Location Info
function showLocationInfo() {
    const locationInfoDiv = document.getElementById('winLocationInfo');
    if (locationInfoDiv.style.display === 'none' || locationInfoDiv.style.display === '') {
        locationInfoDiv.style.display = 'block';
        locationInfoDiv.innerHTML = `
            <p class="infoTitle">Window Location Info:</p>
            <p>URL: ${window.location.href}</p>
            <p>Host: ${window.location.hostname}</p>
            <p>Path: ${window.location.pathname}</p>
            <p>Protocol: ${window.location.protocol}</p>
        `;
    } else {
        locationInfoDiv.style.display = 'none';
    }
}

// Display navigator information
function showNavigatorInfo() {
    const navigatorInfoDiv = document.getElementById('navigatorInfo');
    if (navigatorInfoDiv.style.display === 'none' || navigatorInfoDiv.style.display === '') {
        navigatorInfoDiv.style.display = 'block';
        navigatorInfoDiv.innerHTML = `
            <p class="infoTitle">Navigator Info:</p>
            <p>Cookies Enabled: ${navigator.cookieEnabled}</p>
            <p>Platform: ${navigator.platform}</p>
            <p>Language: ${navigator.language}</p>
            <p>Online: ${navigator.onLine}</p>
        `;
    } else {
        navigatorInfoDiv.style.display = 'none';
    }
}
