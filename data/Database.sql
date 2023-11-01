BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Alumnos" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nombre"	TEXT NOT NULL,
	"apellido"	TEXT NOT NULL,
	"documento"	NUMERIC NOT NULL UNIQUE,
	"fec_nacimiento"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "Maestros" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nombre"	TEXT NOT NULL,
	"apellido"	TEXT NOT NULL,
	"documento"	NUMERIC NOT NULL UNIQUE,
	"fec_nacimiento"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "Materias" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nombre"	TEXT NOT NULL,
	"anio_curricular"	INTEGER NOT NULL,
	"fec_implementacion"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
INSERT INTO "Alumnos" VALUES (1,'Mart­a','Gonzalez',36000001,'10 de marzo de 1992');
INSERT INTO "Alumnos" VALUES (2,'Carlos','Perez',36546141,'5 de abril de 1990');
INSERT INTO "Alumnos" VALUES (3,'Ana','Gonzalez',35841231,'10 de marzo de 1989');
INSERT INTO "Alumnos" VALUES (4,'Juan','Riquelme',36674301,'10 de marzo de 1991');
INSERT INTO "Alumnos" VALUES (5,'Lionel','Messi',34710035,'10 de marzo de 1985');
INSERT INTO "Alumnos" VALUES (6,'Laura','Rodriguez',37201635,'10 de marzo de 1993');
INSERT INTO "Alumnos" VALUES (7,'Pedro','Pascal',36006401,'10 de marzo de 1993');
INSERT INTO "Alumnos" VALUES (8,'Diego','Armando',38000133,'10 de marzo de 1995');
INSERT INTO "Alumnos" VALUES (9,'Valentina','Luna',35216711,'10 de marzo de 1990');
INSERT INTO "Alumnos" VALUES (10,'Sofia','Sanchez',36000981,'10 de marzo de 1991');
INSERT INTO "Maestros" VALUES (1,'German','Jimenes',35465021,'10 de marzo de 1970');
INSERT INTO "Maestros" VALUES (2,'Jorge','Aimar',4179745,'5 de mayo de 1971');
INSERT INTO "Maestros" VALUES (3,'Marcos','Lopez',325497,'10 de agosto de 1971');
INSERT INTO "Maestros" VALUES (4,'Juan','Riquelme',36674301,'14 de septiembre de 1972');
INSERT INTO "Maestros" VALUES (5,'Lionel','Messi',34710035,'15 de junio de 1975');
INSERT INTO "Maestros" VALUES (6,'Laura','Rodriguez',37201635,'12 de junio de 1963');
INSERT INTO "Maestros" VALUES (7,'Pedro','Pascal',36006401,'05 de marzo de 1968');
INSERT INTO "Maestros" VALUES (8,'Diego','Armando',38000133,'09 de junio de 1973');
INSERT INTO "Maestros" VALUES (9,'Valentina','Luna',35216711,'20 de septiembre de 1970');
INSERT INTO "Maestros" VALUES (10,'Sofia','Sanchez',36000981,'30 de octubre de 1969');
INSERT INTO "Materias" VALUES (1,'Matematicas',1,'20/04/2000');
INSERT INTO "Materias" VALUES (2,'Lengua',1,'20/04/2000');
INSERT INTO "Materias" VALUES (3,'Biologia',1,'20/04/2000');
INSERT INTO "Materias" VALUES (4,'Historia',1,'20/04/2000');
INSERT INTO "Materias" VALUES (5,'Fisica',1,'20/04/2000');
INSERT INTO "Materias" VALUES (6,'Quimica',1,'20/04/2000');
INSERT INTO "Materias" VALUES (7,'Informatica',1,'20/04/2000');
INSERT INTO "Materias" VALUES (8,'Arte',1,'20/04/2000');
INSERT INTO "Materias" VALUES (9,'Educacion fisica',1,'20/04/2000');
INSERT INTO "Materias" VALUES (10,'Tecnologia',1,'20/04/2000');
COMMIT;
