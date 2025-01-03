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
    });
});

describe('Cadastro de produtos', () => {

    beforeEach(async () => {
        await browser.url('https://front.serverest.dev/login');
        await pause(3000);
    });

    it('Adicionando produto sem quantidade', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='cadastrarProdutos']");
        await cadastroNovoUsuario.click();
    
        await pause(3000); 

        const campoCadastroNome = await $("[data-testid='nome']");
        await digitarComAtraso(campoCadastroNome, 'Caneta', 100);
        
        const campoPrecoProduto = await $('#price');
        await digitarComAtraso(campoPrecoProduto, '1', 100);

        const campoDescricaoProduto = await $('#description');
        await digitarComAtraso(campoDescricaoProduto, 'Uma caneta azul comum', 100);

        const cadastroProduto = await $("[data-testid='cadastarProdutos']");
        await cadastroProduto.click();

        const mensagemErroQuantidade = await browser.$(`//*[@id="root"]/div/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroQuantidade, 'Quantidade é obrigatório');
    });

    it('Adicionando produto sem descricao', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='cadastrarProdutos']");
        await cadastroNovoUsuario.click();
    
        await pause(3000); 

        const campoCadastroNome = await $("[data-testid='nome']");
        await digitarComAtraso(campoCadastroNome, 'Caneta', 100);
        
        const campoPrecoProduto = await $('#price');
        await digitarComAtraso(campoPrecoProduto, '1', 100);

        const campoDescricaoProduto = await $('[data-testid="quantity"]');
        await digitarComAtraso(campoDescricaoProduto, '5', 100);

        const cadastroProduto = await $("[data-testid='cadastarProdutos']");
        await cadastroProduto.click();

        const mensagemErroQuantidade = await browser.$(`//*[@id="root"]/div/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroQuantidade, 'Descricao é obrigatório');
    });

    it('Adicionando produto sem preco', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='cadastrarProdutos']");
        await cadastroNovoUsuario.click();
    
        await pause(3000); 

        const campoCadastroNome = await $("[data-testid='nome']");
        await digitarComAtraso(campoCadastroNome, 'Caneta', 100);
        
        const campoPrecoProduto = await $('#description');
        await digitarComAtraso(campoPrecoProduto, 'Caneta azul comum', 100);

        const campoDescricaoProduto = await $('[data-testid="quantity"]');
        await digitarComAtraso(campoDescricaoProduto, '5', 100);

        const cadastroProduto = await $("[data-testid='cadastarProdutos']");
        await cadastroProduto.click();

        const mensagemErroQuantidade = await browser.$(`//*[@id="root"]/div/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroQuantidade, 'Preco é obrigatório');
    });

    it('Adicionando produto sem nome', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='cadastrarProdutos']");
        await cadastroNovoUsuario.click();
    
        await pause(3000); 

        const campoCadastroNome = await $("[data-testid='preco']");
        await digitarComAtraso(campoCadastroNome, '2', 100);
        
        const campoPrecoProduto = await $('#description');
        await digitarComAtraso(campoPrecoProduto, 'Caneta azul comum', 100);

        const campoDescricaoProduto = await $('[data-testid="quantity"]');
        await digitarComAtraso(campoDescricaoProduto, '5', 100);

        const cadastroProduto = await $("[data-testid='cadastarProdutos']");
        await cadastroProduto.click();

        const mensagemErroQuantidade = await browser.$(`//*[@id="root"]/div/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroQuantidade, 'Nome é obrigatório');
    });

    it('Adicionando produto sem preencher nada', async () => {
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
            
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
            
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();
    
        await pause(3000);
    
        const urlHome = 'https://front.serverest.dev/admin/home'
        expect(urlHome).toBe('https://front.serverest.dev/admin/home');
    
        const cadastroNovoUsuario = await $("[data-testid='cadastrarProdutos']");
        await cadastroNovoUsuario.click();
    
        await pause(3000); 

        const cadastroProduto = await $("[data-testid='cadastarProdutos']");
        await cadastroProduto.click();

        const mensagemErroNome = await browser.$(`//*[@id="root"]/div/div/div/form/div[1]/span`).getText();
            assert.strictEqual(mensagemErroNome, 'Nome é obrigatório');
        
        const mensagemErroPreco = await browser.$(`//*[@id="root"]/div/div/div/form/div[2]/span`).getText();
            assert.strictEqual(mensagemErroPreco, 'Preco é obrigatório');

        const mensagemErroDescricao = await browser.$(`//*[@id="root"]/div/div/div/form/div[3]/span`).getText();
            assert.strictEqual(mensagemErroDescricao, 'Descricao é obrigatório');

        const mensagemErroQuantidade = await browser.$(`//*[@id="root"]/div/div/div/form/div[4]/span`).getText();
            assert.strictEqual(mensagemErroQuantidade, 'Quantidade é obrigatório');
    });
});