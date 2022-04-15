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
