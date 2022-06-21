# Projeto Store Manager :memo:

## Contexto :selfie:

Neste projeto, foi desenvolvido um back-end usando `ORM` com o pacote `sequelize` do `npm`, onde foi possível:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

## Técnologias usadas :technologist:

- Projeto desenvolvido em NodeJs, utilizando a biblioteca Express para criação da API RESTful.
- Sequelize para criação e associação de tabelas MySQL.

## Habilidades desenvolvidas

Neste projeto, consegui desenvolver as seguintes habilidades:

- Entender o funcionamento de um ORM;
- Modelar um banco de dados e criar associações através de um ORM;
- Fazer inserções, consultas, atualizações e remoções através do ORM.

## Executando aplicação

1. Clone o repositório
  * `git clone git@github.com:viieirathi/blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd blogs-api`

2. Instalando os pacotes necessários:
  - `npm install`

3. Altere o arquivo .env-example para .env
  * Altere os dados de usuário conforme os dados do MySql instalado em sua máquina

4. Inicialize o servidor de banco de dados MySQL:
  - **Na própria máquina:**
    * Certifique-se que o servidor MySQL esteja rodando com o comando:
      `sudo systemctl status mysql`
    - Para iniciar o serviço:
      `sudo systemctl start mysql`
    
  - **Através do Docker**
    * Certifique-se que já tenha o Docker instalado em sua máquina.
      - Inicie um container com a imagem do MySQL:
        * `docker container run --name blogs_api -e MYSQL_ROOT_PASSWORD=suasenha -d -p 3306:3306 mysql:5`
        * `docker exec -it blogs_api bash`
         
        * `Não se esqueça de alterar o arquivo .env` :blush:
        * `MYSQL_USER=root`
        * `MYSQL_PASSWORD=suasenha`
        

4. Inicializando a API:
  - `npm start`

5. Abra o navegador e acesse a rota:
  - `http://localhost:3000/api-docs`

  
  ## Instrução de como utilizar a API dentro da documentação:
   1. Siga para rota POST /user e cadastre um usuário.

   3. Faça login com esse usuário.

   5. A API irá responder com um "token", copie o conteúdo do "token", apenas o que se encontra entre ""

   7. Clique no botão "Authoroze" e adicione o conteúdo do token no campo "value".

   9. Pronto, agora todas as rotas possuem autenticação e prontas para serem testadas.

   11. Caso o token não seja passado, somente a rota de cadastro de usuário irá funcionar.
