import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './fnav.css';

const FNAV = () => {
  return (
    <div className="fnav-container">
      {/* Fixed Navbar (fnav) */}
      <div className="frstnav">
        <div className="ft">
          <Image width={36} height={36} src="/ft.png" alt="ft-photo" />
        </div>
        <ul className="fnav-links">
          <li>
            <Link href="/seccompo/map">Find a Store</Link>
          </li>
          <li>|</li>
          <Link href="/fourcompo/help">
            <li>Help</li>
          </Link>
          <li>|</li>
          <li>
            <Link href="/fourcompo/joinus">Join Us</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/seccompo/login">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FNAV;
