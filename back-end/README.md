# ModsisApp

Back-end da aplicação para gestão de empréstimos de jogos de videogame. API Rest acessível via HTTP/HTTPS.

## Back-End 

This project was generated with [Java 8 SDK](https://www.oracle.com/java/technologies/downloads/) version 8u341 - jdk-8u341-windows-x64.exe.

### File, Preferences, Settings

Filtre por `java.configuration.runtimes`

```
"java.configuration.runtimes": [
        {
            "name": "JavaSE-1.8",
            "path": "C:\\Java\\jdk8",
        }
    ],
"java.jdt.ls.java.home": ""
```

Obs. Quando abrir o projeto, "Configuring java project modsis-backend (Maven baixando as dependências...".

### Extensões

[Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) v0.25.0.
[Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-boot-dev-pack)

Abra a paleta de comandos ([ctrl]+[shift]+[p]), escreva `Reload Window` e pressione [Enter].

### Criar o projeto com Spring Initializr

1. Abra a paleta de comandos ([ctrl]+[shift]+[p]) e digite: `spring`;
1. Selecione a opção: "Spring Initializr: Generate a Maven Project", [Enter];
1. Selecione a versão do Spring-Boot mais atual e estável (2.7.2);
1. Selecione a linguagem Java;
1. Group Id for your project: `br.pro.franca`;
1. Artifact Id: `modsis-backend`;
1. Packaging type: Jar;
1. Java version: 8;
1. Search for dependencies: Spring Web, selecione e depois [Enter];
1. Escolher pasta de destino (`back-end`), Generate into this folder;

### Criar uma Classe Representando um Recurso ("entidade")

Greeting.java (POJO)

GreetingControlle.java (Controller)

### Executando e Testando

Spring Boot Dashboard (à esquerda da IDE).

Run...

[Avisos do Windows Defender/Fireall - allow]

```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.7.2)
```

`Tomcat started on port(s): 8080 (http) with context path ''`

Testar: 

`http://localhost:8080/greeting`

`http://localhost:8080/greeting?name=França`

Importante: note que a pasta `restservice` precisa estar embaixo da pasta `modsisbackend` (que contem a classe anotada com `@SpringBootApplication`).

#### Referências
https://spring.io/guides/gs/rest-service/
https://medium.com/danielpadua/java-spring-boot-vscode-9ef9b8a263cd