// Toggle the indicator state
function toggleIndicator(button) {
    const indicator = button.querySelector('.indicator');
    if (indicator) {
        indicator.classList.toggle('on');
    }
}

// Add indicators to buttons
document.querySelectorAll('.toggle-indicator-button').forEach(button => {
    const indicator = document.createElement('span');
    indicator.className = 'indicator';
    button.appendChild(indicator);

    button.addEventListener('click', () => toggleIndicator(button));
});
