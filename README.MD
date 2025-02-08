# Desafio Técnico Acelera Jovem

CRUD desenvolvido utilizando **Node.js**, **Express** e **MongoDB** para gerenciamento de usuários.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB

## Funcionalidades

- Criar novos usuários.
- Consultar todos os usuários com opções de filtro (por inicial do nome, idade ou data de criação).
- Consultar um único usuário pelo ID.
- Atualizar dados do usuário (incluindo alteração de senha, que requer a senha antiga).
- Deletar usuários pelo ID.

## Endpoints

### Adicionar Usuário

- **Método:** `POST`
- **URL:** `http://localhost:8080/api/users/add`
- **Corpo da Requisição (JSON):**

  ```json
  {
    "name": "Victor Merlin",
    "email": "merlin@gmail.com",
    "born_date": "2004-08-20",
    "age": 20,
    "user_password": "123"
  }

- **Código de Status:** 201
- **Resposta**:
  
```json
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

### Consultar um Usuário por ID
- **Método:** `GET`
- **URL:**`http://localhost:8080/api/users/{id}`

### Exemplo: ID encontrado
- **Código de Status:** 200
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

### Exemplo: ID não encontrado
- **Código de Status:** 400
- **Resposta:**

```json
  {
    "Message": "ID inválido"
  }




