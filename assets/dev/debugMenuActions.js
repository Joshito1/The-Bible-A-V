// Function to toggle all information displays
function toggleAllInfo() {
    const information = document.getElementById('information');

    if (information.style.display === 'block') {
        information.style.display = 'block';
        showScreenInfo();
        showWindowSizeInfo();
        showLocationInfo();
        showNavigatorInfo();
        showWebStorage();
    } else {
        information.style.display = 'none';
    }
}

// Reload the page
function reloadPage() {
    location.reload();
}