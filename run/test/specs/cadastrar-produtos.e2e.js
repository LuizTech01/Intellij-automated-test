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
        
        const cadastrarProduto = await $("[data-testid='cadastrarProdutos']");
        await cadastrarProduto.click();
        
        const campoNomeProduto = await $('[name="nome"]');
        await digitarComAtraso(campoNomeProduto, 'Caneta', 100);

        const campoPrecoProduto = await $('#price');
        await digitarComAtraso(campoPrecoProduto, '1', 100);

        const campoDescricaoProduto = await $('#description');
        await digitarComAtraso(campoDescricaoProduto, 'Uma caneta azul comum', 100);
        
        const campoQuantidadeProduto = await $('#quantity');
        await digitarComAtraso(campoQuantidadeProduto, '5', 100);
        
        const campoImagemProduto = await $('#imagem');
        const caminhoImagem = 'C:/Users/luizf/OneDrive/Documents/Intellij-automated-test/run/test/images/caneta.jpg';
        await campoImagemProduto.setValue(caminhoImagem);

        const cadastroProduto = await $("[data-testid='cadastarProdutos']");
        await cadastroProduto.click();
        
        await pause(13000);

        const botaoHome = await $("[data-testid='home']");
        await botaoHome.click();

        await pause(2000);

        const botaoListarProdutos = await $("[data-testid='listarProdutos']");
        await botaoListarProdutos.click();
        
        await pause(3000);

        const tbodyProdutos = await $('tbody');
        await tbodyProdutos.waitForExist({ timeout: 5000 });

        const linhasTabela = await $$('tbody tr');
        
        let produtoEncontrado = false;

        for (let i = 0; i < linhasTabela.length; i++) {
            const nomeProduto = await linhasTabela[i].$$('td')[0].getText();
            console.log(`Linha ${i}: ${nomeProduto}`);

            if (nomeProduto === 'Caneta') {
                produtoEncontrado = true;
                break;
            }
        }

        expect(produtoEncontrado).toBe(true, 'Produto "Caneta" não encontrado na tabela');
    })
})
