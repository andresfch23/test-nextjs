import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => {
        return response.json()
      })
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      <ul>
        {productList.map((product) => (
          <li>
            <Link href="/product/[id]">
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
