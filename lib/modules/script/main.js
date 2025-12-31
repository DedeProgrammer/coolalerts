const cssFiles = ['../style/modal.css', '../style/main.css'];
const bodyElement = document.body;

cssFiles.forEach(file => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL(file, import.meta.url).href;
    document.head.appendChild(link);
});

export function setTheme(color) {
    bodyElement.style.setProperty('--mainColor', color);
}

export function setFont(font) {
    bodyElement.style.setProperty('--mainFont', font)
}