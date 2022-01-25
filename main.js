document.addEventListener('DOMContentLoaded', () => {
    document.forms['u-form'].onsubmit = function (event) {
        event.preventDefault();
        const formObject = new formClassExample(this);

        formObject.clearSpans();

        if (formObject.handleEmptyFields()) {
            const email = Email.getInstance();
            email.setEmailData(formObject.getFormInputs());
            email.send();
        }
    }
});
