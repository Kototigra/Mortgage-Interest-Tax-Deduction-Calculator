import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

export default function Calc({taxDeduction}) {
  return (
    <div>
      {taxDeduction.map((el, index) =><Checkbox sum={String(el).replace(/ /g,"").replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')} key={index} year={index + 1}/>)}
    </div>
    )
}

