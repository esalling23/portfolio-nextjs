'use client'
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer'

const Layout = ({ children }) => {
	return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex justify-center flex-grow">
        {children}
      </main>
      <Footer />
    </div>
	);
};

Layout.propTypes = {
	children: PropTypes.any,
};

export default Layout;
