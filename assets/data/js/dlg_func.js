// Dialog Functionality

function setupDialog({ dialogSelector, showBtnSelector, closeBtnSelector, onShow, onClose }) {
    const dialog = document.querySelector(dialogSelector);
    const showBtn = document.querySelector(showBtnSelector);
    const closeBtn = dialog.querySelector(closeBtnSelector);

    if (showBtn) {
        showBtn.addEventListener("click", () => {
            dialog.showModal();
            if (onShow) onShow(dialog);
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            dialog.close();
            if (onClose) onClose(dialog);
        });
    }
}

// Reusable Dialog Setup
const dialogs = [
    {
        dialogSelector: ".lang-modal",
        showBtnSelector: ".lang",
        closeBtnSelector: ".close"
    },
    {
        dialogSelector: ".feedback-dialog",
        showBtnSelector: ".feedback",
        closeBtnSelector: ".close"
    },
    {
        dialogSelector: ".changelog-dialog",
        showBtnSelector: ".changelog",
        closeBtnSelector: ".close"
    },
    {
        dialogSelector: ".notification-dialog",
        showBtnSelector: ".notification",
        closeBtnSelector: ".close",
        onClose: () => {
            const badge = document.querySelector(".notification-badge");
            badge.style.display = "flex"; // Show the badge when the dialog is closed
        }
    }
];

dialogs.forEach(dialogConfig => setupDialog(dialogConfig));

// Show notification dialog every time
function showNotification() {
    const notificationDialog = document.querySelector(".notification-dialog");

    if (notificationDialog) {
        notificationDialog.showModal();
    }
}

// Call the function to show the notification dialog every time
showNotification();

// Feedback Email Functionality with Anti-Spam and Input Validation
let isSending = false;

function displayMessage(message, type = "info") {
    alert(`${type.toUpperCase()}: ${message}`);
}

function sendMail() {
    if (isSending) {
        displayMessage("Please wait, your email is already being sent.", "warning");
        return;
    }

    const name = document.querySelector("#name").value.trim();
    const subject = document.querySelector("#feedback-type").value.trim();
    const message = document.querySelector("#feedback-input").value.trim();

    if (!name || !subject || !message) {
        displayMessage("Please fill in all fields before sending.", "error");
        return;
    }

    isSending = true;

    const parms = { name, subject, message };

    emailjs.send("service_niwalom", "template_r4pm6x8", parms)
        .then(() => {
            displayMessage("Email Sent", "success");
        })
        .catch(() => {
            displayMessage("Failed to send email. Please try again.", "error");
        })
        .finally(() => {
            isSending = false;
        });
}
