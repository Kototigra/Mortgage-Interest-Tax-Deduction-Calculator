import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';

export default function Main() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="app">
      <div className="buttonWraper">
        <button type="button" className="calc-button" onClick={() => setModalActive(true)}>
          Налоговый вычет
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  )
}

