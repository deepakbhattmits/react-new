/** @format */

import React from 'react';

const SelectBar = props => {
  // console.log(`NEW SELECT BAR: ${props.getOption}`);
  return (
    <div>
      <select
        className='ui dropdown'
        onChange={props.getOption}
        value={props.selectedOption}
      >
        <option value=''> -- Select Choice -- </option>
        {/* { console.log(this.state.data) } */}
        {props.movies &&
          props.movies.map((el, i) => {
            // console.log(`test : ${ i }`);
            return (
              <option key={i} value={el['country']}>
                {el['country']}
              </option>
            );
          })}
      </select>
    </div>
  );
};
export default SelectBar;
