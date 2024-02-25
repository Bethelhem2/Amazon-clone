import React from 'react'


function CategoryCard(data) {
  return (
    <div>
      <a href="">
        <span>
          <h2>dssdsd{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
      
    </div>
  );
}

export default CategoryCard
