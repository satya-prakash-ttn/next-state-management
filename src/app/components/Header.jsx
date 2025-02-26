import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
       
            <header>
                <nav className="container">
                    <Link href="/">Home</Link>
           
                    <Link href="/products">products</Link>
                    <Link href="/quotes">Quotes</Link>
                    
                </nav>
            </header>
       
    );
}

export default Header;
