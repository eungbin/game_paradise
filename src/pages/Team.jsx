import React, {  } from 'react';
import './css/Team.css';

export default function Team() {
  const firstTeamId = ['first1', 'first2', 'first3', 'first4'];
  const secondTeamId = ['second1', 'second2', 'second3', 'second4'];

  return (
    <section className='team-main-container'>
      <div className='team-box first'>
        <span className='box-header'>1팀 고정</span>
        <section className='input-container'>
          {firstTeamId.map((v, idx) => (
            <input type='text' className='team-input' id={v} key={idx} />
          ))}
        </section>
      </div>
      <div className='team-box second'>
        <span className='box-header'>2팀 고정</span>
        <section className='input-container'>
          {secondTeamId.map((v, idx) => (
            <input type='text' className='team-input' id={v} key={idx} />
          ))}
        </section>
      </div>
      <div className='team-box random'>
        <span className='box-header'>랜덤</span>
        <section className='input-container'>
          <div className='team-input'>생성</div>
        </section>
      </div>
    </section>
  );
}