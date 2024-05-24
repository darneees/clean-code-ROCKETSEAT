// Código em inglês

import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ListProduct() {
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([])

  function searchProduct(search: string) {
    const filtered = productList.filter(product => product.title.includes(search))

    setFilteredProduct(filtered)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduct(e.target.value)} />

      {filteredProduct.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

