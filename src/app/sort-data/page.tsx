import React from 'react';

const SortDataPages = () => {
  return (
    <div className='text-center  my-5'>
      <select defaultValue="Pick a color" className="select">
  <option disabled={true}>Pick a color</option>
  <option>Crimson</option>
  <option>Amber</option>
  <option>Velvet</option>
 </select>
    </div>
  );
};

export default SortDataPages;