import { decodeEntities, encodeEntities, escapeHtml } from './escape-input.js';

let modalSelectors;

let modalInitState = false;
let modalResolvePromise;

function initModal() {
    const modalHTML = `    
    <dialog id="modal-integration" class="coolalerts-default-font">
        <h2 id="modal-title"></h2>
        <pre><code id="modal-content"></code></pre>
        <button id="modal-btn"></button>
    </dialog>`;
    
    bodyElement.innerHTML = modalHTML;

    modalSelectors = {
        modal: document.getElementById('modal-integration'),
        modalTitle: document.getElementById('modal-title'),
        modalContent: document.getElementById('modal-content'),
        modalBtn: document.getElementById('modal-btn')
    }
};

const MODAL_ELEMENT_NAMES = [
    ['title', 'header'],
    ['content', 'text', 'main'],
    ['btn', 'button', 'footer']
];

export function modalUpdate(title, content, btn) {
    modalSelectors.modalTitle.innerHTML = escapeHtml(title);
    modalSelectors.modalContent.innerHTML = encodeEntities(content);
    modalSelectors.modalBtn.innerHTML = escapeHtml(btn);
}

export function modalCallback() {
    return new Promise((resolve) => {
        modalResolvePromise = resolve;
    });
}

export function toggleModal(title, content, btn) {
    if (modalInitState === false) {
        initModal();
        modalInitState = true;
    }

    if(modalSelectors.modal.close) {
        modalSelectors.modal.showModal();
        modalUpdate(title, content, btn);
        
        modalSelectors.modalBtn.onclick = () => {
            modalSelectors.modal.close();
            modalResolvePromise('true');
            modalResolvePromise = null;
        }
    } else {
        modalSelectors.modal.close();
    }
}

export function modalGet(type) {
    if (MODAL_ELEMENT_NAMES[0].includes(type)) {
        return modalSelectors.modalTitle.innerText;
    } 
    if (MODAL_ELEMENT_NAMES[1].includes(type)) {
        return decodeEntities(modalSelectors.modalContent.innerText);
    }
    if (MODAL_ELEMENT_NAMES[2].includes(type)) {
        return modalSelectors.modalBtn.innerText;
    }

    return undefined;
}