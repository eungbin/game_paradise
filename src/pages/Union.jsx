import React, { useState } from 'react';
import data from '../data/union.json';
import code from '../data/code.json';
import './css/Union.css';

/* For MUI's select */
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
/* **************** */

export default function Maple() {
  const [raiders, setRaiders] = useState([]); // Added Raiders
  const [selectedRaider, setSelectedRaider] = useState('');
  const createBlock = (level, type) => {

  }

  const addRaiders = () => {
    
  }
  
  const raiderChange = (e) => {
    setSelectedRaider(e.target.value);
  }

  return (
    <section className='union-main-container'>
      <div className='container-input outer font-size-2'>
        공격대원 입력
        <div className='inner-container-input'>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label" sx={{ color: 'white' }}>직업유형</InputLabel>
            <Select
              sx={{ border: '1px solid #FFFFFF80', color: 'white' }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selectedRaider}
              label="직업유형"
              onChange={raiderChange}
            >
              <MenuItem value="">
                <em>직업유형</em>
              </MenuItem>
              <MenuItem value={'Warrior'}>전사</MenuItem>
              <MenuItem value={'Wizard'}>마법사</MenuItem>
              <MenuItem value={'Archer'}>궁수/메이플M</MenuItem>
              <MenuItem value={'Thief'}>도적</MenuItem>
              <MenuItem value={'Pirate'}>해적</MenuItem>
              <MenuItem value={'Zenon'}>제논</MenuItem>
            </Select>
          </FormControl>
          <input className='input-level font-size-1' type='number' id='level' defaultValue={0} />
          <div className='btn-action-white font-size-1' onClick={addRaiders}>추가</div>
        </div>
      </div>
      <div className='container-board outer font-size-2'>유니온 배치도</div>
      <div className='container-raider-effect outer font-size-2'>공격대원 효과</div>
      <div className='container-occupation-effect outer font-size-2'>점령 효과</div>
    </section>
  );
}