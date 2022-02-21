-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Фев 21 2022 г., 09:48
-- Версия сервера: 10.4.17-MariaDB
-- Версия PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test3`
--

-- --------------------------------------------------------

--
-- Структура таблицы `age`
--

CREATE TABLE `age` (
  `id` int(11) NOT NULL,
  `type` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `age`
--

INSERT INTO `age` (`id`, `type`) VALUES
(1, 'child'),
(2, 'adult');

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `type` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `type`) VALUES
(1, 'home'),
(2, 'school'),
(3, 'city');

-- --------------------------------------------------------

--
-- Структура таблицы `gender`
--

CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `type` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `gender`
--

INSERT INTO `gender` (`id`, `type`) VALUES
(1, 'male'),
(2, 'female');

-- --------------------------------------------------------

--
-- Структура таблицы `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `age_id` int(11) DEFAULT NULL,
  `gender_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `profile`
--

INSERT INTO `profile` (`id`, `name`, `image`, `age_id`, `gender_id`) VALUES
(1, 'arnold', 'arnold.png', 1, 1),
(2, 'gerald', 'gerald.png', 1, 1),
(3, 'helga', 'helga.png', 1, 2),
(4, 'phill', 'phill.png', 2, 1),
(5, 'pucki', 'pucki.png', 2, 2),
(6, 'brainy', 'brainy.png', 1, 1),
(7, 'bob', 'bob.png', 2, 1),
(8, 'harold', 'harold.png', 1, 1),
(9, 'suzi', 'suzi.png', 2, 2),
(10, 'miriam', 'miriam.png', 2, 2),
(11, 'sid', 'sid.png', 1, 1),
(12, 'phoebe', 'phoebe.png', 1, 2),
(13, 'simens', 'simens.png', 2, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `summary`
--

CREATE TABLE `summary` (
  `id` int(11) NOT NULL,
  `info` varchar(800) DEFAULT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `summary`
--

INSERT INTO `summary` (`id`, `info`, `profile_id`, `category_id`) VALUES
(1, '<p>Arnold Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a good deal of his school friends and classmates.</p><p>Arnold Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a good deal of his school friends and classmates.</p>', 1, 1),
(2, '<p>Gerald Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a good deal of his school </p><p>Gerald Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a good deal of his school </p>', 2, 2),
(3, '<p>Helga Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a good </p><p>Helga Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a good </p>', 3, 2),
(4, '<p>Phill Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a g</p><p>Phill Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a g</p>', 4, 1),
(5, '<p>Pucki Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p><p>Pucki Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p>', 5, 1),
(6, '<p>Brainy Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a </p><p>Brainy Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a </p>', 6, 2),
(7, '<p>Bob Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a/p><p>Bob Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a/p>', 7, 3),
(8, '<p>Harold Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a good deal of his school friends and classmates. His most notable physical quality is his head is sh</p><p>Harold Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a good deal of his school friends and classmates. His most notable physical quality is his head is sh</p>', 8, 2),
(9, '<p>Suzi Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p><p>Pucki Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p>', 9, 1),
(10, '<p>Miriam Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p><p>Pucki Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p>', 10, 3),
(11, '<p>Sid Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p><p>Pucki Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p>', 11, 2),
(12, '<p>Phoebe Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p><p>Pucki Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p>', 12, 2),
(13, '<p>Simens Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p><p>Pucki Even for a kid, Arnold is notably small in stature compared to most people his age, being shorter than a.</p>', 13, 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `age`
--
ALTER TABLE `age`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `summary`
--
ALTER TABLE `summary`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `age`
--
ALTER TABLE `age`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `gender`
--
ALTER TABLE `gender`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `summary`
--
ALTER TABLE `summary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
