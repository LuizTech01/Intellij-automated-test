const { expect, browser, $ } = require('@wdio/globals')

async function pause(tempo) {
    await browser.pause(tempo);
}

async function digitarComAtraso(campo, texto, atraso) {
    for (let i = 0; i < texto.length; i++) {
        await campo.addValue(texto[i]);
        await pause(atraso);
    }
}

describe('Cadastrando usuario', () => {
    it('Cadastrando usuario caminho feliz', async () => {
        await browser.url(`https://front.serverest.dev/login`)

        await pause(3000);

        const botao = await $(`[data-testid='cadastrar']`);
        await botao.click();

        await pause(3000);

        const campoNome = await $(`[data-testid='nome']`);
        await digitarComAtraso(campoNome, 'Nome Teste da Silv222', 100);
  
        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasil222@gmail.com', 100);
        
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123222', 100);
        
        const cadastroAdm = await $(`[data-testid='checkbox']`);
        await cadastroAdm.click();

        await pause(3000);

        const finaliCadastro = await $(`[data-testid='cadastrar']`);
        await finaliCadastro.click();

    })
})

