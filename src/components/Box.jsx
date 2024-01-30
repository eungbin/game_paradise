import './css/Box.css';
import React, {  } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Box(props) {
  const navigate = useNavigate();

  const goNextPage = () => {
    navigate('/' + props.url);
  }

  return (
    <div className={props.name} id='box' onClick={goNextPage}>
      {props.text}
    </div>
  );
}