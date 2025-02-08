# CRUD Desafio técnico Acelera Jovem

CRUD desenvolvido utilizando **Node.js**, **Express** e **MongoDB** para gerenciamento de usuários.


## **Tecnologias Utilizadas**

- Node.js
- Express
- MongoDB

## **Funcionalidades**

- Criar novos usuários.
- Consultar todos os usuários com opções de filtro (por inicial do nome, idade ou data de criação).
- Consultar um único usuário pelo ID.
- Atualizar dados do usuário (incluindo alteração de senha, que requer a senha antiga).
- Deletar usuários pelo ID.

## **Instruções de Uso**
- **Requisitos:** Ter Node.js instalado na máquina.
- **Passos para execução:**
    1. **Clonar o repositório do GitHUB com o link:** `git clone https://github.com/VictorHCSampaio/Acelera-Jovem-Dev-Back-End.git` 
    2. **Abrir o terminal e entrar na pasta utilizando o código:** `cd Acelera-Jovem-Dev-Back-End`
    3. **Instalar as depêndencias:** `npm install`
    4. **Digitar o código para atribuir a URL do banco:** `$env:MONGODB_URL='mongodb+srv://user:userdataside@cluster0.qkkgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'`
    5. **Digite o código para rodar a aplicação:** `npm run dev`
    6. **Utilize os Endpoints para fazer o uso do CRUD**

# **Especificação de Endpoints**

### **Adicionar Usuário**

- **Método:** `POST`
- **URL:** `http://localhost:8080/api/users/add`
- **Corpo da requisição (JSON):**
```json
{ 
    "name": "Victor Merlin",
    "email": "merlin@gmail.com",
    "born_date": "2004-08-20",
    "age": 20,
    "user_password": "123"
}
```

- **Código de Status:** `201`

- **Resposta:** 
```json
{
    "name": "Victor Merlin",
    "email": "merlin@gmail.com",
    "born_date": "2004-08-20T00:00:00.000Z",
    "age": 20,
    "user_password":
    "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    "_id": "67a6bf9ceffd15d1037ca942",
    "createdAt": "2025-02-08T02:21:16.296Z",
    "updatedAt": "2025-02-08T02:21:16.296Z",
    "__v": 0
}
```


### Consultar um Usuário por ID

- **Método:** `GET`
- **URL:**`http://localhost:8080/api/users/{id}`

**Exemplo:** ID encontrado

- **Código de status:** `200`

- **Resposta:**
```json
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
```
**Exemplo:** ID não encontrado

- **Código de status:** `400`
- **Resposta**: 
```json
{
    "message": "ID inválido"
}
```

### Consultar Todos os Usuários
- **Método:** `GET`
- **URL:** `http://localhost:8080/api/users`

**Exemplo sem filtros**
```json		
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
```
**Filtros e ordenação**
- **Filtrar por inicial do nome:**
    - **URL:** `http://localhost:8080/api/users?name=^v`
    - **Código de status:** `200`
    - **Resposta:**
        ```json
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
        ```
- **Caso nenhum usuário seja encontrado:**
    - **Código de Status:** `404`
    - **Resposta:**
        ```json
        {
            "message": "Nenhum usuário com a incial foi encontrado"
        }
        ```
- **Ordenação de idade decrescente:**
    - **URL:** `http://localhost:8080/api/users?sort=-age`
    - **Código de Status:** `200`
    - **Resposta:**
        ```json
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
        ```
- **Ordenação de idade crescente:**
    - **URL:** `http://localhost:8080/api/users?sort=age`
    - **Código de Status:** `200`
    - **Resposta:**  
        ```json
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
        }
        ```

- **Filtrar e Ordenar (nome e idade):**
    - **URL:** `http://localhost:8080/api/users?name=^V&sort=age`  
    - **Código de Status:** `200``
    - **Resposta:**
        ```json
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
        ```
### Atualizar um usuário
- **Método:** `PUT`
- **URL:** `http://localhost:8080/api/user/update/{id}`
- **Corpo da Requisição (JSON):**
    ```json
    { 
    "name": "Victor Sampaio",
    "age": 30,
    "user_password": "123",  
    "new_password": "1234"  
    }
    ```
- **Código de Status:** `200`
- **Resposta:** 
    ```json
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
    ```
- **Erro ao tentar alterar a senha sem informar a senha antiga:**  
- **Código de status:** `400`
- **Resposta:**
    ```json
    {
        "message": "A senha é necessária"
    }
    ```
### **Deletar um usuário**


- **Método:** `DELETE`
- **URL:** `http://localhost:8080/users/delete/{id}`

**Exemplo: ID Encontrado:**
- **Código de Status:** `200`
- **Resposta:**
    ```json
    {
        "message": "Usuário deletado com sucesso" 
    }
    ```
**Exemplo: ID não Encontrado:**
- **Código de Status:** `400`
- **Resposta:**
    ```json
    {
        "message": "ID inválido" 
    }
    ```