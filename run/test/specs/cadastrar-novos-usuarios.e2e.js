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

describe('Logando usuario', () => {
    it('Logando usuario caminho feliz', async () => {
        await browser.url('https://front.serverest.dev/login')

        await pause(3000);

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

        const campoCadastraNome = await $(`[data-testid='nome']`);
        await digitarComAtraso(campoCadastraNome, 'Nome Teste da Silva 2', 100);
          
        const campoCadastraEmail = await $('[name="email"]');
        await digitarComAtraso(campoCadastraEmail, 'testedasilv2@gmail.com', 100);
                
        const campoCadastraSenha = await $('#password');
        await digitarComAtraso(campoCadastraSenha, 'dasilvasenha1232', 100);
       
        await pause(3000);
        
        const finaliCadastro = await $(`[data-testid='cadastrarUsuario']`);
        await finaliCadastro.click();

        const urlListaUser = 'https://front.serverest.dev/admin/listarusuarios'
        expect(urlListaUser).toBe('https://front.serverest.dev/admin/listarusuarios');
        
    })
})

