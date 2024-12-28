const { expect, browser, $ } = require('@wdio/globals')
const assert = require('assert');

async function pause(tempo) {
    await browser.pause(tempo);
}

async function digitarComAtraso(campo, texto, atraso) {
    for (let i = 0; i < texto.length; i++) {
        await campo.addValue(texto[i]);
        await pause(atraso);
    }
}

describe('Cenarios de Login', () => {
    
    beforeEach(async () => {
        await browser.url('https://front.serverest.dev/login');
        await pause(3000);
    });

    it('Logar com um usuario sem cadastro, deve da erro', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilva@gmail.com', 100);
        
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha1', 100);
        
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();

        await pause(3000);

        const mensagemErro = await browser.$(`//*[@id="root"]/div/div/form/div[1]/span`).getText();
        assert.strictEqual(mensagemErro, 'Email e/ou senha inválidos');

        await pause(3000);

        /* Criar uma task de melhoria pois a mensagem de erro nao esta de acordo com o cenario*/
    })

    it('Logar com um email ou senha invalido, deve da erro', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
        
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha', 100);
        
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();

        await pause(3000);

        const mensagemErro = await browser.$(`//*[@id="root"]/div/div/form/div[1]/span`).getText();
        assert.strictEqual(mensagemErro, 'Email e/ou senha inválidos');

        await pause(3000);
    })

    it('Logar sem informar dados', async () => {
        
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();

        await pause(3000);

        const mensagemEmailAusente = await browser.$(`//*[@id="root"]/div/div/form/div[1]/span`).getText();
        assert.strictEqual(mensagemEmailAusente, 'Email é obrigatório');

        await pause(3000);

        const mensagemSenhaAusente = await browser.$(`//*[@id="root"]/div/div/form/div[2]/span`).getText();
        assert.strictEqual(mensagemSenhaAusente, 'Password é obrigatório');
    })
})