# modsis
Disciplina modsis FAETEC (2022.1).

## Front-End

### Setup do Ambiente

#### 1) Github desktop (git)

https://desktop.github.com/

Sign in to GitHub.com

Clone MFranca/modsis

#### 2) Node.js (npm)

https://nodejs.org/en/

Versão LTS (ex.: 16.14.2 LTS - Recommended For Most Users)

Opcionalmente: [x] Automatically install the necessary tools.
```
====================================================
Tools for Node.js Native Modules Installation Script
====================================================

This script will install Python and the Visual Studio Build Tools, necessary
to compile Node.js native modules. Note that Chocolatey and required Windows
updates will also be installed.

This will require about 3 Gb of free disk space, plus any space necessary to
install Windows updates. This will take a while to run.
```

Atenção: se "travar", reiniciar, executar novamente, Repair.

#### 3) Angular CLI

https://angular.io/

https://angular.io/guide/setup-local

Confirmar que o gerenciador de pacotes (npm) está funcionando: `npm -v`

Instalar o Angular CLI: `npm install -g @angular/cli`

Verificar versão do Angular instalada: `ng --version`

#### 4) Visual Studio Code (IDE VS Code)

https://code.visualstudio.com/		

Download for Windows (Stable Build)

I accept the agreement.

Mark done.

[ ] Show welcome page on startup.

File, Preferences, Settings: 
- Telemetry (off)
- zoom (1)
- bracketPairColorization (Enabled)
- editor.guides.bracketPairs (active)

Extensions (install)
- Community Material Theme (Equinusocio)
- Angular Language Service (Angular)
- angular2-switcher (infinity1207)

Opcional (interessante): https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials

Obs.: Ao abrir o diretório no VS Code: Yes, I trust the authors.

Git not found. (Don`t Show Again).

[Ctrl] + [Shift] + [V] = Preview do README.md

### Testar Ambiente

#### 1) Criar uma aplicação de teste (as opções podem variar)

Criar diretorio "front-end" dentro do repositório Git.

`ng n modsisApp --directory=. --minimal=true --routing=true --skipTests=true --style=scss --strict=true`

(Este comando pode levar alguns minutos para ser concluído. Aguarde.)

#### 2) Realize o build e teste a aplicação (está funcionando localmente)

`ng serve --open`

(O site estará disponível em `http://localhost:4200/`)

Parabéns, você concluiu com sucesso o setup de um ambiente de desenvolvimento front-end Angular!

#### Outra Opção (para testar o ambiente):

a) Fazer o clone ou baixar este repositório como um arquivo .zip, descompactá-lo;

b) No terminal (promtp de comando), entrar no diretório `front-end`;

`npm install`

`ng serve --open`

Você deve receber uma mensagem como esta abaixo: 

```
Build at: 2022-04-15T14:14:55.917Z - Hash: 0f971024622bbf52 - Time: 21104ms
                                        
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
  
√ Compiled successfully.                                                                                           
```

(O site estará disponível em `http://localhost:4200/`)

Parabéns, você concluiu com sucesso o setup de um ambiente de desenvolvimento front-end Angular!