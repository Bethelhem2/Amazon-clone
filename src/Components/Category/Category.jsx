import React from 'react'
import { categoryInfos } from "../Category/CategoryFullInfo"
import CategoryCard from '../Category/CategoryCard'
import classes from '../Category/category.module.css'


function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => {
       return <CategoryCard data = {infos}/>
      })}
     
    </section>
  );
}

export default Category
