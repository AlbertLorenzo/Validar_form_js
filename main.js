document.addEventListener('DOMContentLoaded', () => {
    document.forms['u-form'].onsubmit = function (event) {
        event.preventDefault();
        const formObject = new formClassExample(this);

        formObject.clearSpans();

        if (formObject.handleEmptyFields()) {
            const email = new Email();
            email.init();
            email.setEmailData(formObject.getFormInputs());
            email.send();
        }
    }
});