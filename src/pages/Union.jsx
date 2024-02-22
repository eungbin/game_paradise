import React, {  } from 'react';
import data from '../data/union.json';
import code from '../data/code.json';
import './css/Union.css';

export default function Maple() {

  const createBlock = (level, type) => {

  }

  return (
    <section className='union-main-container'>
      <div className='container-input outer font-size-2'>공격대원 입력</div>
      <div className='container-board outer font-size-2'>유니온 배치도</div>
      <div className='container-raider-effect outer font-size-2'>공격대원 효과</div>
      <div className='container-occupation-effect outer font-size-2'>점령 효과</div>
    </section>
  );
}