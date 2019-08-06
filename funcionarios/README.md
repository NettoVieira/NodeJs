{
  "name": "funcionarios",
  "version": "1.0.0",
  "description": "",
  "main": "funcionarios.js",
  "scripts": {
    "start": "nodemon",
    "dev": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.19.0"
  }
}

Trabalhando com nosso package.json nós vimos que o node_modules é um diretorio que não precisamos inssistir para que ele suba para algum repositorio ou que nós guardemos ele, já que utilizando apenas o comando "npm i" dentro da pasta desejada o node_modules sera criado automaticamente, partindo da configuração do nosso package.json.

Dentro do nosso Package.json nós configuramos o nodemon dentro de start que é um script padrão do node que conseguimos executar utilizando o npm start, pois o comando "start" é do script padrão do node. Diferete do "dev:" que foi criado por mim, que para ser executado precisa-se ser executado com o comando npm run dev, utilizando o comando "run" para que o comando possa ser executado.