# ModsisDB

## MySQL Community Edition.

### Banco de Dados na Nuvem

1) Instalar o Workbench
	a) Download MySQL Workbench
	https://dev.mysql.com/downloads/workbench/
	No thanks, just start my download.

	b) Instalar o arquivo mysql-workbench-community-8.0.29-winx64.msi

2) Criar Banco de Dados na Nuvem
	Ref.: https://docs.microsoft.com/pt-br/azure/mysql/quickstart-create-mysql-server-database-using-azure-portal

	server name: mafranca-eter-mysql-db

	Version: 8,0

	PRICE SUMMARY
	----- -------
	Gen 5 Compute generation

	Cost per vCore	51.10

	vCores selected	×     1
	+
	Basic storage

	Cost per GB / month	0.19

	Storage selected (in GB)	×    5
    
	EST. MONTHLY COST:	$52.05 USD

	Admin username: dba/<senha Mysql>

	#### Settings

		Connection security	

		+ Add 0.0.0.0 - 255.255.255.255

	#### Settings

		Connection strings

3) Configurar Conexão no Workbench

    ```
	MySQL Connections +
	Hostname = mafranca-eter-mysql-db.mysql.database.azure.com
	Port = 3306
	Username = dba@mafranca-eter-mysql-db
	Password: [Store in Vault...]
    ```
	
	[Test Connection]
	
	Successfully made the MySQL connection

4) Criar esquema do Banco
	a) Conectar

	b) Clique inverso no "Navigator", Create Schema...

		Name: db_modsis

		Apply, 

		`CREATE SCHEMA 'db_modsis' ;`

		Apply.

		SQL script was successfully applied to the database.

		Finish.

5) Criar modelo e fazer o deploy
	File, New Model

	Add Diagram => EER Diagram

	<>
    
	File, Save Model


### Instalação Local

https://dev.mysql.com/downloads/file/?id=511553

MySQL Server 8.0.29

[X] Start the MySQL Server at System Startup

