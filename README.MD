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

