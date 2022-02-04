import React from 'react';

export default function Checkbox({sum, year}) {
  return (
  <div>
    <label>
        <input type="checkbox"/>
        {sum} рублей <mark className="module__checkbox-mark">
        {year === 1 ? 'в '+ year + '-ый': year === 2 ? 'во '+ year + '-ой' : year === 3 ? 'в ' + year + '-ий' : 'в ' + year + '-ый'} год</mark>
    </label>
  </div>
  );
}
