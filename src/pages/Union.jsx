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

export default function Union() {
  const [raiders, setRaiders] = useState([{ type: '전사', level: 140 }]); // Added Raiders
  const [selectedRaider, setSelectedRaider] = useState('');
  const [tableBlock, setTableBlock] = useState([
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  ]);
  // 2진수 0000(left, top, right, bottom)
  const [tableBorder, setTableBorder] = useState([
    [14, 13, 4, 4, 4, 4, 4, 4, 4, 4, 6, 12, 4, 4, 4, 4, 4, 4, 4, 4, 7, 14],
    [8, 6, 9, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 0, 0, 0, 3, 12, 2],
    [8, 0, 6, 9, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 0, 0, 3, 12, 0, 2],
    [8, 0, 0, 6, 9, 0, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 0, 3, 12, 0, 0, 2],
    [8, 0, 0, 0, 6, 9, 1, 1, 1, 1, 3, 9, 1, 1, 1, 1, 3, 12, 0, 0, 0, 2],
    [8, 0, 0, 0, 2, 14, 13, 4, 4, 4, 6, 12, 4, 4, 4, 7, 6, 8, 0, 0, 0, 2],
    [8, 0, 0, 0, 2, 8, 6, 9, 0, 0, 2, 8, 0, 0, 3, 12, 2, 8, 0, 0, 0, 2],
    [8, 0, 0, 0, 2, 8, 0, 6, 9, 0, 2, 8, 0, 3, 12, 0, 2, 8, 0, 0, 0, 2],
    [8, 0, 0, 0, 2, 8, 0, 0, 6, 9, 2, 8, 3, 12, 0, 0, 2, 8, 0, 0, 0, 2],
    [9, 1, 1, 1, 3, 9, 1, 1, 1, 7, 11, 11, 13, 1, 1, 1, 3, 9, 1, 1, 1, 3],
    [12, 4, 4, 4, 6, 12, 4, 4, 4, 7, 14, 14, 13, 4, 4, 4, 6, 12, 4, 4, 4, 6],
    [8, 0, 0, 0, 2, 8, 0, 0, 3, 12, 2, 8, 6, 9, 0, 0, 2, 8, 0, 0, 0, 2],
    [8, 0, 0, 0, 2, 8, 0, 3, 12, 0, 2, 8, 0, 6, 9, 0, 2, 8, 0, 0, 0, 2],
    [8, 0, 0, 0, 2, 8, 3, 12, 0, 0, 2, 8, 0, 0, 6, 9, 2, 8, 0, 0, 0, 2],
    [8, 0, 0, 0, 2, 11, 13, 1, 1, 1, 3, 9, 1, 1, 1, 7, 11, 8, 0, 0, 0, 2],
    [8, 0, 0, 0, 3, 12, 4, 4, 4, 4, 6, 12, 4, 4, 4, 4, 6, 9, 0, 0, 0, 2],
    [8, 0, 0, 3, 12, 0, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 0, 6, 9, 0, 0, 2],
    [8, 0, 3, 12, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 0, 0, 6, 9, 0, 2],
    [8, 3, 12, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 0, 0, 0, 6, 9, 2],
    [11, 13, 1, 1, 1, 1, 1, 1, 1, 1, 3, 9, 1, 1, 1, 1, 1, 1, 1, 1, 7, 11]
  ]);
  // 공격대원 블록 생성 함수
  const createBlock = (level, type) => {
    
  }
  // 배치도 테두리 적용 함수
  const createBoard = (binaryNum, style, key, clickFunc) => {
    const borderThick = '2px solid #FFFFFF';
    const borderNormal = '1px solid #FFFFFF80';

    if(binaryNum === 0) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderNormal,borderTop: borderNormal,borderRight: borderNormal,borderBottom: borderNormal}}></td>
    else if(binaryNum === 1) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderNormal,borderTop: borderNormal,borderRight: borderNormal,borderBottom: borderThick}}></td>
    else if(binaryNum === 2) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderNormal,borderTop: borderNormal,borderRight: borderThick,borderBottom: borderNormal}}></td>
    else if(binaryNum === 3) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderNormal,borderTop: borderNormal,borderRight: borderThick,borderBottom: borderThick}}></td>
    else if(binaryNum === 4) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderNormal,borderTop: borderThick,borderRight: borderNormal,borderBottom: borderNormal}}></td>
    else if(binaryNum === 5) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderNormal,borderTop: borderThick,borderRight: borderNormal,borderBottom: borderThick}}></td>
    else if(binaryNum === 6) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderNormal,borderTop: borderThick,borderRight: borderThick,borderBottom: borderNormal}}></td>
    else if(binaryNum === 7) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderNormal,borderTop: borderThick,borderRight: borderThick,borderBottom: borderThick}}></td>
    else if(binaryNum === 8) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderThick,borderTop: borderNormal,borderRight: borderNormal,borderBottom: borderNormal}}></td>
    else if(binaryNum === 9) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderThick,borderTop: borderNormal,borderRight: borderNormal,borderBottom: borderThick}}></td>
    else if(binaryNum === 10) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderThick,borderTop: borderNormal,borderRight: borderThick,borderBottom: borderNormal}}></td>
    else if(binaryNum === 11) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderThick,borderTop: borderNormal,borderRight: borderThick,borderBottom: borderThick}}></td>
    else if(binaryNum === 12) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderThick,borderTop: borderThick,borderRight: borderNormal,borderBottom: borderNormal}}></td>
    else if(binaryNum === 13) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderThick,borderTop: borderThick,borderRight: borderNormal,borderBottom: borderThick}}></td>
    else if(binaryNum === 14) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderThick,borderTop: borderThick,borderRight: borderThick,borderBottom: borderNormal}}></td>
    else if(binaryNum === 15) return <td key={key} onClick={clickFunc} className={style} style={{borderLeft: borderThick,borderTop: borderThick,borderRight: borderThick,borderBottom: borderThick}}></td>
  }
  /**
   * Add raider function (raiders state)
   * raider structure: { type: string, level: number }
   * 배열을 직접적으로 변화시키는 push, unshift 등 추천X
   * 새 배열을 반환하는 filter 등 사용 권장
   */
  const addRaider = () => {
    let level = parseInt(document.querySelector('#level').value);
    if(selectedRaider === '') { alert('직업 유형을 선택해주세요.'); return; }
    if(level < 60) { alert('레벨 60미만의 캐릭터는 유니온 공격대원으로 지정할 수 없습니다.'); return; }
    if(level < 130 && selectedRaider === '제로') { alert('제로의 경우 130미만의 캐릭터는 유니온 공격대원으로 지정할 수 없습니다.'); return; }
    setRaiders([
      ...raiders,
      { type: selectedRaider, level: level }
    ]);
  }
  /**
   * Remove raider function (raiders state)
   * 배열을 직접적으로 변화시키는 pop, shift, splice 등 추천X
   * 새 배열을 반환하는 filter, slice 사용 권장
   * @param {number} idx 
   */
  const removeRaider = (idx) => {
    setRaiders([...raiders].filter((v, index) => index !== idx));
  }
  
  /**
   * Input raider information's value change event function
   * @param {event} e 
   */
  const raiderChange = (e) => {
    setSelectedRaider(e.target.value);
  }

  const clickBoard = (e) => {
    e.target.className === 'selected' ? e.target.className = 'none-selected' : e.target.className = 'selected';
  }

  return (
    <section className='union-main-container'>
      <div className='container-input outer font-size-2'>
        공격대원({raiders.length}명)
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
              <MenuItem value={'전사'}>전사</MenuItem>
              <MenuItem value={'마법사'}>마법사</MenuItem>
              <MenuItem value={'궁수/메이플M'}>궁수/메이플M</MenuItem>
              <MenuItem value={'도적'}>도적</MenuItem>
              <MenuItem value={'해적'}>해적</MenuItem>
              <MenuItem value={'제논'}>제논</MenuItem>
              <MenuItem value={'제로'}>제로</MenuItem>
            </Select>
          </FormControl>
          <input className='input-level font-size-1' type='number' id='level' defaultValue={0} />
          <div className='btn-action-white font-size-1' onClick={addRaider}>추가</div>
        </div>
        <div className='container-raiders'>
          {raiders.map((v, idx) => (
            <div style={{display:'flex', gap:'0px 8px'}} key={idx}>
              <span className='font-size-1' style={{display:'flex', justifyContent:'left', marginLeft:'8px'}}>Lv. {v.level} ({v.type})</span>
              <div className='btn-action-white-small font-size-small' onClick={() => removeRaider(idx)}>제거</div>
            </div>
          ))}
        </div>
      </div>
      <div className='container-board outer font-size-2'>
        유니온 배치도
        <table className='table-board'>
          {tableBlock.map((v, idx) => (
            <tr key={idx}>
              {v.map((value, index) => (
                value ? createBoard(tableBorder[idx][index], 'selected', (index*10+1), clickBoard) : createBoard(tableBorder[idx][index], 'none-selected', (index*10+1), clickBoard)
              ))}
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
}