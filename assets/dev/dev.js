export function initializeDevEnvironment(config = {
    showBanner: true,
    showDebugButton: true,
    debugModules: ['debugMenuUI', 'debugStorageTools', 'debugclockManager', 'debugInfoHandlers', 'debugMenuActions', 'debugInfoUpdater', 'debugIndicators']
}) {
    // Create the "IN DEVELOPMENT" banner if enabled
    if (config.showBanner) {
        const devParagraph = document.createElement('p');
        devParagraph.className = 'dev-banner';
        Object.assign(devParagraph.style, {
            color: 'rgba(255, 0, 0, 0.5)',
            textAlign: 'center',
            fontSize: '30px',
            webkitUserSelect: 'none',
            userSelect: 'none',
            pointerEvents: 'none',
            cursor: 'default',
        });
        devParagraph.textContent = 'IN DEVELOPMENT';
        document.body.appendChild(devParagraph);
    }

    // Dynamically link the dev CSS file
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'assets/dev/dev.css';
    document.head.appendChild(cssLink);

    // Create the debug button dynamically if enabled
    if (config.showDebugButton) {
        const debugButton = document.createElement('button');
        debugButton.id = 'debugButton';
        debugButton.textContent = 'DEBUG';
        debugButton.addEventListener('click', toggleDebugMenu);
        document.body.appendChild(debugButton);
    }

    // Dynamically load debug modules
    if (config.debugModules.length > 0) {
        config.debugModules.forEach(module => {
            const script = document.createElement('script');
            script.src = `assets/dev/${module}.js`;
            script.type = 'text/javascript';
            document.body.appendChild(script);
        });
    }

    console.log('Development environment initialized with config:', config);
}

// Toggle the debug menu visibility
function toggleDebugMenu() {
    const debugMenu = document.getElementById('debugMenu');
    const information = document.getElementById('information');

    if (debugMenu) {
        const isHidden = debugMenu.style.display === 'none' || debugMenu.style.display === '';
        debugMenu.style.display = isHidden ? 'block' : 'none';
        if (information) {
            information.style.display = isHidden ? 'block' : 'none';
        }
    } else {
        console.warn('Debug menu not found.');
    }
}