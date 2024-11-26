const btnTroca = document.querySelector('.btnTroca');
const formulario=document.querySelector('.formulario');
const CorBranca = document.querySelectorAll('h1, h2, label');
const main = document.querySelector('.main');
const btnEnvioDoc = document.querySelector('.btn');
const efetitoTrocaBtn= document.querySelector('.efeitoTroca');


let textoOriginal = btnTroca.textContent;

btnTroca.addEventListener('click', ()=>{
    formulario.classList.toggle('dark')
    main.classList.toggle('darkStrong');
    

    CorBranca.forEach((percorrer)=>{
        percorrer.classList.toggle('corBranca')
    })

    if(btnTroca.textContent === textoOriginal){
        btnTroca.textContent ='Versao Light';
        btnTroca.classList.add('backgroundBotao');
        
    }else{
        btnTroca.textContent = textoOriginal;
        btnTroca.classList.remove('backgroundBotao');
    }
})

btnEnvioDoc.addEventListener('click', ()=>{
    efetitoTrocaBtn.innerHTML = '';
    efetitoTrocaBtn.classList.add('circulo');

    setTimeout(() => {
        efetitoTrocaBtn.classList.remove('circulo');
        //btnEnvioDoc.style.background='none'
        btnEnvioDoc.classList.add('enviado');
        efetitoTrocaBtn.classList.add('enviado');
    }, 3000);
})