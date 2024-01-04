import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './css/Team.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Team() {
  const firstTeamId = ['first1', 'first2', 'first3', 'first4'];
  const secondTeamId = ['second1', 'second2', 'second3', 'second4'];
  const [randomCount, setRandomCount] = useState(0);
  const [open, setOpen] = useState(false); // modal open/close state
  const [team_1, setTeam_1] = useState([]);
  const [team_2, setTeam_2] = useState([]);

  const handleClose = () => { setOpen(false); }
  const handleOpen = () => { setOpen(true); }

  /**
   * 랜덤 팀원 입력창 생성 함수
   */
  const createRandom = () => {
    const containerElem = document.getElementsByClassName('input-container')[2];
    const newInputElem = document.createElement('input');
    newInputElem.type = 'text'; newInputElem.className='team-input'; newInputElem.id = 'random'+randomCount.toString();
    setRandomCount(randomCount+1);
    containerElem.prepend(newInputElem);
  }

  /**
   * 팀 생성 함수
   */
  const createTeam = () => {
    let total = 10;
    const firstTeam = [];
    const secondTeam = [];

    for(let i=0; i<firstTeamId.length; i++) {
      const person = document.getElementById(firstTeamId[i]).value;
      if(!!person) {
        firstTeam.push(person);
        total--;
      }
    }
    for(let i=0; i<secondTeamId.length; i++) {
      const person = document.getElementById(secondTeamId[i]).value;
      if(!!person) {
        secondTeam.push(person);
        total--;
      }
    }

    const randomElems = document.getElementsByClassName('input-container')[2].children;

    for(let i=0; i<randomElems.length-1; i++) {
      const person = randomElems[i].value;
      if(!!person) {
        if(firstTeam.length === 5) { secondTeam.push(person); total--; continue; }
        if(secondTeam.length === 5) { firstTeam.push(person); total--; continue; }
        if(firstTeam.length === 5 && secondTeam.length === 5) { console.log("인원이 10명보다 많습니다!"); return; }

        let randomNumber = Math.floor(Math.random()*2);
        randomNumber === 0 ? firstTeam.push(person) : secondTeam.push(person);
        total--;
      }
    }

    if(total > 0) { console.log('인원이 10명보다 적습니다!'); return; }
    if(total < 0) { console.log('인원이 10명보다 많습니다!'); return; }

    setTeam_1([...firstTeam]);
    setTeam_2([...secondTeam]);
    handleOpen();
  }

  return (
    <section className='team-main-container'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {team_1}
        </Box>
      </Modal>
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
        <div className='btn-action' onClick={createTeam}>팀 짜기</div>
      </section>
    </section>
  );
}