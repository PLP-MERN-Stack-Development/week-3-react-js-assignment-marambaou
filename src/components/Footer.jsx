import React from 'react';

const Footer = () => (
  <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-4 mt-8 text-center">
    <div className="mb-2">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</div>
    <div className="flex justify-center gap-4 text-sm">
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Terms of Service</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>
  </footer>
);

export default Footer; 