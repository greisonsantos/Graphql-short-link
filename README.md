

### Requisitos
NodeJS LTS 

Docker, Docker-Composer (opcional)

### Uso
Clonar o repositório

$ git clone https://github.com/greisonsantos/Graphql-short-link.git

$ cd [ProjectName]

$ npm install ou yarn 



### Executando o Docker via Compose

O arquivo docker-compose.yml já contém a imagens para sistemas de banco de dados  MongoDB, com seu sistema de administração.

### Para subir as imagens execute o comando no projeto:

$ docker-compose up -d, para rodar em modo daemon

###  Banco de Dados:

MongoDB

Usuário: root

Senha: secret

Painel de Administração:

Administração: http://localhost:8001



###  Executando o service

$ yarn dev