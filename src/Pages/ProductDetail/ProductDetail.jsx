import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios  from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'

function ProductDetail() {
  const {productId} = useParams()
  const [product, setproduct] = useState({})
  useEffect(() => {
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data)

    
    }).catch((err)=>{
      console.log(err)
    })

  }, [])
  
  return (
    <Layout>
      <ProductCard product={product}/>
    </Layout>
  );
}

export default ProductDetail
