-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Des 2019 pada 10.14
-- Versi server: 10.1.37-MariaDB
-- Versi PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactdb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `feed`
--

CREATE TABLE `feed` (
  `feed_id` int(11) NOT NULL,
  `feed` text,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `feed`
--

INSERT INTO `feed` (`feed_id`, `feed`, `user_id`) VALUES
(7, 'a', 3),
(8, 'aaaaaaaaaaaaaaaaaaa', 3),
(9, 'a', 3),
(291, 'dataFeed 2', 1),
(292, 'dataFeed 3', 1),
(293, 'dataFeed 4', 1),
(294, 'dataFeed 5', 1),
(295, 'dataFeed 6', 1),
(296, 'dataFeed 7', 1),
(297, 'dataFeed 8', 1),
(300, 'dataFeed 9', 1),
(301, 'dataFeed 10', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `karyawan`
--

CREATE TABLE `karyawan` (
  `id_karyawan` int(20) NOT NULL,
  `KTP` varchar(50) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `no_hp` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `karyawan`
--

INSERT INTO `karyawan` (`id_karyawan`, `KTP`, `nama`, `no_hp`) VALUES
(160, '009867111101', 'Mohamad Eko Pasetyo', '0897-6789-1111'),
(161, '009867111102', 'Serj Adam Incoudya Hope', '0897-6789-1111'),
(163, '009867111105', 'nara', '0897-6789-1111'),
(164, '009867111106', 'me prasetyo 1', '0897-6789-1111'),
(165, '009867111102', 'me prasetyo 2', '0897-6789-1111'),
(166, '009867111102', 'me prasetyo 3', '0897-6789-1111'),
(167, '009867111102', 'me prasetyo 4', '0897-6789-1111'),
(171, '009867111115', 'nara 1', '0897-6789-1111'),
(172, '009867111116', 'nara 2', '0897-6789-1111'),
(173, '009867111117', 'nara 3', '0897-6789-1111'),
(175, '009867111117', 'rara', '0897-6789-1111'),
(177, '009867111117', 'rara 1', '0897-6789-1111');

-- --------------------------------------------------------

--
-- Struktur dari tabel `select_kota`
--

CREATE TABLE `select_kota` (
  `id_kota` int(100) NOT NULL,
  `kota` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `select_kota`
--

INSERT INTO `select_kota` (`id_kota`, `kota`) VALUES
(1, 'Tangerang'),
(2, 'Jakarta Barat'),
(3, 'Jakarta Selatan'),
(4, 'Jakarta Utara'),
(5, 'Jakarta Timur'),
(6, 'Bekasi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(300) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `name`, `email`) VALUES
(1, 'eko', 'eko', 'eko', 'e@y.com'),
(2, 'eko', 'eko', 'eko', 'e@y.com'),
(3, 'noname', 'noname', 'noname', 'mohamad@yahoo.com'),
(5, 'rara', 'rara', 'rara', 'rr@ymail.com');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `feed`
--
ALTER TABLE `feed`
  ADD PRIMARY KEY (`feed_id`);

--
-- Indeks untuk tabel `karyawan`
--
ALTER TABLE `karyawan`
  ADD PRIMARY KEY (`id_karyawan`);

--
-- Indeks untuk tabel `select_kota`
--
ALTER TABLE `select_kota`
  ADD PRIMARY KEY (`id_kota`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `feed`
--
ALTER TABLE `feed`
  MODIFY `feed_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=302;

--
-- AUTO_INCREMENT untuk tabel `karyawan`
--
ALTER TABLE `karyawan`
  MODIFY `id_karyawan` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT untuk tabel `select_kota`
--
ALTER TABLE `select_kota`
  MODIFY `id_kota` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
