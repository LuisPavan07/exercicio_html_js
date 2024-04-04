const form = document.getElementById('formulario-numerico');

form.addEventListener('submit',function(e) {
    e.preventDefault();   
    const valorCampoA = document.getElementById('a');
    const valorCampoB = document.getElementById('b');
    const campoA = parseFloat(valorCampoA.value);
    const campoB = parseFloat(valorCampoB.value);
    const mensagemCorreto = `Muito bem, o valor <b>${campoB}</b> é maior que <b>${campoA}</b> `;
    const mensagemIncorreto = `O valor de <b>B</b> deve ser maior que do <b>A</b>`;
    
    if (campoA >= campoB) {
        const containerFalso = document.querySelector('.mensagem-incorreto');
        containerFalso.innerHTML = mensagemIncorreto;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagem-correto').style.display = 'none';
    } else {     
        const containerVerdade = document.querySelector('.mensagem-correto');
        containerVerdade.innerHTML = mensagemCorreto;
        containerVerdade.style.display = 'block';
        document.querySelector('.mensagem-incorreto').style.display = 'none';
    }
});

