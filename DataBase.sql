CREATE TABLE `Użytkownicy` (
  `IdUzytkownika` PK autoincrment Int,
  `IdKursu` FK Int
);

CREATE TABLE `Kursy` (
  `IdKursu` PK autoincrement Int,
  `Nazwa` varchar(50)
);

CREATE TABLE `Transakcje` (
  `IdTransakcji` PK autoIncrement Int,
  `IdKursu` FK Int,
  `Kwota` Int,
  `IdUzytkownika` FK Int,
  FOREIGN KEY (`IdKursu`)
      REFERENCES `Kursy`(`IdKursu`),
  FOREIGN KEY (`IdUzytkownika`)
      REFERENCES `Użytkownicy`(`IdUzytkownika`)
);
