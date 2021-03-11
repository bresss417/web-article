-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2021 at 02:09 AM
-- Server version: 10.1.39-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_pyple`
--

-- --------------------------------------------------------

--
-- Table structure for table `camera`
--

CREATE TABLE `camera` (
  `camera_id` int(11) NOT NULL,
  `camera_name` varchar(150) NOT NULL,
  `price` char(11) NOT NULL,
  `images` varchar(300) NOT NULL,
  `detail` varchar(5000) NOT NULL,
  `color` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `camera`
--

INSERT INTO `camera` (`camera_id`, `camera_name`, `price`, `images`, `detail`, `color`) VALUES
(1, 'Canon', '5000', 'img_5f9d1c1f6f87b.jpg', 'รุ่นใหม่อย่างเป็นทางการกับ Canon EOS 6D Mark II ซึ่งเป็นกล้อง DSLR ที่ใช้เซ็นเซอร์ Full Frame ความละเอียด 26.2 ล้านพิกเซล โดยได้นำเอาเทคโนโลยี Dual Pixel AF มาใส่ไว้เพื่อการโฟกัสภาพที่รวดเร็ว รวมถึงใช้ระบบประมวลผล DIGIC 7 เพื่อการประมวลผลที่รวดเร็วและให้คุณภาพไฟล์ที่ดี\r\n              \r\n              \r\n              \r\n              ', 'black'),
(3, 'BODY CANON 70D', '10200', 'img_5fa014be41a18.PNG', 'ใช้งานปกติทุกระบบ สเปคดี โฟกัสไว พับจอได้ มีไวไฟ อุปกรณ์ - กล่อง บอดี้ ที่ชาร์จ สายคล้อง แบต\r\n              \r\n              ', 'black'),
(4, 'BODY OMD EM5 MARK2', '7990', 'img_5fa01510273c9.PNG', 'สภาพโดยรวมยังดี กล้องสเปคสูง\r\nการใช้งานปกติทุกระบบ\r\nโฟกัสไว พับจอได้ มีไวไฟในตัว\r\nอุปกรณ์\r\n- บอดี้ เคส ที่ชาร์จ สายคล้อง แบต\r\n              \r\n              ', ''),
(5, 'FUJI X-A2', '5900', 'img_5fa01576bffe5.PNG', 'สภาพโดยรวมยังสวย ใช้งานปกติทุกระบบ สกินโทนสวย เซลฟี่ดี มีไวไฟในตัว อุปกรณ์ - กล่อง บอดี้ เลนส์ ที่ชาร์จ สายคล้อง แบต\r\n              \r\n              ', 'pink'),
(6, 'CANON 650D', '7300', 'img_5fa015b340921.PNG', ' สภาพยังดี ยางไม่บวม\r\nใช้งานปกติทุกระบบ ชัตเตอร์ 1x,xxx\r\nโฟกัสไว สกินโทนสวย พับจอได้\r\nอุปกรณ์\r\n- บอดี้ เลนส์ ที่ชาร์จ สายคล้อง แบต\r\n              \r\n              ', 'black'),
(7, 'SONY A5100', '6800', 'img_5fa015e3151b9.PNG', 'ใช้งานปกติทุกระบบ\r\nโฟกัสไว พับจอได้ มีไวไฟในตัว\r\nอุปกรณ์\r\n- บอดี้ เลนส์ ที่ชาร์จ สายคล้อง แบต\r\n              ', ''),
(8, 'INSTAX MINI KITTY', '1500', 'img_5fa0160f6e839.PNG', 'กล้องโพราลอยด์\r\nสภาพสินค้าตามรูป\r\nใช้งานปกติ\r\nอุปกรณ์ มีแต่ตัวกล้อง\r\n              \r\n              ', ''),
(9, 'FUJI X-A5', '8500', 'img_5fa0163d5a6c7.PNG', 'ใช้งานปกติทุกระบบ\r\nสกินโทนสวย พับจอได้ มีไวไฟในตัว\r\nอุปกรณ์\r\n- กล่อง บอดี้ เลนส์ ที่ชาร์จ สายคล้อง แบต', ''),
(10, 'CANON M100', '7200', 'img_5fa0168f0e07f.PNG', 'การใช้งานปกติทุกระบบ\r\nสกินโทนสวย พับจอได้ มีไวไฟในตัว\r\nอุปกรณ์\r\n- บอดี้ เลนส์ ที่ชาร์จ สายคล้อง แบต', ''),
(11, 'LUMIX GF10', '7990', 'img_5fa017057ea80.PNG', 'สภาพมีริ้วรอยตามขอบ\r\nไม่มีตำหนิหนัก ใช้งานเต็มระบบ\r\nโฟกัสไว พับจอได้ มีไวไฟในตัว\r\nอุปกรณ์\r\n- บอดี้ เลนส์ ที่ชาร์จ สายคล้อง แบต', ''),
(12, 'OLYMPUS EPL8', '6500', 'img_5fa017373f992.PNG', 'จอมีรอย การใช้งานปกติทุกระบบ\r\nโฟกัสไว ภาพคม พับจอได้ มีไวไฟ\r\nอุปกรณ์\r\n- กล่อง บอดี้ เลนส์ ที่ชาร์จ สายคล้อง แบต', '');

-- --------------------------------------------------------

--
-- Table structure for table `health_articles`
--

CREATE TABLE `health_articles` (
  `articles_id` int(11) NOT NULL,
  `text_subject` text NOT NULL,
  `text_contents` text NOT NULL,
  `content_type` varchar(100) NOT NULL,
  `dete_time` date NOT NULL,
  `image_article` varchar(300) NOT NULL,
  `id_member_doctor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `health_articles`
