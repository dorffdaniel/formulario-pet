let cadastroPet = [];

const btnTroca = document.querySelector('.btnTroca');
const formulario = document.querySelector('.formulario');
const CorBranca = document.querySelectorAll('h1, h2, label');
const main = document.querySelector('.main');
const btnEnvioDoc = $('#btnEnviar');
const efetitoTrocaBtn = document.querySelector('.efeitoTroca');


let textoOriginal = btnTroca.textContent;

btnTroca.addEventListener('click', () => {
    formulario.classList.toggle('dark')
    main.classList.toggle('darkStrong');


    CorBranca.forEach((percorrer) => {
        percorrer.classList.toggle('corBranca')
    })

    if (btnTroca.textContent === textoOriginal) {
        btnTroca.textContent = 'Versao Light';
        btnTroca.classList.add('backgroundBotao');

    } else {
        btnTroca.textContent = textoOriginal;
        btnTroca.classList.remove('backgroundBotao');
    }
})


let cadastro = [];


btnEnvioDoc.on('click', () => {

    let temporarioEspec = [];
    let temporCadastro = [];
    let temporGenero = [];

    for (let i = 1; i <= 5; i++) {
        if ($('#especie' + i).is(':checked')) {
            temporarioEspec.push($('#especie' + i).val())
        }
    }

    for (let i = 0; i <= 2; i++) {
        if ($('#cad' + i).is(':checked')) {
            temporCadastro.push($('#cad' + i).val())
        }
    }

    for (let i = 0; i <= 2; i++) {
        if ($('#genero' + i).is(':checked')) {
            temporGenero.push($('#genero' + i).val())
        }
    }


    cadastroPet.push(new Pet(
        temporarioEspec,
        temporCadastro,
        temporGenero,
        $('#cor').val(),
        $('#nomePet').val(),
        $('#nomeTutor').val(),
        $('#email').val(),
        $('#cep').val(),
        $('#num').val()
    ))




    mostrarModal()


})


function mostrarModal() {
    $('#modalPet').modal('show');
    
    let msg = '';

    cadastroPet.forEach(element => {
        msg += `<ul>`
        msg += `<li> tipo: ${element.tipo}</li>`
        msg += `<li> cadastrado: ${element.cadast}</li>`
        msg += `<li> genero: ${element.genero}</li>`
        msg += `<li> cor: ${element.cor}</li>`
        msg += `<li> pet: ${element.nome}</li>`
        msg += `<li> tutor: ${element.nomeTutor}</li>`
        msg += `<li> email: ${element.email}</li>`
        msg += `<li> cep: ${element.cep}</li>`
        msg += `<li> numero: ${element.num}</li>`
        msg += `</ul>`

    })


    $('#modalRes').html(msg);
}






