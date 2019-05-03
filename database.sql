CREATE SCHEMA `teacher_app` DEFAULT CHARACTER SET utf8 COLLATE utf8_polish_ci ;

CREATE TABLE `teacher_app`.`students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `surname` VARCHAR(45) NULL,
  `class` VARCHAR(45) NULL,
  `age` INT NULL,
  `knowledge_level` TEXT(10) NULL,
  `aim` TEXT(10) NULL,
  `times_weekly` INT NULL,
  `day_of_week` VARCHAR(45) NULL,
  `time` TIME NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `teacher_app`.`sections` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `teacher_app`.`subjects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT NULL,
  `title` VARCHAR(200) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_subjects_1_idx` (`category_id` ASC),
  CONSTRAINT `fk_subjects_1`
    FOREIGN KEY (`category_id`)
    REFERENCES `teacher_app`.`sections` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

CREATE TABLE `teacher_app`.`lessons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `day_of_week` VARCHAR(45) NULL,
  `category_id` INT NULL,
  `subject_id` INT NULL,
  `content` TEXT(10) NULL,
  `assignment` TEXT(10) NULL,
  `materials` TEXT(10) NULL,
  `student_id` INT NULL,
  `next_lesson` TEXT(10) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_lessons_1_idx` (`category_id` ASC),
  INDEX `fk_lessons_2_idx` (`subject_id` ASC),
  INDEX `fk_lessons_3_idx` (`student_id` ASC),
  CONSTRAINT `fk_lessons_1`
    FOREIGN KEY (`category_id`)
    REFERENCES `teacher_app`.`sections` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_lessons_2`
    FOREIGN KEY (`subject_id`)
    REFERENCES `teacher_app`.`subjects` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_lessons_3`
    FOREIGN KEY (`student_id`)
    REFERENCES `teacher_app`.`students` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

