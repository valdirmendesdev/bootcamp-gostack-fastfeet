<h1 align="center">
    <strong>Desafio Bootcamp GoStack - Aplicação FastFeet</strong>
    <br />
    <br />
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

## Sobre o projeto

A aplicação FastFeet é um desafio proposto pelo bootcamp GoStack da Rocketseat para avaliação geral do aprendizado do aluno.

A proposta é o desenvolvimento de uma aplicação completa (back-end, front-end e mobile) utilizando as tecnologias ensinadas no bootcamp, sendo o back-end desenvolvido com Node.Js, Front-end Web com React e o mobile em React Native.

A aplicação é construída e evoluída através de vários desafios que são lançados ao longo dos módulos do curso.

Para acompanhamento dos desenvolvimentos, histórico dos desafios e evolução da aplicação, eu criarei uma **branch** para cada desafio com a minha solução proposta respectiva. 

## Para testar o projeto

Faça o clone do repositório
```bash
git clone git@github.com:valdirmendesgt/bootcamp-gostack-fastfeet.git
```

### API Back-end

#### Rodar a aplicação

##### Dependências
Para execução do projeto, abra a pasta **backend** e instale as dependências do projeto com o comando abaixo:

```bash
yarn
```

##### Variáveis 
Copie o arquivo **.env.example** para **.env** e preencha as variáveis que serão utilizadas pela aplicação.

##### Geração do usuário administrador
Com toda a configuraçã feita, pa criar o usuário administrador, execute o comando:
```bash
yarn sequelize db:seed:all
```

Inicie o projeto:

```bash
yarn start
```

Clique no link abaixo e verifique se recebeu uma mensagem de sucesso:
[http://localhost:3333/](http://localhost:3333/)

#### Rotas disponíveis

|Método HTTP|         Rota        | Descrição                                   
|-----------|---------------------|---------------------------------------------
| GET       | /                   | Retorna mensagem que a aplicação está OK    
| POST      | /sessions           | Autentica o usuário utilizando email e senha
| POST      | /recipients         | Cria um destinatário                        
| GET       | /recipients         | Lista todos os destinatários existentes     
| GET       | /recipients/:id     | Retorna um destinatário pelo id             
| PUT       | /recipients/:id     | Atualiza dados de um destinatário pelo id   
| DELETE    | /recipients/:id     | Exclui um destinatário pelo id              

## :page_facing_up: Licença de uso

Esse projeto está sob a licença MIT detalhada no arquivo [LICENSE](LICENSE.md).
