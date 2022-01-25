class formClassExample {

    // Atributos
    #formInputs = [];

    // Constructor
    constructor(form) {
        this.#formInputs.push(form['i-from-name']);
        this.#formInputs.push(form['i-to-name']);
        this.#formInputs.push(form['i-message']);
    }

    getFormInputs() {
        return this.#formInputs;
    }

    #isEmpty(input) {
        if (!input.value) {
            return `El campo ${input.name} está vacío.`;
        }
    }

    clearSpans() {
        this.#formInputs.forEach(e => {
            document.getElementById(`sp-${e.name}`).innerText = '';
        });
    }

    handleEmptyFields() {
        let canSend = true;
        this.#formInputs.forEach(e => {
            if (this.#isEmpty(e)) {
                canSend = false;
                document.getElementById(`sp-${e.name}`).innerText = 'Debes rellenar este campo.';
            }
        });
        return canSend;
    }
}

