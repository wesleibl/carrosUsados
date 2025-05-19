# carrosUsados

Sistema de gerenciamento de carros usados com autenticação de usuários via JWT.

## Tecnologias

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT (JSON Web Token)
- Joi (validação)
- Dotenv

## Como rodar

1. Clone o repositório

```bash
git clone https://github.com/wesleibl/carrosUsados.git
cd carrosUsados
```

2. Instale as dependências

```bash
npm install
```

3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o conteúdo:

```env
PORT=5000
DB_STRING=sua_string_de_conexao_mongodb
JWT_SECRET=sua_chave_secreta
```

4. Rode o projeto

```bash
npm run dev
```

## Rotas

### User

- `POST /users/register` — Cadastra um novo usuário.

### Auth

- `POST /auth/login` — Faz login e retorna token JWT.

### Carros

- `POST /cars/add` — Adiciona um novo carro (necessário estar autenticado).
- `POST /cars/findCarById` — Lista carro pelo ID (sem retornar o `userId`).
- `POST /cars/updateByid` — Edita um carro (valida se é do usuário).
- `POST /cars/deleteCarById` — Deleta um carro (valida se é do usuário).
- `GET /cars/carsById` — Lista os carros do usuário autenticado.

## Estrutura

```
src/
│
├── controllers/
├── middlewares/
├── models/
├── routes/
├── schemas/
├── services/
├── types/
├── utils/
└── index.ts
```

## Autor

Feito com 💻 por [@wesleibl](https://github.com/wesleibl)