-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Nov 2019 pada 08.47
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
(171, 'a', 1),
(192, 'a', 1),
(198, 'a', 1),
(199, 'a', 1),
(200, 'a', 1),
(201, 'a', 1),
(203, 'a', 1),
(239, 'cek data ini saja', 1),
(240, 'cek data ini saja', 1),
(241, 'cek data ini saja', 1),
(242, 'cek data ini saja', 1),
(245, 'cek data ini saja', 1),
(246, 'cek data ini saja', 1),
(247, 'cek data ini saja', 1),
(252, 'a', 1),
(253, 'a', 1),
(254, 'a', 1);

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
(60, '33086652880003', 'Mohamad Eko Pasetyo', '0898-8909-9009'),
(62, '33086652880001', 'Serj Adam Incloudya Hope', '0898-8970-9087'),
(66, '33086652880007', 'kiki aja', '0898-8970-9007'),
(67, '33086652880078', 'Ascii B', '0897-6789-1122'),
(68, '33086652880071', 'Ascii C', '0897-6789-1125'),
(69, '33086652880013', 'Ascii D', '0897-6789-1222'),
(70, '33086652880014', 'rara', '0897-6789-9909'),
(71, '33086652880015', 'nara', '0897-6789-1123'),
(72, '33086652880016', 'nina', '0897-6789-1117'),
(73, '33086652880021', 'santi', '0897-6789-4444'),
(74, '33086652880111', 'ani aa', '0897-6789-4441'),
(75, '009637860001', 'Ascii 001', '0897-6787-3894');

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
(3, 'noname', 'noname', 'noname', 'mohamad@yahoo.com');

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
  MODIFY `feed_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=258;

--
-- AUTO_INCREMENT untuk tabel `karyawan`
--
ALTER TABLE `karyawan`
  MODIFY `id_karyawan` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
