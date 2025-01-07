# Projeto de Testes Automatizados com WebDriverIO
Este projeto contém uma suíte de testes automatizados para validar as funcionalidades de cadastro de usuários e produtos em um sistema web. Os testes são realizados usando o framework WebDriverIO e verificam as mensagens de erro em casos de campos obrigatórios não preenchidos.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Tecnologias Utilizadas
WebDriverIO:&nbsp; Framework para automação de testes de interface.<br>
Node.js:&nbsp; Ambiente de execução do WebDriverIO.<br>
Chai / Assert:&nbsp; Ferramentas de asserção para validar os testes.<br>
Mocha:&nbsp; Framework de testes que organiza a execução dos testes.<br>

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Pré-requisitos
Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas:

* Node.js (versão X ou superior)
* npm (gerenciador de pacotes)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Instalação
Clone o repositório:<br>
git clone https://github.com/seu-usuario/nome-do-repositorio.git<br>

Navegue até o diretório do projeto:<br>
cd nome-do-repositorio<br>

Instale as dependências:<br>
npm install

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Exemplo da Estrutura do Projeto

/tests<br>
&nbsp;&nbsp;&nbsp;/cadastroUsuarios.js       # Testes para o cadastro de usuários<br>
&nbsp;&nbsp;&nbsp;/cadastroProdutos.js       # Testes para o cadastro de produtos<br>
/package.json                # Dependências e scripts<br>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Executando os Testes
Para rodar os testes, execute o seguinte comando no terminal:<br>
npx wdio run wdio.conf.js<br><br>
Isso irá executar todos os testes definidos no diretório /tests.
