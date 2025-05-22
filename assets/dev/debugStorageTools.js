// Display web storage keys
function showWebStorage() {
    const storageListsDiv = document.getElementById('webStorageInfo');
    const localStorageKeys = Object.keys(localStorage);
    const sessionStorageKeys = Object.keys(sessionStorage);

    if (storageListsDiv.style.display === 'none' || storageListsDiv.style.display === '') {
        storageListsDiv.style.display = 'block';
        storageListsDiv.innerHTML = `
            <p class="infoTitle">Local Storage Keys:</p>
            <ul>${localStorageKeys.map(key => `<li>${key}</li>`).join('')}</ul>
            <p class="infoTitle">Session Storage Keys:</p>
            <ul>${sessionStorageKeys.map(key => `<li>${key}</li>`).join('')}</ul>
        `;
    } else {
        storageListsDiv.style.display = 'none';
    }
}

// Clear local storage
function clearLocalStorage() {
    localStorage.clear();
    alert('Local Storage has been cleared.');
}

// Clear Local storage With reload
function clearLocalStorageReload() {
    localStorage.clear();
    location.reload();
    alert('Local Storage has been cleared. Page will reload momentarily..');
}

// Clear session storage
function clearSession() {
    sessionStorage.clear();
    alert('Session Storage has been cleared.');
}

// Clear session storage With reload
function clearSessionReload() {
    sessionStorage.clear();
    location.reload();
    alert('Session has been cleared. Page will reload momentarily..');
}
