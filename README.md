# Primeiras considerações

Sistema desenvolvido como teste de conhecimento. Tecnologias envolvidas: JavaScript(ES), MySql, Autenticação, HASH(bcrypt), React e JEST. Você pode clonar esse repositório e seguir os passos para testá-la, avaliá-la ou melhorá-la.

- Antes de iniciarmos, seria interessante estar bem familiarizado com as tecnologias supracitadas;

- Pode testar com autenticação (ClientHTTP) e com os testes unitários;

- Para testas com autenticação, descomentar e colocar o módulo "mid" nas rotas de users;

- Se eu tivesse mais tempo (pessoal) livre, teria implementado todos os testes e em todas as rotas;

- BUG conhecido: sem validação no que chega na rota via JSON;

- Feature mais complicada: abstrair a ideia de atualizar dados de entidades de forma assíncrona. Optei pelo uso de Trigger;


## Preparando ambiente

- __1.__ Clone esse repositório e o abra em seu editor de texto preferido, caso queira;

- __2.__ Crie um Banco de dados MySQL com o nome "anthor_db". Exatamente dessa forma;

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

- O comando do item 5 executa as MIGRATIONS para criar a tabela de usuários no banco de dados;
- O comando do item 6 executa as SEEDERS para povoar a tabela recém criada de usuários, manipulando e filtrando os dados de cada índice do array de usuários;
- O comando do item 7 executa o servidor da API Rest;
- O comando do item 8 executa o comando de teste. Com ele você pode ver alguns testes realizados em algumas rotas;

# Manipulando a API

### Rotas

Para trabalhar com as rotas via algum clientHttp, como o Insomnia ou o Postman, é necessário remover os comentários do middleware inserido nas rotas dos testes JEST, caso contrário, retornará uma mensagem de não autorizado.

### Users (usuários)

- __Rota POST__. Espera-se que seja passado os seguintes campos, em JSON, que deve ser algo próximo a:

{
    "name_user": "nome criado",
    "email_user": "email.criado@email.com",
    "password_user": "123456"
}

. Se tudo der certo, será retornado o JSON dos dados __criados__ e o Status Code competente;
>localhost:8080/users

- __Rota GET__. Rota padrão para saber se o servidor está rodando, a priori, sem mairoes problemas;
>localhost:8080/

- __Rota GET__. Espera-se que retorne todos os usuários e seus dados cadastrados, no formato JSON;
>localhost:8080/users

- __Rota GET__, __parametrizada__. Espera-se que retorne o usuário especificado pelo id na forma de parametro, no formato JSON;
>localhost:8080/users/{id_user}

- __Rota PUT__. Espera-se que seja passado o ID de identificação do registro e os dados cujo JSON deve ser algo próximo a:

{
    "name_user": "nome atualizado",
    "email_user": "email.atualizado@email.com",
    "password_user": "12345"
}

. Se tudo der certo, será retornado o JSON dos dados __atualizados__ no cadastrado e o Status Code competente;
>localhost:8080/users/{id_user}

- __Rota DELETE__. Espera-se que seja passado o ID de identificação do registro. Você pode conferir se realmente foi excluído o registro utilizando a rota GET acima;
>localhost:8080/users/:id_user

### Movies (Filmes)

- __Rota POST__. Espera-se que seja passado os seguintes campos, em JSON, que deve ser algo próximo a:

{
	"name_movie": "movie insominia 1 created",
	"releaseYear_movie": "2020"
}

. Se tudo der certo, será retornado o JSON dos dados __criados__ e o Status Code competente;
>localhost:8080/movies

- __Rota GET__. Espera-se que retorne todos os filmes e seus dados cadastrados, no formato JSON;
>localhost:8080/movies

- __Rota GET__, __parametrizada__. Espera-se que retorne o usuário especificado pelo id na forma de parametro, no formato JSON;
>localhost:8080/movies/{id_movie}

- __Rota PUT__. Espera-se que seja passado o ID de identificação do registro e os dados cujo JSON deve ser algo próximo a:

{
	"name_movie": "movie insominia 1 updated",
	"releaseYear_movie": "2020"
}

. Se tudo der certo, será retornado o JSON dos dados __atualizados__ no cadastrado e o Status Code competente;
>localhost:8080/movies/{id_movie}

- __Rota DELETE__. Espera-se que seja passado o ID de identificação do registro. Você pode conferir se realmente foi excluído o registro utilizando a rota GET acima;
>localhost:8080/movies/:id_movie

### MovieRatingUser (interação usuário - filme)

- __Rota POST__. Espera-se que seja passado os seguintes campos, em JSON, que deve ser algo próximo a:

{
	"userWatched": 1,
    "userRating": 2,
	"fk_user_id": 2,
	"fk_movie_id": 1
}

. Se tudo der certo, será retornado o JSON dos dados __criados__ e o Status Code competente;
>localhost:8080/movieratingbyuser

- __Rota GET__. Espera-se que retorne todos os usuários e seus dados cadastrados, no formato JSON;
>localhost:8080/movieratingbyusers

- __Rota PUT__. Espera-se que seja passado o ID de identificação do registro e os dados cujo JSON deve ser algo próximo a:

{
	"userWatched": 1,
    "userRating": 2,
	"fk_user_id": 2,
	"fk_movie_id": 1
}

. Se tudo der certo, será retornado o JSON dos dados __atualizados__ no cadastrado e o Status Code competente;
>localhost:8080/movieratingbyuser/{:id_user}/{:id_movie}

### Comments (comentários)

- __Rota POST__. Espera-se que seja passado os seguintes campos, em JSON, que deve ser algo próximo a:

{
	"text_comment": "comentário feito pelo insomnia na avaliação do usuário de id 1",
    "fk_id_user": 2,
    "fk_id_movieratinguser": 1
}

. Se tudo der certo, será retornado o JSON dos dados __criados__ e o Status Code competente;
>localhost:8080/comments

- __Rota GET__. Rota padrão para saber se o servidor está rodando, a priori, sem mairoes problemas;
>localhost:8080/comments

- __Rota GET__, __parametrizada__. Espera-se que retorne o comentário especificado pelo id na forma de parametro, no formato JSON;
>localhost:8080/comments/{id_comment}

- __Rota PUT__. Espera-se que seja passado o ID de identificação do registro e os dados cujo JSON deve ser algo próximo a:

{
	"text_comment": "comentário feito pelo insomnia na avaliação do usuário de id 1",
    "fk_id_user": 2,
    "fk_id_movieratinguser": 1
}

. Se tudo der certo, será retornado o JSON dos dados __atualizados__ no cadastrado e o Status Code competente;
>localhost:8080/comments/{id_comment}

- __Rota DELETE__. Espera-se que seja passado o ID de identificação do registro. Você pode conferir se realmente foi excluído o registro utilizando a rota GET acima;
>localhost:8080/comments/:id_comment