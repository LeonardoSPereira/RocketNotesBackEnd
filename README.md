<h1 align="center">RocketNotes Back-End</h1>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]()

  [Português](#pt)
  /
  [English](#en)
  
</div>

# Português <a name = "pt"></a>

## 📝 Tabela de conteúdos

- [Sobre](#about_pt)
- [Tecnologias](#built_using_pt)
- [Iniciando o projeto](#getting_started_pt)
- [Usabilidade](#usage_pt)
- [Testes](#tests_pt)

## 🧐 Sobre <a name = "about_pt"></a>

Projeto Back-end com funcionalidades de cadastrar usuários e que possibilite adicionar notas, links e tags sobre o que desejar.

## ⛏️ Tecnologias usadas <a name = "built_using_pt"></a>

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Knex](https://knexjs.org)
- [JWT](https://jwt.io)
- [Cookies](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies)

## 🏁 Iniciando o projeto <a name = "getting_started_pt"></a>

Essas instruções vão te guiar sobre como ter uma cópia funcional do projeto na sua máquina local para desenvolvimento e testes.

### Pre-requisitos

Inicialmente você vai precisar de alguns programas instalados para que consiga fazer uso:

- [Visual Studio Code](https://code.visualstudio.com) - Editor de código
- [Node.js + npm](https://nodejs.org/en) - Versão LTS recomendada
- [Insomnia](https://insomnia.rest/download) - Para realizar requisições HTTP
- [Beekeeper Studio](https://www.beekeeperstudio.io) - Sistema de gerenciamento de banco de dados


### Instalação

Um passo a passo de como realizar a instalação dos arquivos na sua máquina.

Primeiramente, faça o download, clone do repositório ou uma cópia dos arquivos para seu computador.

Abra os arquivos com o VSCODE e abra o terminal do editor através do comando CTRL + ' ou por meio da barra de ferramentas.

Em seguida, no terminal, execute a seguinte linha de comando:

```
npm install
```
Esse comando irá instalar todas as dependências necessárias para que consiga realizar os testes.

Em seguida, execute uma das duas linhas de comando a seguir para iniciar o servidor local: 

```
npm run dev
```

Por fim, execute a seguinte linha de código:

```
npm run migrate
```

Esse código irá executar as migrations presentes no código necessárias para criar as tabelas de notas e tags dentro do banco de dados que foi criado automaticamente.

## 🎈 Usando <a name="usage_pt"></a>

### Criando Usuário
Para iniciar o uso, abra o Insonmnia e o Beekeeper.

No Insonmnia, no botão de criar nova coleção, clique em importar e em seguida, faça a importação do arquivo de nome 
```
insomnia_rocketnotes.json
```
presente dentro da raiz do projeto para dentro do insomnia e você terá todas as requisições prontas para usar. 

Em seguida, acesse a pasta User e selecione a opção "create", altere os dados que quiser, como nome, email e a senha e clique em "Send". Com isso, o seu usuário deverá ser criado.

### Iniciando uma sessão
Após criar seu usuário, acesse a pasta Sessions e selecione a opção "create". Altere os dados conforme cadastro de seu usuário, comemail e senha e clique em "Send". Com isso, você terá criado uma sessão na aplicação.

*É necessário iniciar uma sessão na aplicação, pelo fato de ser necessário o usuário estar autenticado para realizar as demais requisições. Conforme seria em uma aplicação normal, onde para acessar as suas funcionalidades, você precisa estar logado.*

### Atualizando dados do usuário

A função de atualizar os dados do usuário também estão disponíveis. Para isso, selecione o arquivo de update e altere os dados conforme desejar.

Também é possível atualizar a imagem do seu usuário. Acesse o arquivo Avatar e selecione a foto que desejar.

### Criando notas

Para criar notas, selecione o arquivo create, dentro da pasta Notes.

Em seguida, envie os seguintes dados, sempre em formato de JSON, title (Título da nota), description (descrição), tags e links:
```
{
	"title": "Introdução ao NODEJS",
	"description": "Essa é uma nota de exemplo",
	"tags": ["nodejs", "express"],
	"links": ["link1", "link2"]
}

```
### Listando notas
Para listar suas notas, selecione o arquivo de Index, onde é necessário, na aba de query, fazer uma busca pelo título da nota cadastrada. Já na de Show, é necessário que informe o id da nota que deseja listar.

### Listando tags
Para listar as tags cadastradas, basta selecionar o arquivo de Index, dentro da pasta de Tags e clicar em Send. Com isso, suas tags serão listadas.

### Deletando uma nota
Para deletar uma determinada nota, selecione o arquivo de delete e passe, na url, o id da nota que deseja deletar.

*Importante: caso delete uma nota, as tags relacionadas a ela também serão excluidas.*


**Lembre-se sempre que é possível visualizar os dados e verificar os relativos id's do usuário, das notas e das tags presentes no seu banco de dados por meio do Beekeeper.**

## 🔧 Testes <a name = "tests_pt"></a>

Foram criados três testes para essa aplicação utilizando o JEST.

Os testes incluem criação de usuário, criar usuários com um email que já existe e de atualização de usuário.

Para os testes, foi utilizada a técnica de utilização de um banco de dados em memória com o objetivo de evitar a utilização do banco de dados real.

Para iniciar os testes, no terminal, digite o seguinte comando:
```
npm run test
```



# English <a name = "en"></a>

## 📝 Table of Contents

- [About](#about_en)
- [Technologies Used](#built_using_en)
- [Getting Started](#getting_started_en)
- [Usage](#usage_en)
- [Tests](#tests_en)

## 🧐 About <a name = "about_en"></a>

Backend project with functionalities to register users and allow adding notes, links, and tags on desired subjects.

## ⛏️ Technologies Used <a name = "built_using_en"></a>

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Knex](https://knexjs.org)
- [JWT](https://jwt.io)
- [Cookies](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies)

## 🏁 Getting Started <a name = "getting_started_en"></a>

These instructions will guide you on how to have a functional copy of the project on your local machine for development and testing.

### Prerequisites

You'll initially need several installed programs to make use of it:

- [Visual Studio Code](https://code.visualstudio.com) - Code editor
- [Node.js + npm](https://nodejs.org/en) - Recommended LTS version
- [Insomnia](https://insomnia.rest/download) - For making HTTP requests
- [Beekeeper Studio](https://www.beekeeperstudio.io) - Database management system

### Installation

A step-by-step guide on how to install the files on your machine.

Firstly, download, clone the repository, or create a copy of the files on your computer.

Open the files with VSCODE and open the editor's terminal via CTRL + ' or through the toolbar.

Next, in the terminal, execute the following command:
```
npm install
```

This command will install all necessary dependencies to perform tests.

Then, run either of the following commands to start the local server:

```
npm run dev
```
Finally, execute the following line of code:
```
npm run migrate
```

This code will execute the necessary migrations present in the code to create the notes and tags tables within the automatically created database.

## 🎈 Usage <a name="usage_en"></a>

### Creating User
To start using the application, open Insomnia and Beekeeper.

In Insomnia, in the button to create a new collection, click on import and then import the file named:
```
insomnia_rocketnotes.json
```
present inside the project's root into Insomnia, and you'll have all requests ready to use.

Next, access the User folder and select the "create" option, change the data as desired, such as name, email, and password, and click "Send". Your user should be created.

### Starting a Session
After creating your user, access the Sessions folder and select the "create" option. Change the data according to your user registration, with email and password, and click "Send". This will create a session in the application.

*Starting a session in the application is necessary because the user needs to be authenticated to make further requests, just as in a normal application where accessing its features requires being logged in.*

### Updating User Data

The function to update user data is also available. To do this, select the update file and change the data as desired.

It's also possible to update your user's image. Access the Avatar file and select the photo you want.

### Creating Notes

To create notes, select the create file inside the Notes folder.

Next, send the following data, always in JSON format: title (Note title), description, tags, and links:
```
{
  "title": "Introduction to NODEJS",
  "description": "This is an example note",
  "tags": ["nodejs", "express"],
  "links": ["link1", "link2"]
}
```

### Listing Notes

To list your notes, select the Index file, where in the query tab, search by the note's title. In Show, you'll need to provide the note's id that you want to list.

### Listing Tags

To list the registered tags, select the Index file within the Tags folder and click Send. This will display your tags.

### Deleting a Note

To delete a specific note, select the delete file and pass, in the URL, the note's id you want to delete.

*Important: If you delete a note, the related tags will also be deleted.*

**Remember that you can always view the data and check the respective user, note, and tag IDs in your database through Beekeeper.**

## 🔧 Tests <a name = "tests_en"></a>

Three tests have been created for this application using JEST.

The tests include user creation, creating users with an email that already exists, and updating a user.

For testing, the technique of using an in-memory database was employed to avoid using the actual database.

To start the tests, in the terminal, type the following command:
```
npm run test
```







