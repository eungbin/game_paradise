import React, { useState } from 'react';
import './css/Team.css';

export default function Team() {
  const firstTeamId = ['first1', 'first2', 'first3', 'first4'];
  const secondTeamId = ['second1', 'second2', 'second3', 'second4'];
  const [randomCount, setRandomCount] = useState(0);

  const createRandom = () => {
    const containerElem = document.getElementsByClassName('input-container')[2];
    const newInputElem = document.createElement('input');
    newInputElem.type = 'text'; newInputElem.className='team-input'; newInputElem.id = 'random'+randomCount.toString();
    setRandomCount(randomCount+1);
    containerElem.prepend(newInputElem);
  }

  return (
    <section className='team-main-container'>
      <section className='team-inner-container'>
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
            <div className='team-input' onClick={createRandom}>생성</div>
          </section>
        </div>
      </section>
      <section className='container-btn'>
        <div className='btn-action'>팀 짜기</div>
      </section>
    </section>
  );
}