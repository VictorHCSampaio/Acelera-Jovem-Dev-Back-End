*Desafio técnico Acelera Jovem* 

Desenvolvi um CRUD utilizando Node.js, express e MongoDB, onde é possível criar novos usuários, consultar todos os usuários(com a opção de filtro de primeira letra do nome, idade, ou tempo de criação), atualizar dados dos usuários (caso queira alterar a senha, sera necessária senha do usuário), consultar apenas um usuário através do id, e deletar usuários atráves do id.

*Especificação de Endpoints*

*Adicionar Usuário*
Verbo HTTP: POST
URL sem filtros: http://localhost:8080/api/users/add
Enviar Corpo(JSON):   
   		{ 
            "name": "Victor Merlin",
            "email": "merlin@gmail.com",
            "born_date": "2004-08-20",
            "age": 20,
            "user_password": "123"
        }

Código de status: 201
Retorno:
{
    "name": "Victor Merlin",
    "email": "merlin@gmail.com",
    "born_date": "2004-08-20T00:00:00.000Z",
    "age": 20,
    "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    "_id": "67a6bf9ceffd15d1037ca942",
    "createdAt": "2025-02-08T02:21:16.296Z",
    "updatedAt": "2025-02-08T02:21:16.296Z",
    "__v": 0
}


*Retorna os dados de um usuário cadastrado na base de dados cujo id é fornecido.*
Verbo HTTP: GET 
url: http://localhost:8080/api/users/{id}
ID encontrado:
Código de status: 200
Corpo (JSON):
{
   "_id": "67a6998216b332a6063b1d76",
   "name": "Ayrton Senna",
   "email": "ayrton@gmail.com",
   "born_date": "1956-04-20T00:00:00.000Z",
   "age": 100,
   "user_password": "4a2a663f1b4a1cfba87dd56990edec880eecd3d8f189adad8084ed8514609014",
   "createdAt": "2025-02-07T23:38:42.166Z",
   "updatedAt": "2025-02-08T00:03:31.859Z",
   "__v": 0
}
ID não encontrado:
Código de status: 400
Corpo: “ID inválido”

