export function initializeDevEnvironment() {
    // Create the <p> element
    const devParagraph = document.createElement('p');
    devParagraph.className = 'dev';
    devParagraph.style.color = 'rgba(255, 0, 0, 0.5)';
    devParagraph.style.textAlign = 'center';
    devParagraph.style.fontSize = '30px';
    devParagraph.style.webkitUserSelect = 'none';
    devParagraph.style.userSelect = 'none';
    devParagraph.style.cursor = 'default';
    devParagraph.textContent = 'IN DEVELOPMENT';

    // Append the <p> element to the body
    document.body.appendChild(devParagraph);

    // Link the CSS file dynamically
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'assets/dev/dev.css';
    document.head.appendChild(cssLink);
}