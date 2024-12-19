const { expect, browser, $ } = require('@wdio/globals');

async function pause(tempo) {
    await browser.pause(tempo);
}

async function digitarComAtraso(campo, texto, atraso) {
    for (let i = 0; i < texto.length; i++) {
        await campo.addValue(texto[i]);
        await pause(atraso);
    }
}

describe('Listar e excluir usuarios', () => {
    it('Acessar lista de usuarios ', async () => {
        await browser.url('https://front.serverest.dev/login');

        await pause(3000);

        const campoEmail = await $('[name="email"]');
        await digitarComAtraso(campoEmail, 'testedasilv@gmail.com', 100);
        
        const campoSenha = await $('#password');
        await digitarComAtraso(campoSenha, 'dasilvasenha123', 100);
        
        const cadastroAdm = await $("[data-testid='entrar']");
        await cadastroAdm.click();

        await pause(3000);

        const acessaLista = await $("[data-testid='listarUsuarios']");
        await acessaLista.click();

        await pause(3000);

        const botaoExcluir = await $('table tbody tr:nth-child(1) td:nth-child(5) button:nth-child(2)');
        await botaoExcluir.click();
        await pause(13000);
    });
});
