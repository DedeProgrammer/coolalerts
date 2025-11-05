let elementModal = document.querySelector('.modalIntegration');
let elementTitle = document.getElementById('modalTitle');
let elementDialog = document.getElementById('dialogContent');
let elementBtn = document.getElementById('closeBtn');

let elementBody = document.body;

document.onkeyup = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == 27) {
        closeModal();
    }
}

function closeModal() {
    elementModal.classList.add('closed')
    elementBody.style.overflow = 'auto';
}

function openModal(title, dialog, btn) {
    if (title && dialog && btn) {
        elementModal.classList.remove('closed')
        elementTitle.innerHTML = title;
        elementDialog.innerHTML = dialog;
        elementBtn.innerHTML = btn;
        elementBody.style.overflow = 'hidden';
    }
}