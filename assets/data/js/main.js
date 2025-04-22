import { views } from './views.js';
import { initializeDevEnvironment } from '../../../assets/dev/dev.js';

// Initialize the development environment
initializeDevEnvironment();

const app = document.getElementById('app');
let translations = {};

// Load and apply the view
function loadView(route) {
    const [_, lang = 'en', page = 'home'] = route.split('/'); // e.g., #/en/home
    const langViews = views[page] || {};
    const content = langViews[lang] || '<h1>404</h1>';

    app.innerHTML = content;
}

// Load language file
async function loadTranslations(lang) {
    try {
        const res = await fetch(`lang/${lang}.json`);
        translations = await res.json();
    }
    catch (err) {
        console.warn(`No translation found for ${lang}`);
        translations = {};
    }
}

// Replace elements marked with data-i18n
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            el.textContent = translations[key];
        }
    });
}

// Language dropdown switcher
document.getElementById('lang-switcher')?.addEventListener('change', e => {
    const lang = e.target.value;
    const [_, , page] = location.hash.split('/');
    window.location.hash = `#/${lang}/${page || 'home'}`;
});

// Run on initial load
window.addEventListener('DOMContentLoaded', () => {
    loadView(location.hash || '#/en/home');
});

// Run on hash change
window.addEventListener('hashchange', () => {
    loadView(location.hash);
});

