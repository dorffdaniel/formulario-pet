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


/* let cadastro = []; */



let link = window.location.pathname;


if (link == ' COLOCAR O LINK CORRETO  ') {
    if (localStorage.getItem('chave') != null) {

        let dados = pegarCliente()
        let txt = getSelect(dados, 1)

        console.log(dados)

        //onde vou alimentar o nome do cliente por q a flag é 1 e pega o nome 
        $('#recebCliente').html(txt).select2();

    }
}





btnEnvioDoc.on('click', () => {

    let temporarioEspec = [];
    let temporCadastro = [];
    let temporGenero = [];
    let tempValidacao = [];

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


    if ($('#check').is(':checked')) {
        tempValidacao.push($('#check').val())
    }


    let cor = $('#cor').val().trim();
    let nomePet = $('#nomePet').val().trim();
    let nomeTutor = $('#nomeTutor').val().trim();
    let email = $('#email').val().trim();
    let cep = $('#cep').val().trim();
    let nume = $('#num').val().trim();

    if (cor !== '' && nomePet !== '' && nomeTutor !== '' && email !== '' && cep !== '' && nume !== '' && tempValidacao.length > 0) {

        cadastroPet.push(new Pet(temporarioEspec, temporCadastro, temporGenero, tempValidacao, cor, nomePet, nomeTutor, email, cep, nume))


        mostrarModal();
        $('#resultCad').html(getDados(cadastroPet, 1))
    } else {
        alerta(`preencha os campos`, "Erro", "error");
    }

})

 $('#resultCad').html(getDados(cadastroPet, 1))

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






















function getDados(arr, flag) {
    let msg = `<option value= '-1'> campo vazio </option>`

    arr.forEach((element, index) => {
        if (flag == 1) {
            msg += `<option value= '${index}'> ${element.nome}</option>`
        }
    })

    return msg;
}



function alerta(msg, titulo, icon) {
    Swal.fire({
        position: "center",
        icon: icon,
        title: titulo,
        text: msg,
        showConfirmButton: true,    // é aqui o botao
        confirmButtonText: 'OK',
        timer: 1500,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
        },
        hideClass: {
            popup: `
              animate__animated
              animate__fadeOutUp
              animate__faster
            `
        }
    });
}