'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart } from 'react-icons/ci';
import { IoBagOutline } from 'react-icons/io5';
import './snav.css';

const SNAV = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="snav-main">
      {/* Left Section: Logo */}
      <div className="nike-img">
        <Link href="/">
          <Image
            width={36}
            height={36}
            src="/nike.png"
            alt="nike-img"
          />
        </Link>
      </div>

      {/* Middle Section: Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <Link href="/components/news"><li>New & Featured</li></Link>
        <Link href="/fourcompo/bag"><li>Men</li></Link>
        <Link href="/components/women"><li>Women</li></Link>
        <Link href="/thirdcompo/second"><li>Kids</li></Link>
        <Link href="/thirdcompo/third"><li>Sale</li></Link>
        <Link href="/thirdcompo/first"><li>SNKRS</li></Link>
      </ul>

      {/* Right Section: Search and Icons */}
      <div className="search">
        <input type="search" placeholder="Search" />
        <CiHeart size={20} />
        <Link href="/seccompo/first">
          <IoBagOutline size={20} />
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default SNAV;
