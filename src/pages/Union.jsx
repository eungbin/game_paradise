import React, {  } from 'react';

export default function Maple() {
  const createBlock = (level, type) => {
    if(type === 'zero') {
      if(level >= 250) {

      } else if(level >= 200) {

      } else if(level >= 180) {

      } else if(level >= 160) {

      } else if(level >= 130) {

      } else {
        return;
      }
    } else {
      if(level >= 250) {

      } else if(level >= 200) {

      } else if(level >= 140) {

      } else if(level >= 100) {

      } else if(level >= 60) {

      } else {
        return;
      }
    }
  }

  return (
    <>
    </>
  );
}