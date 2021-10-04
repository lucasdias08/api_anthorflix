# Primeiras considerações

Sistema desenvolvido como teste de conhecimento. Tecnologias envolvidas: JavaScript(ES), MySql, Autenticação, React, JEST e Cypress. Você pode clonar esse repositório e seguir os passos para testá-la, avaliá-la ou melhorá-la.

- Antes de iniciarmos, seria interessante estar bem familiarizado com as tecnologias supracitadas;

- Pode testar com autenticação (ClientHTTP) ou com os testes unitários.

## Preparando ambiente

- __1.__ Clone esse repositório e o abra em seu editor de texto preferido, caso queira;

- __2.__ Crie um Banco de dados PostgreSQL com o nome "venx_db". Exatamente dessa forma;

- __3.__ Inicialize os pacotes do projeto com o comando:
>npm i

- __4.__ Navegue até a raíz do projeto com seu terminal (CMD, PowerShell, etc) e, em seguida, até a pasta "src";

- __5.__ Execute o comando: 
>npx sequelize-cli db:migrate

- __6.__ Em seguida, execute o comando: 
>npx sequelize-cli db:seed:all

- __7.__ E, enfim, execute o comando: 
>npm start

- __8.__ Se optar, execute em seguida o comando: 
>npm test

### Justificativas

- O comando do item 5 executa as MIGRATIONS para criar a tabela de usuários no banco de dados, a partir do arquivo "users.json";
- O comando do item 6 executa as SEEDERS para povoar a tabela recém criada de usuários, manipulando e filtrando os dados de cada índice do array de usuários;
- O comando do item 7 executa o servidor da API Rest;
- O comando do item 8 executa o comando de teste. Com ele você pode ver que as operações solicitadas foram aprovadas pelo Testes Unitários nos end-point's;

# Manipulando a API

### Rotas

Para trabalhar com as rotas via algum clientHttp, como o Insomnia ou o Postman, é necessário criar no cabeçalho o campo "api-key" e atribuir o valor "202217". Caso contrário, retornará uma mensagem de não autorizado.

### Users (usuários)

O Insert já foi realizado via SEEDERS e não era necessário uma rota para inserção de usuários;

- __Rota GET__. Rota padrão para saber se o servidor está rodando, a priori, sem mairoes problemas;
>localhost:8080/

- __Rota GET__. Espera-se que retorne todos os usuários e seus dados cadastrados, no formato JSON, com limite inicial de 50. O aprâmetro "limit" é opcional, mas, caso opte, ele limitará quantos indices devem vir na requisição;
>localhost:8080/product/{limit?}

- __Rota GET__, __parametrizada__. Espera-se que retorne o usuário especificado pelo id na forma de parametro, no formato JSON;
>localhost:8080/users/{id_user}

- __Rota PUT__. Espera-se que seja passado o ID de identificação do registro e os dados cujo JSON deve ser algo próximo a:

{
    "name_user": "nome atualizado",
    "email_user": "email.atualizado@email.com",
    "phone_user": "(11) 11111-1111",
    "genre_user":"genero atualizado",
    "birth_user": "01-01-1900",
    "nationality_user": "nacionalidade atualizada",
    "path_image_user": "https://www.einerd.com.br/wp-content/uploads/2020/11/boruto-naruto-forma-final-e1606135074767-890x464.jpg",
    "street_user_address": "rua atualizada",
    "number_home_user_address": "17",
    "city_user_address": "cidade atualizada",
    "state_user_address": "estado atualizado",
    "latitude_user_address": "latitude atualizada",
    "longitude_user_address": "longitude atualizada"
}

. Se tudo der certo, será retornado o JSON dos dados __atualizados__ no cadastrado e o Status Code competente;
>localhost:8080/users/{id_user}

- __Rota DELETE__. Espera-se que seja passado o ID de identificação do registro. Você pode conferir se realmente foi excluído o registro utilizando a rota GET acima;
>localhost:8080/users/:id_user
