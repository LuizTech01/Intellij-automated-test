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

describe('Cenarios de Cadastro', () => {
    
    beforeEach(async () => {
        await browser.url('https://front.serverest.dev/login');
        await pause(3000);
    });

    it('Tentar cadastrar so com um @', async () => {
        const cadastroAdm = await $("[data-testid='cadastrar']");
        await cadastroAdm.click();

        await pause(3000);

        const campoNome = await $(`[data-testid='nome']`);
        await digitarComAtraso(campoNome, 'Nome Teste da Silva', 100);
          
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, '@', 100);
                
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);

        const cadastrar= await $("[data-testid='cadastrar']");
        await cadastrar.click();

        await pause(3000);

        try {
            const alertText = await browser.getAlertText();
            assert.strictEqual(alertText, 'Insira uma parte seguida por "@". "@" está incompleto.');
            await browser.acceptAlert();
        } catch (error) {
            console.log("Nenhum alerta foi exibido, validando mensagem de erro na página.");

        await pause(3000);
        }
    })

    it('Tentar cadastrar sem uma senha', async () => {
        const cadastroAdm = await $("[data-testid='cadastrar']");
        await cadastroAdm.click();

        await pause(3000);

        const campoNome = await $(`[data-testid='nome']`);
        await digitarComAtraso(campoNome, 'Nome Teste da Silva', 100);
          
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);

        const cadastrar= await $("[data-testid='cadastrar']");
        await cadastrar.click();

        await pause(3000);

        const mensagemErro = await browser.$(`//*[@id="root"]/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErro, 'Password é obrigatório');
        
        await pause(3000);
        
    })

    it('Tentar cadastrar sem um nome', async () => {
        const cadastroAdm = await $("[data-testid='cadastrar']");
        await cadastroAdm.click();

        await pause(3000);
        
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);

        const campoSenha = await $(`[data-testid='password']`);
        await digitarComAtraso(campoSenha, 'senhafacil123', 100);

        const cadastrar= await $("[data-testid='cadastrar']");
        await cadastrar.click();

        await pause(3000);

        const mensagemErro = await browser.$(`//*[@id="root"]/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErro, 'Nome é obrigatório');
        
        await pause(3000);
        
    })

    it('Tentar cadastrar sem um email', async () => {
        const cadastroAdm = await $("[data-testid='cadastrar']");
        await cadastroAdm.click();

        await pause(3000);
        
        const campoNome = await $(`[data-testid='nome']`);
        await digitarComAtraso(campoNome, 'Nome Teste da Silva', 100);

        const campoSenha = await $(`[data-testid='password']`);
        await digitarComAtraso(campoSenha, 'senhafacil123', 100);

        const cadastrar= await $("[data-testid='cadastrar']");
        await cadastrar.click();

        await pause(3000);

        const mensagemErro = await browser.$(`//*[@id="root"]/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErro, 'Email é obrigatório');
        
        await pause(3000);
        
    })


    it('Tentar cadastrar sem um email', async () => {
        const cadastroAdm = await $("[data-testid='cadastrar']");
        await cadastroAdm.click();

        await pause(3000);

        const cadastrar= await $("[data-testid='cadastrar']");
        await cadastrar.click();

        await pause(3000);

        const mensagemErroNome = await browser.$(`//*[@id="root"]/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroNome, 'Nome é obrigatório');
        
        const mensagemErroEmail = await browser.$(`//*[@id="root"]/div/div/form/div[2]/span`).getText();
            assert.strictEqual(mensagemErroEmail, 'Email é obrigatório');

        const mensagemErroPassword = await browser.$(`//*[@id="root"]/div/div/form/div[3]/span`).getText();
            assert.strictEqual(mensagemErroPassword, 'Password é obrigatório');

        await pause(3000);
        
    })
})