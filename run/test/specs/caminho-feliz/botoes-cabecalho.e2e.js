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

describe('Login ADM', () => {
    it('Logando usuario ADM', async () => {
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
        await pause(5000);

        const cadastrarUsuario = await $("[data-testid='cadastrar-usuarios']");
        await cadastrarUsuario.click();
        await pause(5000);

        const listarUsuarios = await $("[data-testid='listar-usuarios']");
        await listarUsuarios.click();
        await pause(5000);

        const cadastrarProduto = await $("[data-testid='cadastrar-produtos']");
        await cadastrarProduto.click();
        await pause(5000);

        const listarProdutos = await $("[data-testid='listar-produtos']");
        await listarProdutos.click();
        await pause(5000);

        const linkRelatorios = await $("[data-testid='link-relatorios']");
        await linkRelatorios.click();
    })
})
