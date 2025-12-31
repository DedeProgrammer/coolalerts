export function encodeEntities(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");    
}

export function decodeEntities(text) {
    return text
        .replace(/&amp;/g, `&`)
        .replace(/&lt;/g, `<`)
        .replace(/&gt;/g, `>`)
        .replace(/&quot;/g, `"`)
        .replace(/&#039;/g, `'`);    
}

export function escapeHtml(text) {
    return text
        .replace(/&/g, '')
        .replace(/</g, '')
        .replace(/>/g, '')
        .replace(/"/g, '')
        .replace(/'/g, '');
}