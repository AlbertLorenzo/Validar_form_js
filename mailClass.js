class Email {

    #dataTemplate = {};

    constructor(Email) {
        this._instance = null;
        this.#init();
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new Email(this);
        }
        return this._instance;
    }

    #init() {
        emailjs.init("user_vAsPQFbJVu7Y0Cf095hoP");
    }

    setEmailData(arr) {
        const labels = ['source', 'target', 'message']
        labels.forEach((e, i) => {
            this.#dataTemplate[`${e}`] = arr[i].value;
        });
    }

    getDataTemplate() {
        return this.#dataTemplate;
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
