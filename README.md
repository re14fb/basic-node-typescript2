# Basic NodeJS + Typescript

<br>

### 1 - Instalar typescript global
```
npm i -g typescript
```

<br>

### 2 - Verificar se o typescript foi instalado e sua versão
```
tsc --version
```

<br>

### 3 - Inicializar o typescript no projeto, será criado um arquivo tsconfig.json
```
tsc --init
```

##### 3.1 - Editar o arquivo tsconfig.json
```
"rootDir": "./src"
"outDir": "./build"
"moduleResolution": "node"
``` 

<br>

### 4 - Inicializar o projeto, será criado um arquivo package.json
```
npm init -y
```
##### 4.1 - Editar os scripts no arquivo package.json
```
"build": "tsc -p .",
"dev": "nodemon ./src/index.ts",
"start": "node ./build/index.js"
``` 

<br>

### 5 - Instalar depêndencia express
```
npm i express
```

<br>

### 6 - Instalar as depêndencias de desenvolvimento typescript, nodemon, ts-node, @types/express, @types/node
```
npm i -D typescript nodemon ts-node @types/express @types/node
```

<br>

##  Criar um servidor

### 7 - Criar um diretório
```
mkdir src
```
##### 7.1 - Entrar na pasta src
```
cd src
``` 
##### 7.2 - Dentro do diretório src, criar um arquivo index.ts
```
code index.ts
``` 
#### `enter`

<br>

### 8 - Editando servidor, no arquivo index.ts
```
import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        name: "Your name",
        phone: 99999999999
    });
});

app.listen(port, () => console.log(`Server running http://localhost:${port}`));
```

<br>

### 9 - Aplicando Typescript, no arquivo index.ts
```
import express, { Application, Request, Response } from "express";
const app: Application = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.json({
        name: "Your name",
        phone: 99999999999
    });
});

app.listen(port, (): void => console.log(`Server running http://localhost:${port}`));
```

<br>

### 10 - Voltar para raiz do projeto
```
cd ..
```

<br>

### 11 - Rodar servidor em modo de desenvolvimento
```
npm run dev
```

<br>

### 12 - Build do projeto, será criado diretório build com um arquivo index.js com os dados do arquivo index.ts
```
npm run build
```

<br>

### 13 - Rodar servidor
```
npm start
```

