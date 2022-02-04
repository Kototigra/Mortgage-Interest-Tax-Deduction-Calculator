import React, { useState } from 'react';
import Calc from '../Calc/Calc';

export default function Modal({active, setActive}) {

  const [value, setValue] = useState('')
  const [taxDeduction, setTaxDeduction] = useState([])
  const [error, setError] = useState(false)

  const calc = () => {
    if (value) {    
      setError(false)  
      let num = Number(value.replace(/\s/g, ''))
      let result = []
      let yearTax = ((num * 12) * 0.13)
      let max = 260000
      while (max >= num) {
        max -= yearTax
        result.push(yearTax)
      }
      result.push(max)
      setValue(value + ' \u20BD')    
      return setTaxDeduction(result)
    } else {
      setError(true)
    }
  }

  const handleClose = () => {
    setActive(false)
    setValue('')
    setTaxDeduction([])
  }

  const handleChange = (e) => {
    setError(false)
    setValue(e.target.value.replace(/ /g,"").replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '))
  }

  return (
  <div className={active ? "modal active" : "modal"}>
    <div className={active ? "modal__content active" : "modal__content"}>      
    <button onClick={handleClose} className="modal__close-button">x</button>
        <h1>Налоговый вычет</h1>
        <div className="modal__formWrapper">
            <p className="modal__text">Используйте налоговый вычет чтобы погасить ипотеку досрочно.</p> 
            <p className="modal__text">Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>          
          <div className="modal__salary">
            <p className="salary_text">Ваша зарплата в месяц</p>        
            <input className={error ? 'error' : ''} placeholder=" Введите данные" value={value} required="required" onChange={handleChange}></input>
            {error? <p className='error_text'>Поле обязательно для заполнения</p>: null}
            <br/>
            <button type="button" onClick={calc}>Рассчитать</button>
          </div>
          <div className="modal__checkboxes">
            <Calc taxDeduction={taxDeduction}/>
          </div>
          <div className="modal__chooseButtons">
            <div>              
            <p>Что уменьшаем?</p>
            </div>
            <div>              
            <button className="modal__paymentBtn" type="button"> Платёж </button>
            <button className="modal__termBtn" button type="button">Срок</button>
            </div>
          </div>
          <br/>
          <div className="modal__addBtn">
            <button>Добавить</button>
          </div>          
        </div>
    </div>
  </div>)
}

