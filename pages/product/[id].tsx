import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const id = query && query.id

  const [product, setProduct] = useState({ name: '' })

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setProduct(json)
      })
      .catch(console.log)
  }, [id])

  return (
    <section>
      <h1>{product?.name}</h1>
      {/* <p>{product?.attributes?.description}</p>
      <img src={product?.image}></img> */}
    </section>
  )
}

export default ProductPage
