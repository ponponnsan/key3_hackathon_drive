// app/account/page.tsx
import React, { useState } from 'react';
import Account from '../components/account/Account'; 
import Footer from '../Footer';

export default function AccountPage() {
  return (
    <div>
      <Account />
      <Footer />
    </div>
  );
}