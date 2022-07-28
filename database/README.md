# ModsisDB

## Banco de Dados na Nuvem - MySQL Community Edition

### 1) Instalar Ferramentas

1a) o Workbench

	a) Download MySQL Workbench
	https://dev.mysql.com/downloads/workbench/
	No thanks, just start my download.

	b) Instalar o arquivo mysql-workbench-community-8.0.29-winx64.msi
	
2b) o MySQL

	mysql-installer-community-8.0.29.0.msi

### 2) Criar Banco de Dados 

2a) local (on-premises)

	#### Instalação Local

	https://dev.mysql.com/downloads/file/?id=511553

	MySQL Server 8.0.29

	[X] Start the MySQL Server at System Startup

2b) na Nuvem

	Ref.: https://docs.microsoft.com/pt-br/azure/mysql/quickstart-create-mysql-server-database-using-azure-portal

	i) Portal Azure

	ii) Azure Database for MySQL servers, Create, Flexible server (recommended), Create

	iii) Project Details

		Subscription, Resource Group, 

		server name: mafranca-modsis-mysql-db

		Region: Central India		

		MySQL Version: 8.0

		Workload type: For development or hobby projects

		High availability: [ ]

		Administrator account:  dba/<senha Mysql>

		Estimated costs

		Standard_B1ms (1 vCore) 17.89/month

		Next: Networking

		[X] Public access (allowed IP addresses)

		Firewall rules (Connection security)

		+ Add 0.0.0.0 - 255.255.255.255, Continue

		Next: Tags

		Review + create

		PRICE SUMMARY
		----- -------

		Estimated total USD 20.49/month, Create
			Initializing deployment...
			Deployment is in progress...
			Your deployment is complete.
			Go to resource.

		(US)
		----

		Gen 5 Compute generation

		Cost per vCore	51.10

		vCores selected	×     1
		+
		Basic storage

		Cost per GB / month	0.19

		Storage selected (in GB)	×    5
    
		EST. MONTHLY COST:	$52.05 USD		

### 3) Configurar Conexão no Workbench

	Resource, Settings, Connect

	Connection strings

    ```
	MySQL Connections +
	Hostname = mafranca-modsis-mysql-db.mysql.database.azure.com
	Port = 3306
	Username = dba
	Password: [Store in Vault...]
    ```
	
	[Test Connection]
	
	Successfully made the MySQL connection

### 4) Criar esquema (base/vazio) do Banco
	a) Conectar

	b) Clique inverso no "Navigator", Create Schema...

		Name: db_modsis

		Apply, 

		`CREATE SCHEMA 'db_modsis' ;`

		Apply.

		SQL script was successfully applied to the database.

		Finish.

	c) Gerar Esquema a Partir do Modelo (já crido)

		Menu Database, Forward Engineer...

		Next, Next, [X] Export MySQL Table Objects, Next, Save to File...

		Cancel

### 5) Criar modelo e fazer o deploy
	File, New Model

	Add Diagram => EER Diagram

	File, Save Model

	Executando a criação do esquema de fato localmente e na nuvem.

	Conectar no Banco de Dados, Clique inverso em "db_modsis", Set as Default Schema

	Comentar as linhas abaixo para evitar a criação de um novo Schema/Banco.

	```
	-- -----------------------------------------------------
	-- Schema mydb
	-- -----------------------------------------------------
	-- CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
	-- USE `mydb` ;
	```
	
	Menu File, Open SQL Script...

	Query, Execute ([Ctrl] + [Shift] + [Enter])	