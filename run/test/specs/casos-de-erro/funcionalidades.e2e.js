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

describe('Cadastrar novos usuarios', () => {
    
    beforeEach(async () => {
        await browser.url('https://front.serverest.dev/login');
        await pause(3000);
    });

    it('Cadastrando novo usuario sem nome', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='cadastrarUsuarios']");
        await cadastroNovoUsuario.click();
    
        await pause(3000);
              
        const campoCadastraEmail = await $('[name="email"]');
        await digitarComAtraso(campoCadastraEmail, 'testedasilv2@gmail.com', 100);
                    
        const campoCadastraSenha = await $('#password');
        await digitarComAtraso(campoCadastraSenha, 'dasilvasenha1232', 100);
           
        await pause(3000);
            
        const finaliCadastro = await $(`[data-testid='cadastrarUsuario']`);
        await finaliCadastro.click();
    
        const mensagemErroNome = await browser.$(`//*[@id="root"]/div/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroNome, 'Nome é obrigatório');     
    })

    it('Cadastrando novo usuario sem email', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='cadastrarUsuarios']");
        await cadastroNovoUsuario.click();
    
        await pause(3000);
              
        const campoCadastraEmail = await $('[name="nome"]');
        await digitarComAtraso(campoCadastraEmail, 'Nome Teste da Silva', 100);
                    
        const campoCadastraSenha = await $('#password');
        await digitarComAtraso(campoCadastraSenha, 'dasilvasenha1232', 100);
           
        await pause(3000);
            
        const finaliCadastro = await $(`[data-testid='cadastrarUsuario']`);
        await finaliCadastro.click();
    
        const mensagemErroNome = await browser.$(`//*[@id="root"]/div/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroNome, 'Email é obrigatório');     
    })

    it('Cadastrando novo usuario sem senha', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='cadastrarUsuarios']");
        await cadastroNovoUsuario.click();
    
        await pause(3000);
              
        const campoCadastraEmail = await $('[name="nome"]');
        await digitarComAtraso(campoCadastraEmail, 'Nome Teste da Silva', 100);
                    
        const campoCadastraSenha = await $('#email');
        await digitarComAtraso(campoCadastraSenha, 'testedasilv@gmail.com', 100);
           
        await pause(3000);
            
        const finaliCadastro = await $(`[data-testid='cadastrarUsuario']`);
        await finaliCadastro.click();
    
        const mensagemErroNome = await browser.$(`//*[@id="root"]/div/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroNome, 'Password é obrigatório');     
    })

    it('Cadastrando novo usuario sem senha, nome e email', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='cadastrarUsuarios']");
        await cadastroNovoUsuario.click();
    
        await pause(3000);
            
        const finaliCadastro = await $(`[data-testid='cadastrarUsuario']`);
        await finaliCadastro.click();
    
        const mensagemErroNome = await browser.$(`//*[@id="root"]/div/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroNome, 'Nome é obrigatório');
            
        const mensagemErroEmail = await browser.$(`//*[@id="root"]/div/div/div/form/div[2]/span`).getText();
            assert.strictEqual(mensagemErroEmail, 'Email é obrigatório');

        const mensagemErroSenha = await browser.$(`//*[@id="root"]/div/div/div/form/div[3]/span`).getText();
            assert.strictEqual(mensagemErroSenha, 'Password é obrigatório');
    })

    it('Escluindo multiplas pessoas da lista', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='listarUsuarios']");
        await cadastroNovoUsuario.click();
    
        await pause(3000); 
    })

})