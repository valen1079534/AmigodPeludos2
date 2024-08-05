-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-08-2024 a las 04:38:05
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `adoptame`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'Perro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dog_adop`
--

CREATE TABLE `dog_adop` (
  `id_dog` int(11) NOT NULL,
  `nombre_dog` varchar(100) NOT NULL,
  `edad_dog` varchar(100) NOT NULL,
  `imagen_dog` varchar(100) NOT NULL,
  `descripcion_dog` varchar(100) NOT NULL,
  `historia_dog` varchar(200) NOT NULL,
  `sexo_dog` enum('Macho','Hembra') NOT NULL,
  `estado_dog` enum('adoptado','noadoptado','EnProceso') DEFAULT NULL,
  `fk_categoria` int(11) NOT NULL,
  `fk_razas` int(11) NOT NULL,
  `fk_municipios` int(11) NOT NULL,
  `ubicacion_dog` varchar(100) NOT NULL,
  `fk_users` int(11) DEFAULT NULL,
  `esterilizado_dog` enum('Si','No') NOT NULL,
  `fk_vacunas` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `dog_adop`
--

INSERT INTO `dog_adop` (`id_dog`, `nombre_dog`, `edad_dog`, `imagen_dog`, `descripcion_dog`, `historia_dog`, `sexo_dog`, `estado_dog`, `fk_categoria`, `fk_razas`, `fk_municipios`, `ubicacion_dog`, `fk_users`, `esterilizado_dog`, `fk_vacunas`) VALUES
(167, 'Pegui', '3 años ', 'IMG-20240730-WA0008.jpg', 'Hola ssjbdndkfkfkfnKQISKRNDKDJDNDKJDBENDKDBDNDKKDJSJSJSJSsksKkzjdjdjxkdkdnxnxmdmxmldsksjksksbsjsbsjs', 'Hola SbxjzjznznxHAKAKALANANAISLQNQQKKQNQNQJQQKQKQKKQQNQNKQKSKSSKSNSB XBKXODBDOEBRIIEBERNnsnznjxjeiurjdjxjhxhzh bsnjsjdjdjkjzbzjbsjsjzjfjdkxbbz', 'Macho', 'adoptado', 1, 1, 1, 'Hola hsksjsjsjajaksksksksjsnsnsiibjskskqqqabajjakajaabajajajakaksksksksjsjqjqkakqkkqkqkqkqisisksjsjs', 11, 'Si', 'Hola s'),
(168, 'Luna', '2 años ', 'IMG-20240730-WA0008.jpg', 'Holaa ', 'Jaians', 'Hembra', 'adoptado', 1, 1, 1, 'Jajaks', 11, 'Si', 'Jakakak'),
(170, 'Fox', '2 años ', 'IMG-20240730-WA0004.jpg', 'Soy Fox', 'Estoy en yamboro', 'Macho', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna '),
(171, 'Vainilla', '2 años ', 'IMG-20240804-WA0014.jpg', 'Hola soy vainilla', 'Estoy en Yamboro ', 'Macho', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna '),
(172, 'Chillon', '2 años ', 'IMG-20240730-WA0000.jpg', 'Hola soy chillon', 'Estoy en Yamboro ', 'Macho', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna '),
(173, 'Chiribico', '6 años ', 'IMG-20240730-WA0001.jpg', 'Hola soy chibirico', 'Estoy en Yamboro ', 'Macho', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna'),
(174, 'Rufo', '5 años ', 'IMG-20240804-WA0016.jpg', 'Soy Rufo', 'Estoy en Yamboro ', 'Macho', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna '),
(175, 'Zuricata ', '2 años', 'IMG-20240804-WA0018.jpg', 'Hola soy Zuricata ', 'Estoy en Yamboro ', 'Hembra', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna '),
(176, 'Dante', '2 años ', 'IMG-20240730-WA0003.jpg', 'Hola soy Dante', 'Estoy en Yamboro ', 'Macho', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna '),
(177, 'Chispitas ', '3 años ', 'IMG-20240730-WA0002.jpg', 'Hola Soy Chispitas ', 'Estoy en Yamboro ', 'Hembra', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna '),
(178, 'Rifle ', '5 años ', 'IMG-20240804-WA0013.jpg', 'Hola soy Rifle', 'Estoy en Yamboro ', 'Macho', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna '),
(179, 'Máscara', '3 años ', 'IMG-20240730-WA0005.jpg', 'Hola soy Mascara ', 'Estoy en Yamboro ', 'Macho', 'noadoptado', 1, 1, 1, 'Yamboro ', 11, 'Si', 'Ninguna');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio_dog`
--

CREATE TABLE `municipio_dog` (
  `id_municipio` int(11) NOT NULL,
  `nombre_municipio` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `municipio_dog`
--

INSERT INTO `municipio_dog` (`id_municipio`, `nombre_municipio`) VALUES
(1, 'Pitalito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `razas_dog`
--

CREATE TABLE `razas_dog` (
  `id_razas` int(11) NOT NULL,
  `nombre_razas` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `razas_dog`
--

INSERT INTO `razas_dog` (`id_razas`, `nombre_razas`) VALUES
(1, 'Criollo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud_dog`
--

CREATE TABLE `solicitud_dog` (
  `id_solicitud` int(11) NOT NULL,
  `fk_users` int(11) DEFAULT NULL,
  `fk_dog_adop` int(11) DEFAULT NULL,
  `estado_solicitud` enum('solicitud','en adopcion') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `solicitud_dog`
--

INSERT INTO `solicitud_dog` (`id_solicitud`, `fk_users`, `fk_dog_adop`, `estado_solicitud`) VALUES
(142, 11, 167, 'en adopcion'),
(144, 11, 168, 'en adopcion'),
(145, 11, 167, 'en adopcion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_users` int(11) NOT NULL,
  `nombre_user` varchar(100) DEFAULT NULL,
  `cedula_user` varchar(100) NOT NULL,
  `telefono_user` varchar(13) DEFAULT NULL,
  `email_user` varchar(100) DEFAULT NULL,
  `password_user` varchar(50) NOT NULL,
  `rol_user` enum('administrador','adoptante') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_users`, `nombre_user`, `cedula_user`, `telefono_user`, `email_user`, `password_user`, `rol_user`) VALUES
(11, 'Admin ', '1937484', '738292', 'admin@gmail.com', '123', 'administrador'),
(12, 'Valentina', '989292', '383393939', 'vd@gmail.com', '123', 'adoptante'),
(36, 'Spfia', '34547', '3784979', 'sofi@gmail.com', 'Akakak', 'adoptante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacunas_dog`
--

CREATE TABLE `vacunas_dog` (
  `id_vacunas` int(11) NOT NULL,
  `nombre_vacunas` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vacunas_dog`
--

INSERT INTO `vacunas_dog` (`id_vacunas`, `nombre_vacunas`) VALUES
(1, 'Prueba');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `dog_adop`
--
ALTER TABLE `dog_adop`
  ADD PRIMARY KEY (`id_dog`),
  ADD KEY `realizar` (`fk_municipios`),
  ADD KEY `comer` (`fk_razas`),
  ADD KEY `actualizar` (`fk_categoria`),
  ADD KEY `ser` (`fk_users`);

--
-- Indices de la tabla `municipio_dog`
--
ALTER TABLE `municipio_dog`
  ADD PRIMARY KEY (`id_municipio`);

--
-- Indices de la tabla `razas_dog`
--
ALTER TABLE `razas_dog`
  ADD PRIMARY KEY (`id_razas`);

--
-- Indices de la tabla `solicitud_dog`
--
ALTER TABLE `solicitud_dog`
  ADD PRIMARY KEY (`id_solicitud`),
  ADD KEY `escribir` (`fk_users`),
  ADD KEY `recibir` (`fk_dog_adop`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_users`);

--
-- Indices de la tabla `vacunas_dog`
--
ALTER TABLE `vacunas_dog`
  ADD PRIMARY KEY (`id_vacunas`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `dog_adop`
--
ALTER TABLE `dog_adop`
  MODIFY `id_dog` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

--
-- AUTO_INCREMENT de la tabla `municipio_dog`
--
ALTER TABLE `municipio_dog`
  MODIFY `id_municipio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `razas_dog`
--
ALTER TABLE `razas_dog`
  MODIFY `id_razas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `solicitud_dog`
--
ALTER TABLE `solicitud_dog`
  MODIFY `id_solicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `vacunas_dog`
--
ALTER TABLE `vacunas_dog`
  MODIFY `id_vacunas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dog_adop`
--
ALTER TABLE `dog_adop`
  ADD CONSTRAINT `actualizar` FOREIGN KEY (`fk_categoria`) REFERENCES `categorias` (`id_categoria`),
  ADD CONSTRAINT `comer` FOREIGN KEY (`fk_razas`) REFERENCES `razas_dog` (`id_razas`),
  ADD CONSTRAINT `realizar` FOREIGN KEY (`fk_municipios`) REFERENCES `municipio_dog` (`id_municipio`),
  ADD CONSTRAINT `ser` FOREIGN KEY (`fk_users`) REFERENCES `usuarios` (`id_users`);

--
-- Filtros para la tabla `solicitud_dog`
--
ALTER TABLE `solicitud_dog`
  ADD CONSTRAINT `escribir` FOREIGN KEY (`fk_users`) REFERENCES `usuarios` (`id_users`),
  ADD CONSTRAINT `recibir` FOREIGN KEY (`fk_dog_adop`) REFERENCES `dog_adop` (`id_dog`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
