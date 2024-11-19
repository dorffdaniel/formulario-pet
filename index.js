const btnTroca = document.querySelector('.btnTroca');
const formulario=document.querySelector('.formulario');
const CorBranca = document.querySelectorAll('h1, h2, label');
const main = document.querySelector('.main');


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