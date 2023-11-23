import React, { useState } from 'react';
import SendToken from '../../components/sendtoken/SendToken'; 
import Footer from '../../Footer';

export default function SendPage() {
  return (
    <div>
      <SendToken />
      <Footer />
    </div>
  );
}