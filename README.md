# Construindo container 🐋

<br>
Para construir o container acesse o terminal de sua aplicação e execute:

```
docker-compose up -d --build
```

<br>
Caso seja necessário entrar no container execute:

```
docker-compose exec app bash
```

# Configurando aplicação 🤖

<br>
<p>---------------------------------------------------------------------------------------------------------------</p>
<strong>Observação: Este projeto foi desenvolvido utilizando banco de dados MySQl.</strong>
<p>---------------------------------------------------------------------------------------------------------------</p>
<br>

Configure sua conexão com o banco de dados ou se preferir usar conexão do local utilize no seu .env:

```
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DB_NAME=cripto_local
```

<br>
Crie as tabelas no banco de dados:

```
node ace migration:run
```

<br>
Para importar os simbolos a partir da Binance execute:

```
node ace save:symbols_from_binance
```

<br>
Container OK, Configuração OK. 👌
<br>

#

Se precisar entrar no container como root use:

```
docker-compose exec -uroot app bash
```

# Testando API

<br>
Para ter certeza que a API está online acesse url:

```
localhost:3333/
```

# Rotas API

```
/symbols - Listagem de simbolos
/symbols/get-by-name/:symbol - Mostrar simbolo
/symbols/start-sync - Sincroniza os simbolos da binance
```
