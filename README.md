# NestJS Clean Architecture & DDD API

Este projeto demonstra a implementação de uma API REST robusta e escalável utilizando NestJS, TypeScript, Clean Architecture e Domain-Driven Design (DDD). O objetivo é criar uma arquitetura que facilite a manutenção, testes e expansão da aplicação, seguindo as melhores práticas de desenvolvimento.

## Estrutura do Projeto

O projeto é organizado em camadas, seguindo os princípios da Clean Architecture e DDD:

- **Entities:** Representam os objetos de negócio da aplicação.
- **Use Cases (Domínio):** Implementam a lógica de negócio, orquestrando as entidades.
- **Controllers (Interface):** Recebem as requisições HTTP e delegam para os casos de uso.
- **Infrastructure:** Contém a implementação de detalhes de infraestrutura, como acesso a banco de dados e serviços externos.

## Tecnologias Utilizadas

- NestJS
- TypeScript
- TypeORM (ou outra ORM, se aplicável)
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
- **Deploy em Produção:** Implementação de um processo de deploy contínuo a partir do repositório do GitHub.

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
