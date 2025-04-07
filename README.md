# NestJS Clean Architecture & DDD API

[![Nest][nest.js]][nest-url]
[![Next][next.js]][next-url]
[![Jest][jest]][jest-url]
[![PostgreSQL][postgresql]][postgresql-url]
[![Prisma][prisma]][prisma-url]
[![Docker][docker]][docker-url]
[![Swagger][swagger]][swagger-url]

Este projeto demonstra a implementação de uma API REST robusta e escalável utilizando NestJS, TypeScript, Clean Architecture e Domain-Driven Design (DDD). O objetivo é criar uma arquitetura que facilite a manutenção, testes e expansão da aplicação, seguindo as melhores práticas de desenvolvimento.

## Estrutura do Projeto

<img style="width: 100%; max-width: 500px; height: 100%" src="./docs/images/Clean-Architecture-3.png" alt="Main Page" width="100%">

<br/>
O projeto é organizado em camadas, seguindo os princípios da Clean Architecture e DDD:

- **Entities:** Representam os objetos de negócio da aplicação.
- **Use Cases (Domínio):** Implementam a lógica de negócio, orquestrando as entidades.
- **Controllers (Interface):** Recebem as requisições HTTP e delegam para os casos de uso.
- **Infrastructure:** Contém a implementação de detalhes de infraestrutura, como acesso a banco de dados e serviços externos.

## Tecnologias Utilizadas

- NestJS
- TypeScript
- PrismaORM
- PostgreSQL (ou outro banco de dados, se aplicável)
- Jest (para testes)
- Docker (para conteinerização, se aplicável)
- Swagger (para documentação da API)
- GitHub Actions (para CI/CD)

## Funcionalidades

- **API REST com NestJS:** Criação de uma API RESTful utilizando NestJS e TypeScript.
- **Design Patterns:** Aplicação de padrões de design para melhorar a organização e a manutenção do código.
- **TypeScript Avançado:** Utilização de recursos avançados do TypeScript, como Interfaces e Generics.
- **Clean Architecture & DDD:** Implementação da Clean Architecture e DDD para uma arquitetura escalável e testável.
- **Documentação Swagger:** Geração automática de documentação da API com Swagger.
- **CI/CD com GitHub Actions:** Configuração de um workflow de Integração Contínua (CI) com GitHub Actions.
- **Banco de Dados em Memória:** Utilização de banco em memória para simulações, testes e ambiente de desenvolvimento leve e rápido.
- **Dockerização:** Configuração completa com Docker para facilitar a criação de ambientes isolados, portabilidade e produtividade na execução da aplicação.
- **Deploy em Produção:** Implementação de um processo de deploy contínuo a partir do repositório do GitHub.

## Casos de Uso:

### Regras de negócio (RN)

- Os campos name, email e password serão de preenchimento obrigatório.
- O campo createdAt será de preenchimento opcional.
- O usuário não deve poder se cadastrar com e-mail duplicado.

### Requisitos funcionais (RF)

- Deve ser possível se cadastrar.
- Deve ser possível se autenticar.
- Deve ser possível exibir os dados de um usuário.
- Deve ser possível listar todos os usuários.
- Deve ser possível atualizar o nome de um usuário.
- Deve ser possível atualizar a senha de um usuário.
- Deve ser possível excluir um usuário.

### Requisitos não-funcionais (RNF)

- A senha do usuário precisa estar criptografada.
- Os dados da aplicação precisam estar persistidos em um banco de dados Postgres.
- Todas as listas de dados precisam estar paginadas com 15 itens por página.
- O usuário deve ser identificado por um JWT (JSON Web Token).

## Como Executar

1.  Clone o repositório: `git clone https://github.com/aluiziodeveloper/nestjs-clean-arch`
2.  Instale as dependências: `npm install`
3.  Configure o banco de dados (se aplicável).
4.  Execute a aplicação: `npm run start:dev`

## Testes

Para executar os testes unitários e de integração:

```bash
npm run test
```

[next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[nest.js]: https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white
[nest-url]: https://nestjs.com/
[swagger]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/
[jest]: https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white
[jest-url]: https://jestjs.io/pt-BR/
[postgresql]: https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/
[prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[prisma-url]: https://www.prisma.io/
[docker]: https://img.shields.io/badge/docker-257bd6?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.postgresql.org/
