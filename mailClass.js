class Email {

    #dataTemplate = {};

    constructor() {
        if (Email._instance) {
            return Email._instance;
        }
        Email._instance = this;
    }

    setEmailData(arr) {
        const labels = ['source', 'target', 'message']
        labels.forEach((e, i) => {
            console.log(arr[i].value);
            this.#dataTemplate[`${e}`] = arr[i].value;
        });
    }

    getDataTemplate() {
        return this.#dataTemplate;
    }

    init() {
        emailjs.init("user_vAsPQFbJVu7Y0Cf095hoP");
    }

    send() {
        emailjs.send('service_k9ra5lt', 'template_ohqs90r', this.#dataTemplate)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }
}