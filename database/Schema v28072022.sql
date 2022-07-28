-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_modsis
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_modsis
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_modsis` DEFAULT CHARACTER SET utf8 ;
USE `db_modsis` ;

-- -----------------------------------------------------
-- Table `db_modsis`.`tb_jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_modsis`.`tb_jogo` (
  `id` BIGINT NOT NULL,
  `nm_jogo` VARCHAR(45) NOT NULL,
  `qt_jogadores` INT NULL,
  `dt_lancamento` DATETIME NULL,
  `nm_estilo` VARCHAR(45) NULL,
  `nm_plataforma` VARCHAR(45) NULL DEFAULT '\"PS4\"',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_modsis`.`tb_amigo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_modsis`.`tb_amigo` (
  `id` BIGINT NOT NULL,
  `nm_amigo` VARCHAR(45) NOT NULL,
  `ds_telefone` VARCHAR(60) NOT NULL,
  `ds_email` VARCHAR(60) NOT NULL,
  `dt_nascimento` DATETIME NULL,
  `nm_apelido` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_modsis`.`tb_emprestimo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_modsis`.`tb_emprestimo` (
  `id` BIGINT NOT NULL,
  `dt_emprestimo` DATETIME NOT NULL,
  `dt_prazo` DATETIME NOT NULL,
  `dt_devolucao` DATETIME NULL,
  `nm_jogo_amigo` VARCHAR(45) NOT NULL,
  `ds_estado_jogo_amigo` VARCHAR(60) NULL,
  `id_amigo` BIGINT NOT NULL,
  `id_jogo` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tb_emprestimo_tb_amigo_idx` (`id_amigo` ASC) VISIBLE,
  INDEX `fk_tb_emprestimo_tb_jogo_idx` (`id_jogo` ASC) VISIBLE,
  CONSTRAINT `fk_tb_emprestimo_tb_amigo`
    FOREIGN KEY (`id_amigo`)
    REFERENCES `db_modsis`.`tb_amigo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_emprestimo_tb_jogo1`
    FOREIGN KEY (`id_jogo`)
    REFERENCES `db_modsis`.`tb_jogo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