*Retorna todos os usuários cadastrados na base de dados*
Verbo HTTP: GET 
URL sem filtros: http://localhost:8080/api/users
Código de status: 200
Retorno Corpo (JSON):
		
   {
       "_id": "67a65f1e752b1f8f8688e2c2",
       "name": "Julio césar Martins Cardoso",
       "email": "jcmcs@gmail.com",
       "born_date": "2005-12-31T00:00:00.000Z",
       "age": 19
       "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
       "createdAt": "2025-02-07T19:29:34.251Z",
       "updatedAt": "2025-02-07T21:16:24.770Z",
       "__v": 0,       
   },
   {
       "_id": "67a678ac437b89452f353572",
       "name": "Victor Henrique",
       "email": "sampaiov917@gmail.com",
       "born_date": "2005-01-02T00:00:00.000Z",
       "age": 20,
       "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
       "createdAt": "2025-02-07T21:18:36.386Z",
       "updatedAt": "2025-02-07T21:18:36.386Z",
       "__v": 0
   },

   URL com filtros inicial do nome: http://localhost:8080/api/users?name=^v
   Código de status: 200
   Retorno Corpo (JSON):
   {
       "_id": "67a678ac437b89452f353572",
       "name": "Victor Henrique",
       "email": "sampaiov917@gmail.com",
       "born_date": "2005-01-02T00:00:00.000Z",
       "age": 20,
       "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
       "createdAt": "2025-02-07T21:18:36.386Z",
       "updatedAt": "2025-02-07T21:18:36.386Z",
       "__v": 0
   }
   Inicial não encontrada:
   Código de status: 404
   Corpo: "message": "Nenhum usuário com a incial foi encontrado"

   URL com ordenação de idade decrescente: http://localhost:8080/api/users?sort=-age
   Código de status: 200
   Retorno Corpo (JSON):
   {
       "_id": "67a678ac437b89452f353572",
       "name": "Victor Henrique",
       "email": "sampaiov917@gmail.com",
       "born_date": "2005-01-02T00:00:00.000Z",
       "age": 20,
       "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
       "createdAt": "2025-02-07T21:18:36.386Z",
       "updatedAt": "2025-02-07T21:18:36.386Z",
       "__v": 0             
   },
   {
       "_id": "67a65f1e752b1f8f8688e2c2",
       "name": "Julio césar Martins Cardoso",
       "email": "jcmcs@gmail.com",
       "born_date": "2005-12-31T00:00:00.000Z",
       "age": 19
       "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
       "createdAt": "2025-02-07T19:29:34.251Z",
       "updatedAt": "2025-02-07T21:16:24.770Z",
       "__v": 0, 
   },

   URL com ordenação de idade crescente: http://localhost:8080/api/users?sort=age
   Código de status: 200
   Retorno Corpo (JSON):
   {
       "_id": "67a65f1e752b1f8f8688e2c2",
       "name": "Julio césar Martins Cardoso",
       "email": "jcmcs@gmail.com",
       "born_date": "2005-12-31T00:00:00.000Z",
       "age": 19
       "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
       "createdAt": "2025-02-07T19:29:34.251Z",
       "updatedAt": "2025-02-07T21:16:24.770Z",
       "__v": 0,       
   },
   {
       "_id": "67a678ac437b89452f353572",
       "name": "Victor Henrique",
       "email": "sampaiov917@gmail.com",
       "born_date": "2005-01-02T00:00:00.000Z",
       "age": 20,
       "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
       "createdAt": "2025-02-07T21:18:36.386Z",
       "updatedAt": "2025-02-07T21:18:36.386Z",
       "__v": 0
   },

   URL com filtrar + ordenar: http://localhost:8080/api/users?name=^V&sort=age
   Código de status: 200
   Retorno Corpo (JSON):
   {
        "_id": "67a67abe437b89452f353585",
        "name": "Victor Cruz",
        "email": "palmeiras.sampaio@hotmail.com",
        "born_date": "2005-01-02T00:00:00.000Z",
        "age": 18,
        "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
        "createdAt": "2025-02-07T21:27:26.497Z",
        "updatedAt": "2025-02-07T21:27:26.497Z",
        "__v": 0
    },
    {
        "_id": "67a678ac437b89452f353572",
        "name": "Victor Henrique",
        "email": "sampaiov917@gmail.com",
        "born_date": "2005-01-02T00:00:00.000Z",
        "age": 20,
        "createdAt": "2025-02-07T21:18:36.386Z",
        "updatedAt": "2025-02-08T00:42:12.077Z",
        "__v": 0,
        "user_password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
    },

*Atualizar um Produto*

    Verbo HTTP: PUT
    URL: http://localhost:8080/api/user/update/{id}
    Código de status: 200
    Enviar Corpo(JSON):
    { 
    "name": "Victor Sampaio",
    "age": 30,
    "user_password": "123",  
    "new_password": "1234"  
    }
    
    Retorno Corpo: 
    {
    "_id": "67a67abe437b89452f353585",
    "name": "Victor Sampaio",
    "email": "palmeiras.sampaio@hotmail.com",
    "born_date": "2005-01-02T00:00:00.000Z",
    "age": 30,
    "createdAt": "2025-02-07T21:27:26.497Z",
    "updatedAt": "2025-02-08T01:27:16.467Z",
    "__v": 0,
    "user_password": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"
    }

    Caso tente mudar a senha sem inserir a senha antiga:
    Código de status: 400
    Retorno (JSON): "A senha é necessária"

*Deletar um usuário*

    Verbo HTTP: DELETE
    URL: http://localhost:8080/users/delete/{id}
    ID encontrado:
    Código de status: 200
    Retorno (JSON): Usuário deletado com sucesso

    ID não encontrado:
    Código de status: 400
    Retorno (JSON): ID inválido
