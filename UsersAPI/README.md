# Sobre o Projeto
  Este projeto é uma API REST que engloba operações "crud" usando a biblioteca Knex e autenticação usando JWT.
 
# Como executar a aplicação?

Primeiramente deve estar instalado:
- [Node.js](https://nodejs.org/en/download)
- [MySQL Workbank](https://dev.mysql.com/downloads/workbench/)
- Para instalar as bibliotecas:
  ```
  npm install
  ```
Como faz para executa-lo?
- No terminal da pasta onde se localiza o projeto digite "node index.js".
- Vai no Browser e digite localhost:8686.
    

# Tecnologias Utilizadas
## Linguagens
- JavaScript

## Frameworks
- Node.js
- Express.js

## Bibliotecas
- body-parser
- bcryptjs
- knex
- jsonwebtoken

# Endpoints
### GET /user
Esse endpoint é responsável por retornar a listagem de todos os usuarios cadastrados no banco de dados.
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai recebar a listagem de todos os usuarios.

Exemplo de resposta:
```

[
    {
        "id": 1,
        "email": "ale@gmail.com",
        "role": 1,
        "name": "Alexamdre Marinho2"
    },
    {
        "id": 2,
        "email": "ale2@gmail.com",
        "role": 0,
        "name": "Alexamdre Marinho2"
    },
    {
        "id": 4,
        "email": "ale33@gmail.com",
        "role": 0,
        "name": "Alexamdre Marinho3"
    },
    {
        "id": 5,
        "email": "mi33@gmail.com",
        "role": 1,
        "name": "Michel Felipe"
    }
]
```

### POST /user
Esse endpoint é responsavel por criar um usuario.
Exemplo:
```
{
        "email": "ale336@gmail.com",
        "password": "159",
        "role": 0,
        "name": "Alexamdre Marinho36"
}
```

#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber um "Tudo OK" no console.

##### Falha na rquisição: 400
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de requisição. Motivos: parametro vazio.

Exemplo de resposta:
```
{
    "err": "A senha não pode ser vazia"
}
```

### GET /user/:id
Esse endpoit serve para buscar o usuario pelo id.

Exemplo:
```
http://localhost:8686/user/4
```

#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber um "Tudo OK" no console.

##### Falha na requisição: 404
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de requisição. Motivos: não existe este id.

Exemplo de resposta:
```
{}
```

### PUT /user/
Esse endpoit serve para editar o usuario.

Exemplo:
```
{
        "id": "6",
        "email": "ale336@gmail.com",
        "password": "senhatrocada",
        "role": 0,
        "name": "Alexamdre Marinho36"
}
```

#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber um "Tudo OK" no console.

##### Falha na requisição: 406
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de requisição. Motivos: usuario não existe.

Exemplo de resposta:
```
"O usuario não existe!"
```

### DELETE /user/:id
Esse endpoit serve para deletar o usuario pelo id.

Exemplo:
```
http://localhost:8686/user/4
```

#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber um "Tudo OK" no console.

##### Falha na requisição: 406
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de requisição. Motivos: não existe este id ou usuario.

Exemplo de resposta:
```
O usuario não existe, portanto não pode ser excluido.
```

### POST /recoverpassword
Esse endpoit serve para fazer um token para recuperar a senha.

Exemplo:
```
{
  "email": "ale336@gmail.com"
}
```

#### Respostas
##### OK! 200
Exemplo de resposta:
```

{"15290404658"}

```

##### Falha na requisição: 406
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de requisição. Motivos: não existe este email.

Exemplo de resposta:
```
O e-mail passado não existe no banco de dados!
```

### POST /changepassword
Esse endpoit serve para recuperar a senha.

Exemplo:
```
{
  "token": "15290404658"
}
```

#### Respostas
##### OK! 200
Exemplo de resposta:
```

Senha alterada

```

##### Falha na requisição: 406
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de requisição. Motivos: Token invalido.

Exemplo de resposta:
```
Token invalido!
```

### POST /login
Esse endpoit serve para fazer login.

Exemplo:
```
{
        "email": "ale336@gmail.com",
        "password": "senhatrocada"
}
```

#### Respostas
##### OK! 200
Exemplo de resposta:
```

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZUBnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE3MDQzODg4NDh9.8QduSe64N17xSSOcHUTNPb7OJlr4Um1HhjF45xka4u8"

```

##### Falha na requisição: 406
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de requisição. Motivos: Senha incorreta.

Exemplo de resposta:
```
Senha incorreta
```
# Autor 
Alexandre Oliveira Marinho

https://www.linkedin.com/in/alexandre-oliveira-marinho-b64a54229/




