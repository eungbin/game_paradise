import React, {  } from 'react';
import Box from '../components/Box';
import './css/Main.css';

export default function Main() {

  return (
    <section className='main-container'>
      <Box name={'box-team'} url={'team'} text={'team'} />
      <Box name={'box-maple-union'} url={'union'} text={'union'} />
    </section>
  );
}