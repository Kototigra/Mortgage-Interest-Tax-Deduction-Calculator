import React from 'react';

export default function Checkbox({sum, year}) {
  return (
  <div className="modal__checkbox">
      <input className="checkbox" type="checkbox" id='checkbox'/>
      <label htmlFor='checkbox'>       
        {sum} рублей <mark className="module__checkbox-mark">
        {year === 2 ? ' во '+ year + '-ой' : 
        year === 3 ? ' в ' + year + '-ий' : 
        year === 6 ? ' в ' + year + '-ой' :
        year === 7 ? ' в ' + year + '-ой' :
        year === 8 ? ' в ' + year + '-ой' :
        ' в ' + year + '-ый'} год</mark>
    </label>
  </div>
  );
}
