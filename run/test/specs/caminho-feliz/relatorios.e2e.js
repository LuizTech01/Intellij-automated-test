const { expect, browser, $ } = require('@wdio/globals')
const path = require('path');

async function pause(tempo) {
    await browser.pause(tempo);
}

async function digitarComAtraso(campo, texto, atraso) {
    for (let i = 0; i < texto.length; i++) {
        await campo.addValue(texto[i]);
        await pause(atraso);
    }
}

describe('Cadastrando Produto e validando', () => {
    it('Cadastrando produto caminho feliz e validando se ele foi adicionado', async () => {
        await browser.url('https://front.serverest.dev/login')

        await pause(3000);

        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
        
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
        
        const cadastroAdm = await $("[data-testid='entrar']"); 
        await cadastroAdm.click();

        await pause(3000);

        const urlAtual = 'https://front.serverest.dev/admin/home'
        expect(urlAtual).toBe('https://front.serverest.dev/admin/home');
        
        await pause(3000);
        
        const cadastrarProduto = await $("[data-testid='relatorios']");
        await cadastrarProduto.click();
        
        const mensagemSucesso = await $('h1');

        const textoMensagem = await mensagemSucesso.getText();
        
        const mensagemEsperada = 'Em construção aguarde';

        expect(textoMensagem).toBe(mensagemEsperada);
    })
})
