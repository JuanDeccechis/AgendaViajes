-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2020 a las 15:43:27
-- Versión del servidor: 10.1.28-MariaDB
-- Versión de PHP: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agendaviaje`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alojamiento`
--

CREATE TABLE `alojamiento` (
  `id_plan` bigint(20) NOT NULL,
  `codigo_reserva` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `localidad` varchar(255) DEFAULT NULL,
  `numero_habitacion` varchar(255) DEFAULT NULL,
  `tipo_alojamiento` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alojamiento`
--

INSERT INTO `alojamiento` (`id_plan`, `codigo_reserva`, `direccion`, `localidad`, `numero_habitacion`, `tipo_alojamiento`) VALUES
(2, 'ASDFNK232', 'Menino 2334', 'Rio de Janeiro', '233', 'Hotel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plan`
--

CREATE TABLE `plan` (
  `id_plan` bigint(20) NOT NULL,
  `tipo_plan` varchar(255) DEFAULT NULL,
  `viaje_id_viaje` bigint(20) DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `plan`
--

INSERT INTO `plan` (`id_plan`, `tipo_plan`, `viaje_id_viaje`, `fecha_fin`, `fecha_inicio`) VALUES
(1, 'Viaje en Auto', 1, '2020-11-23 00:00:00', '2020-11-23 00:00:00'),
(2, 'Reserva de Hotel', 1, '2020-11-29 00:00:00', '2020-11-24 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transporte`
--

CREATE TABLE `transporte` (
  `ciudad_destino` varchar(255) DEFAULT NULL,
  `ciudad_origen` varchar(255) DEFAULT NULL,
  `nro_asiento` bigint(20) DEFAULT NULL,
  `nro_viaje` bigint(20) DEFAULT NULL,
  `tipo_transporte` varchar(255) DEFAULT NULL,
  `id_plan` bigint(20) NOT NULL,
  `terminal_llegada` varchar(255) DEFAULT NULL,
  `terminal_salida` varchar(255) DEFAULT NULL,
  `codigo_reserva` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `transporte`
--

INSERT INTO `transporte` (`ciudad_destino`, `ciudad_origen`, `nro_asiento`, `nro_viaje`, `tipo_transporte`, `id_plan`, `terminal_llegada`, `terminal_salida`, `codigo_reserva`) VALUES
('Buenos Aires', 'Tandil', NULL, NULL, 'Auto', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` bigint(20) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `nombre_usuario` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `admin` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `apellido`, `direccion`, `dni`, `email`, `nombre`, `nombre_usuario`, `password`, `admin`) VALUES
(1, 'zarrabeitia', 'algo', 22333222, 'mateo@gmail.com', 'mateo', 'mateoz', '$2a$10$XYxxAqlG.w3emMs7xjG1Q.1LuiJ7IzJRrP2NYHrLwSTsOVLdVxk72', b'1111111111111111111111111111111'),
(5, 'enemark', 'algo', 22333222, 'belen@gmail.com', 'belen', 'beluguita', '$2a$10$GZVMnEWI/5Y57tPbS2fOz.YY5KlFpVNkdgpK0cuohb3OPogXl1fqq', b'1111111111111111111111111111111');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viaje`
--

CREATE TABLE `viaje` (
  `id_viaje` bigint(20) NOT NULL,
  `ciudad_destino` varchar(255) DEFAULT NULL,
  `ciudad_origen` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `usuario_id_usuario` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `viaje`
--

INSERT INTO `viaje` (`id_viaje`, `ciudad_destino`, `ciudad_origen`, `descripcion`, `fecha_fin`, `fecha_inicio`, `nombre`, `usuario_id_usuario`) VALUES
(1, 'Brasil', 'Tandil', 'Vacaciones', '2020-11-23 00:00:00', '2020-11-27 00:00:00', 'Brasil 2020', 1),
(2, 'Buenos Aires', 'Tandil', 'Blbla', '2020-11-29 00:00:00', '2020-11-27 00:00:00', 'Congreso Grido ', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alojamiento`
--
ALTER TABLE `alojamiento`
  ADD PRIMARY KEY (`id_plan`);

--
-- Indices de la tabla `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`id_plan`),
  ADD KEY `FK2a2vteryr72q7c3pd4665elps` (`viaje_id_viaje`);

--
-- Indices de la tabla `transporte`
--
ALTER TABLE `transporte`
  ADD PRIMARY KEY (`id_plan`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `nombre_usuario` (`nombre_usuario`);

--
-- Indices de la tabla `viaje`
--
ALTER TABLE `viaje`
  ADD PRIMARY KEY (`id_viaje`),
  ADD KEY `FKn4mqc706hq4wj74hvx6y6g852` (`usuario_id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `plan`
--
ALTER TABLE `plan`
  MODIFY `id_plan` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `viaje`
--
ALTER TABLE `viaje`
  MODIFY `id_viaje` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alojamiento`
--
ALTER TABLE `alojamiento`
  ADD CONSTRAINT `FKrpf4i6l2hkqc3v3bpiuo1hhns` FOREIGN KEY (`id_plan`) REFERENCES `plan` (`id_plan`);

--
-- Filtros para la tabla `plan`
--
ALTER TABLE `plan`
  ADD CONSTRAINT `FK2a2vteryr72q7c3pd4665elps` FOREIGN KEY (`viaje_id_viaje`) REFERENCES `viaje` (`id_viaje`);

--
-- Filtros para la tabla `transporte`
--
ALTER TABLE `transporte`
  ADD CONSTRAINT `FKa8bm6f5ah62gtm82scdwunsaq` FOREIGN KEY (`id_plan`) REFERENCES `plan` (`id_plan`);

--
-- Filtros para la tabla `viaje`
--
ALTER TABLE `viaje`
  ADD CONSTRAINT `FKn4mqc706hq4wj74hvx6y6g852` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
