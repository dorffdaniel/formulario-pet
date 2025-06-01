class Pet {
    constructor(tipo, cadast, genero, valid, cor, nome, nomeTutor, email, cep, num) {
        this._tipo = tipo;
        this._cadast = cadast;
        this._genero = genero;
        this._valid = valid;
        this._cor = cor;
        this._nome = nome;
        this._nomeTutor = nomeTutor;
        this._email = email;
        this._cep = cep;
        this._num = num;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    get cadast() {
        return this._cadast;
    }

    set cadast(cadast) {
        this._cadast = cadast;
    }

    get genero() {
        return this._genero;
    }

    set genero(genero) {
        this._genero = genero;
    }


    get valid() {
        return this._valid;
    }

    set valid(valid) {
        this._valid = valid;
    }

    get cor() {
        return this._cor;
    }

    set cor(cor) {
        this._cor = cor;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get nomeTutor() {
        return this._nomeTutor;
    }

    set nomeTutor(nomeTutor) {
        this._nomeTutor = nomeTutor;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get cep() {
        return this._cep;
    }

    set cep(cep) {
        this._cep = cep;
    }

    get num() {
        return this._num;
    }

    set num(num) {
        this._num = num;
    }

}