-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Jul-2020 às 15:16
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `desafio`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `linhas`
--

CREATE TABLE `linhas` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `linhas`
--

INSERT INTO `linhas` (`id`, `name`, `created_at`, `updated_at`) VALUES
(7, 'Linha da Liberdade', '2020-07-18 21:01:56', '2020-07-18 21:01:56'),
(8, 'Linha da Mooca', '2020-07-18 21:02:41', '2020-07-18 21:02:41');

-- --------------------------------------------------------

--
-- Estrutura da tabela `paradas`
--

CREATE TABLE `paradas` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `paradas`
--

INSERT INTO `paradas` (`id`, `name`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(11, 'Parada da Caixa Econômica', -23.564537, -46.635955, '2020-07-18 21:07:50', '2020-07-18 21:07:50'),
(12, 'Parada Paróquia São Rafael', -23.560835, -46.6043655, '2020-07-18 21:10:32', '2020-07-18 21:10:32'),
(14, 'Parada Teste', -23.547993, 46.6487809, '2020-07-19 13:00:16', '2020-07-19 13:00:16');

-- --------------------------------------------------------

--
-- Estrutura da tabela `parada_linha`
--

CREATE TABLE `parada_linha` (
  `id` int(11) NOT NULL,
  `linha_id` int(11) NOT NULL,
  `parada_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `parada_linha`
--

INSERT INTO `parada_linha` (`id`, `linha_id`, `parada_id`, `created_at`, `updated_at`) VALUES
(16, 7, 11, '2020-07-18 21:07:50', '2020-07-18 21:07:50'),
(17, 8, 12, '2020-07-18 21:10:32', '2020-07-18 21:10:32'),
(18, 7, 12, '2020-07-18 21:11:11', '2020-07-18 21:11:11'),
(22, 8, 14, '2020-07-19 13:00:16', '2020-07-19 13:00:16');

-- --------------------------------------------------------

--
-- Estrutura da tabela `posicaoveiculos`
--

CREATE TABLE `posicaoveiculos` (
  `id` int(11) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `veiculo_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `posicaoveiculos`
--

INSERT INTO `posicaoveiculos` (`id`, `latitude`, `longitude`, `veiculo_id`, `created_at`, `updated_at`) VALUES
(4, -23.5581576, -46.600115, 6, '2020-07-18 23:09:41', '2020-07-18 23:09:41'),
(5, -23.5606737, -46.632496, 8, '2020-07-18 23:10:40', '2020-07-18 23:10:40');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200708231856-parada.js'),
('20200708232852-linha.js'),
('20200708234727-parada_linha.js'),
('20200711182002-veiculo.js'),
('20200712010115-posicao.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `veiculos`
--

CREATE TABLE `veiculos` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `linha_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `veiculos`
--

INSERT INTO `veiculos` (`id`, `name`, `modelo`, `linha_id`, `created_at`, `updated_at`) VALUES
(6, 'Ônibus', 'Clássico ', 7, '2020-07-18 21:17:40', '2020-07-18 21:17:40'),
(8, 'Ônibus 2', 'Clássico ', 8, '2020-07-18 21:18:35', '2020-07-18 21:18:35');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `linhas`
--
ALTER TABLE `linhas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `paradas`
--
ALTER TABLE `paradas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `parada_linha`
--
ALTER TABLE `parada_linha`
  ADD PRIMARY KEY (`id`),
  ADD KEY `linha_id` (`linha_id`),
  ADD KEY `parada_id` (`parada_id`);

--
-- Índices para tabela `posicaoveiculos`
--
ALTER TABLE `posicaoveiculos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `veiculo_id` (`veiculo_id`);

--
-- Índices para tabela `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Índices para tabela `veiculos`
--
ALTER TABLE `veiculos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `linha_id` (`linha_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `linhas`
--
ALTER TABLE `linhas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `paradas`
--
ALTER TABLE `paradas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `parada_linha`
--
ALTER TABLE `parada_linha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `posicaoveiculos`
--
ALTER TABLE `posicaoveiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `veiculos`
--
ALTER TABLE `veiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `parada_linha`
--
ALTER TABLE `parada_linha`
  ADD CONSTRAINT `parada_linha_ibfk_1` FOREIGN KEY (`linha_id`) REFERENCES `linhas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `parada_linha_ibfk_2` FOREIGN KEY (`parada_id`) REFERENCES `paradas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `posicaoveiculos`
--
ALTER TABLE `posicaoveiculos`
  ADD CONSTRAINT `posicaoveiculos_ibfk_1` FOREIGN KEY (`veiculo_id`) REFERENCES `veiculos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `veiculos`
--
ALTER TABLE `veiculos`
  ADD CONSTRAINT `veiculos_ibfk_1` FOREIGN KEY (`linha_id`) REFERENCES `linhas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
