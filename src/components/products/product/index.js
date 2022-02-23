import React, { useEffect, useState } from 'react'
import SectionProduct from './SectionProduct'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";

import { getDatabase, ref, child, get } from 'firebase/database'
import SectionProductDetail from './SectionProductDetail'

const Index = () => {
  let navigate = useNavigate()
  let { productName } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    get(child(ref(getDatabase()), `programs/${productName}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.val())
      } else {
        navigate("/produits")
      }
    }).catch((error) => {
      console.error(error);
      navigate("/produits")
    });
  }, [productName, navigate])

  return (
    <div className="product container-fluid">
      <div className="container">
        <SectionProduct product={product} />
      </div>
      <SectionProductDetail />
    </div>
  )
}

export default Index
