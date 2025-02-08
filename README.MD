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
