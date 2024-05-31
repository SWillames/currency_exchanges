# Currency Exchanges
Currency Exchanges é uma aplicação para gerenciar e converter moedas.

## Descrição
Este projeto é uma aplicação em Ruby on Rails que permite a conversão entre diferentes moedas, fornecendo taxas de câmbio atualizadas.

## Instalação

### Usando Docker

Contruindo a imagem do projeto com o comando build: 
```
docker-compose build
```

### Sem docker

#### Pré-requisitos

- Ruby 2.6.5 
- Rails 6.0.2
- SQLite3 

para instalar as dependências: 

```
bundle install
```

## Utilização
Para rodar a aplicação com docker: 
```
docker-compose up
```

Sem docker
```
rails s
```
## Rodando teste
```
docker-compose run --rm app bundle exec rspec
```