# ModsisApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Fazendo os Ajustes do Layout

### Adicionando Componentes (layout)

```
npm i @angular/cdk
npm i @angular/material
```

### Editar arquivos:

index.html - estilos

styles.scss - estilos

app\app.module.ts - localização, componentes, módulos, serviços e internacionalização

app\app.component.ts - layout com menu lateral

app\app-routing.module.ts - links de navegação

### Criar sub-pastas

app\components

app\components\home

app\components\tests

app\guards

app\shared

### Criar arquivos:

app\material.module.ts

app\app.component.html

app\components\home\home.component.ts

app\components\home\home.component.html

### Copiar imagens para a pasta: assets

Vamos compilar tudo pra garantir que está tudo funcionando...

`ng build`

```
λ ng build
√ Browser application bundle generation complete.
√ Copying assets complete.
√ Index html generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.c52bbae0408a7254.js      | main          | 433.66 kB |               102.59 kB
polyfills.809916caf2dec869.js | polyfills     |  33.02 kB |                10.67 kB
styles.6afb6185820e8e4f.css   | styles        |   4.58 kB |                 1.17 kB
runtime.8b7065e707a673b2.js   | runtime       |   1.04 kB |               597 bytes

                              | Initial Total | 472.30 kB |               115.01 kB

Build at: 2022-04-15T15:49:36.705Z - Hash: 18ca2a5dd657d8de - Time: 28287ms
```

Agora podemos testar no navegador...

`ng serve --open`

## Baixando a Versão Atualizada e Executando


1) https://github.com/MFranca/modsis
2) Code, Download ZIP
3) modsis-main.zip, descompactar
4) entrar no diretório (exemplo: C:\Downloads\modsis-main\front-end)
5) no prompt de comando (terminal), instale as dependências: `$> npm install`
6) depois, compile o código: `$> ng build`
7) e finalmente, execute o servidor local: `$> ng serve --open`

Ao final, [Ctrl]+[C] no terminal para parar o servidor web local.

```
C:\Downloads\modsis-main\front-end
λ npm install
npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated

added 845 packages, and audited 846 packages in 54s

92 packages are looking for funding
  run `npm fund` for details

1 high severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
npm notice
npm notice New minor version of npm available! 8.5.0 -> 8.9.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.9.0
npm notice Run npm install -g npm@8.9.0 to update!
npm notice
```

```
C:\Downloads\modsis-main\front-end
λ ng build
√ Browser application bundle generation complete.
√ Copying assets complete.
√ Index html generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.3f3e4baceae90613.js      | main          | 433.68 kB |               102.56 kB
polyfills.809916caf2dec869.js | polyfills     |  33.02 kB |                10.67 kB
styles.14fd9dd2d9c3a885.css   | styles        |   4.59 kB |                 1.18 kB
runtime.8b7065e707a673b2.js   | runtime       |   1.04 kB |               597 bytes

                              | Initial Total | 472.34 kB |               114.99 kB

Build at: 2022-05-05T13:21:56.941Z - Hash: b0df0a097ecdb605 - Time: 59076ms
```

```
C:\Downloads\modsis-main\front-end
λ ng serve
√ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   4.53 MB |
polyfills.js          | polyfills     | 294.84 kB |
styles.css, styles.js | styles        | 179.33 kB |
main.js               | main          |  28.01 kB |
runtime.js            | runtime       |   6.52 kB |

                      | Initial Total |   5.03 MB

Build at: 2022-05-05T13:23:20.759Z - Hash: 05b3ce1456f97fb2 - Time: 38032ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


√ Compiled successfully.
```

## Deploy do front-end na nuvem

0) Pre-Req: #web container criado no Azure.
Ref.: https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website

ou em Português:
https://docs.microsoft.com/pt-br/azure/storage/blobs/storage-blob-static-website

especificamente este:
https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal

1) Compilar o código para gerar o diretório "dist"
+ 404.html
`$> ng build`

Vamos usar o conteúdo do diretório dist (IMPORTANTE!!!) para o Deploy

2) Fazer o upload (do conteúdo do diretório "dist") para o Azure.
Atenção para o folder "assets".

Primary Endpoint (exemplo):
https://mystorageaccountsp.z15.web.core.windows.net/

Outras Referências úteis:
https://stackoverflow.com/questions/2619007/microsoft-azure-how-to-create-sub-directory-in-a-blob-container
https://www.codewithadam.com/deploy-host-angular-static-site-azure-blob-storage/