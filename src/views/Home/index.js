import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import { FiShoppingCart, FiSearch } from 'react-icons/fi'
import { ProductList } from './styles'

//
// ─── UTILS AND SERVICES ─────────────────────────────────────────────────────────
//
import api from '../../services/api'
import { formatPrice } from '../../utils/format'

//
// ─── REDUX ACTIONS ──────────────────────────────────────────────────────────────
//
import * as cartActions from '../../store/modules/cart/actions'

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function Home({ addToCartRequest }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products')

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))

      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <div className="image_container">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
          </div>
          <div className="product_details">
            <Link to={`/product/${product.id}`}>
              <h4>{product.title}</h4>
            </Link>
            <div className="category"> {product.category}</div>
            <div className="price">
              {product.priceFormatted}
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => addToCartRequest(product.id)}
                >
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ProductList>
  )
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
}

const bindDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch)

export default connect(null, bindDispatchToProps)(Home)
