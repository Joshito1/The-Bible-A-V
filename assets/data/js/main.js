import { views } from './views.js';
import './yt.js'
import { initializeDevEnvironment } from '../../../assets/dev/dev.js';
initializeDevEnvironment();

const app = document.getElementById('app');
let translations = {};

// Load and apply the view
async function loadView(route) {
    const [_, lang = 'en', page = 'home'] = route.split('/'); // e.g., #/en/home
    const langViews = views[page] || {};
    const content = langViews[lang] || langViews['en'] || '<h1>404</h1>'; // Fallback to 'en' or 404

    app.innerHTML = content;

    try {
        await loadTranslations(lang);
        applyTranslations();
    } catch (err) {
        console.error('Error loading translations:', err);
        app.innerHTML = '<h1>404</h1>'; // Fallback to 404 if translations fail
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Update language switcher dropdown
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        langSwitcher.value = lang;
    }
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
        const value = getNestedTranslation(key, translations);
        if (value) {
            el.textContent = value;
        }
    });
}

// Helper function to retrieve nested keys
function getNestedTranslation(key, obj) {
    return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
}

// Language dropdown switcher
document.getElementById('lang-switcher')?.addEventListener('change', async (e) => {
    const lang = e.target.value;
    const [_, , page = 'home'] = location.hash.split('/'); // Extract the current page from the URL hash

    // Update the URL hash to reflect the new language
    history.pushState(null, '', `#/${lang}/${page}`);

    // Load translations and apply them to the current page
    await loadTranslations(lang);
    applyTranslations();
    updateTranslationsFromDOM();
});

// Update translations from DOM based on the language dropdown or default to 'en'
async function updateTranslationsFromDOM() {
    try {
        // Detect the current language from the dropdown or default to 'en'
        const langSwitcher = document.getElementById('lang-switcher');
        const lang = langSwitcher?.value || 'en'; // Use the dropdown value or fallback to 'en'

        // Fetch the existing translations for the detected language
        const res = await fetch(`lang/${lang}.json`);
        const translations = await res.json();

        // Find all elements with data-i18n attributes
        const elements = document.querySelectorAll('[data-i18n]');
        const missingKeys = {};

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!translations[key]) {
                missingKeys[key] = ""; // Add a placeholder for missing keys
            }
        });

        // Log the missing keys as JSON
        // console.log(`Missing keys for ${lang}:`, JSON.stringify(missingKeys, null, 2));
    } catch (err) {
        console.error(`Error fetching translations:`, err);
    }
}

// Example usage: Automatically detect and update translations

const langSearch = document.getElementById('lang-search');
const langOptions = document.getElementById('lang-options');
const langItems = langOptions.querySelectorAll('li');
// Run on initial load
window.addEventListener('DOMContentLoaded', () => {
    // Get the saved language from local storage or default to 'en'
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    const [_, , page = 'home'] = location.hash.split('/');

    // Update the URL hash to reflect the saved language
    history.replaceState(null, '', `#/${savedLang}/${page}`);

    // Load the view and translations for the saved language
    loadView(location.hash);
    updateTranslationsFromDOM();

    // Highlight the saved language in the list
    const selectedItem = Array.from(langItems).find(item => item.getAttribute('data-value') === savedLang);
    if (selectedItem) {
        langItems.forEach(item => item.classList.remove('selected'));
        selectedItem.classList.add('selected');
    }
});

// Run on hash change
window.addEventListener('hashchange', () => {
    loadView(location.hash);
});

// Searchable language dropdown functionality
document.addEventListener('DOMContentLoaded', () => {

    // Filter language options based on search input
    langSearch.addEventListener('input', () => {
        const query = langSearch.value.toLowerCase();
        langItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? '' : 'none';
        });
    });

    // Handle language selection
    langOptions.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const selectedLang = e.target.getAttribute('data-value');
            const [_, , page = 'home'] = location.hash.split('/');

            // Save the selected language to local storage
            localStorage.setItem('selectedLanguage', selectedLang);

            // Update the URL hash to reflect the new language
            history.pushState(null, '', `#/${selectedLang}/${page}`);

            // Load translations and apply them to the current page
            loadTranslations(selectedLang).then(() => {
                applyTranslations();
                updateTranslationsFromDOM();
            });

            // Highlight the selected language
            langItems.forEach(item => item.classList.remove('selected'));
            e.target.classList.add('selected');

            // Close the modal (if applicable)
            document.querySelector('.lang-modal').close();
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        const [_, lang = 'en'] = location.hash.split('/');
        const selectedItem = Array.from(langItems).find(item => item.getAttribute('data-value') === lang);
        if (selectedItem) {
            langItems.forEach(item => item.classList.remove('selected'));
            selectedItem.classList.add('selected');
        }
    });
});

// Use event delegation for data-route navigation
document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-route]'); // Check if the clicked element or its parent has data-route
    if (link) {
        event.preventDefault(); // Prevent default anchor behavior

        const route = link.getAttribute('data-route'); // Get the route value
        const lang = localStorage.getItem('selectedLanguage') || 'en'; // Get the current language

        // Update the URL hash
        history.pushState(null, '', `#/${lang}/${route}`);

        // Load the corresponding view
        loadView(location.hash);
    }
});