--

INSERT INTO `health_articles` (`articles_id`, `text_subject`, `text_contents`, `content_type`, `dete_time`, `image_article`, `id_member_doctor`) VALUES
(15, 'แนะนำ การคุม อาหารการกิน (Diet)', '<p>foddd xxsxxxxx</p>', 'food', '2021-03-08', 'img_6045206c946e3.png', 6),
(17, 'บทความ บริหารการดูแลสุขภาพ', '1. เลือกทานอาหารที่ดีต่อสุขภาพ\n2. ออกกำลังกาย\n3. ดื่มน้ำให้เยอะ', 'health', '2021-03-09', 'img_60466310c8474.jpg', 6);

-- --------------------------------------------------------

--
-- Table structure for table `like_article`
--

CREATE TABLE `like_article` (
  `like_id` int(11) NOT NULL,
  `member_id_user` int(11) NOT NULL,
  `id_articles` int(11) NOT NULL,
  `like_values` int(11) NOT NULL,
  `dislike_vlaue` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `logkey_doctor`
--

CREATE TABLE `logkey_doctor` (
  `doctor_id` int(11) NOT NULL,
  `user_name` varchar(150) NOT NULL,
  `passkey` varchar(100) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `status` int(11) NOT NULL,
  `sex` varchar(33) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `logkey_doctor`
--

INSERT INTO `logkey_doctor` (`doctor_id`, `user_name`, `passkey`, `fullname`, `status`, `sex`) VALUES
(3, 'Senku@doctorStorn.com', 'senku123', 'Eyjikami Senku', 2, 'man'),
(5, 'korking@sty.org', '123horking', 'stywent horking', 2, 'man'),
(6, 'T_lows@warter.com', 'lows123', 'startup iphone stevejobs', 2, 'man'),
(7, 'sakura@ninja.org', 'sakura123', 'Haruno Sakura', 2, 'woman');

-- --------------------------------------------------------

--
-- Table structure for table `logkey_user`
--

CREATE TABLE `logkey_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `passkey` varchar(100) NOT NULL,
  `img_profile` varchar(400) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `status` int(11) NOT NULL,
  `sex` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `logkey_user`
--

INSERT INTO `logkey_user` (`user_id`, `user_name`, `passkey`, `img_profile`, `fullname`, `status`, `sex`) VALUES
(6, 'hisoka@morrow.org', '123qwe', 'no', 'hisoka marrow', 1, 'man'),
(14, 'Korn@frick.com', '123korn', 'no', 'korn frick', 1, 'man'),
(15, 'Bisket@kuker.org', '123kuker', 'no', 'Bisket Kuker', 1, 'woman'),
(16, 'Kurorow@lusifer.org', 'kurorow123', 'no', 'Curorow Lusifer', 1, 'man');

-- --------------------------------------------------------

--
-- Table structure for table `profile_doctor`
--

CREATE TABLE `profile_doctor` (
  `profile_id` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `position` varchar(120) NOT NULL,
  `address` varchar(200) NOT NULL,
  `doctor_profile` varchar(300) NOT NULL,
  `work_place` varchar(200) NOT NULL,
  `id_logkey` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profile_doctor`
--

INSERT INTO `profile_doctor` (`profile_id`, `age`, `position`, `address`, `doctor_profile`, `work_place`, `id_logkey`) VALUES
(1, 22, 'Stone Age scientists', 'bangkok Thail Land', 'senku.jpg', 'Iijikami city', 3),
(3, 22, 'Surgeon', 'NortBlue Fliwants City', 'img_604911c6b5148.jpg', 'Fliwants Hospital', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `camera`
--
ALTER TABLE `camera`
  ADD PRIMARY KEY (`camera_id`);

--
-- Indexes for table `health_articles`
--
ALTER TABLE `health_articles`
  ADD PRIMARY KEY (`articles_id`);

--
-- Indexes for table `like_article`
--
ALTER TABLE `like_article`
  ADD PRIMARY KEY (`like_id`);

--
-- Indexes for table `logkey_doctor`
--
ALTER TABLE `logkey_doctor`
  ADD PRIMARY KEY (`doctor_id`);

--
-- Indexes for table `logkey_user`
--
ALTER TABLE `logkey_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `profile_doctor`
--
ALTER TABLE `profile_doctor`
  ADD PRIMARY KEY (`profile_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `camera`
--
ALTER TABLE `camera`
  MODIFY `camera_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `health_articles`
--
ALTER TABLE `health_articles`
  MODIFY `articles_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `like_article`
--
ALTER TABLE `like_article`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logkey_doctor`
--
ALTER TABLE `logkey_doctor`
  MODIFY `doctor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `logkey_user`
--
ALTER TABLE `logkey_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `profile_doctor`
--
ALTER TABLE `profile_doctor`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
