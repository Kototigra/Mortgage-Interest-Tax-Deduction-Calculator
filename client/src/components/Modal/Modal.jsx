import React, { useState } from 'react';
import Calc from '../Calc/Calc';

export default function Modal({active, setActive}) {

  const [value, setValue] = useState('')
  const [taxDeduction, setTaxDeduction] = useState([])
  const calc = () => {
    let num = Number(value.replace(/\s/g, ''))
    let result = []
    let yearTax = ((num * 12) * 0.13)
    let max = 260000
    while (max >= num) {
      max -= yearTax
      result.push(yearTax)
    }
    result.push(max)
    setValue(value + ' ₽')    
    return setTaxDeduction(result)
  }

  return (
  <div className={active ? "modal active" : "modal"}>
    <div className={active ? "modal__content active" : "modal__content"} onClick={(event) => event.stopPropagation()}>      
    <button onClick={() => setActive(false)} className="modal__close-button">X</button>
        <h1>Налоговый вычет</h1>
        <div className="modal__formWrapper">
            <p className="modal__text">Используйте налоговый вычет чтобы погасить ипотеку досрочно.</p> 
            <p className="modal__text">Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>          
          <div className="modal__salary">
            <p>Ваша зарплата в месяц</p>        
            <input placeholder="Введите данные" value={value} onChange={e => setValue(e.target.value.replace(/ /g,"").replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '))}></input>
            <br/>
            <button type="button" onClick={calc}>Рассчитать</button>
          </div>
          <div className="modal__checkboxes">
            <Calc taxDeduction={taxDeduction}/>
          </div>
          <div className="modal__chooseButtons">
            <p>Что уменьшаем?</p>
            <button type="button">Платёж</button>
            <button button type="button">Срок</button>
          </div>
          <br/>
          <div className="modal__addBtn">
            <button>Добавить</button>
          </div>          
        </div>
    </div>
  </div>)
}

