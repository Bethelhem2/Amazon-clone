import React from 'react'
import { categoryInfos } from "../Category/CategoryFullInfo"
import CategoryCard from '../Category/CategoryCard'


function Category() {
  return (
    <section>
      {
      categoryInfos.map((infos) => {
        <CategoryCard data={infos} />
        
      })

      }
      <CategoryCard/>
    </section>
  )
}

export default Category
