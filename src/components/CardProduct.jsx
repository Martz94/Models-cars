import PropTypes from 'prop-types'
import CubeProduct from './CubeProduct'

const CardProduct = ({ hit }) => {
  return (
    <div className="card-product">
      <CubeProduct color={hit.color} />
      <p className="card-product-shipping-type">
        Free shipping
        {
          hit.free_shipping ?
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path id="Vector" d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
          :
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
        }
      </p>
      <h5>{hit.brand} - {hit.model}</h5>
      <p className="card-product-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt incidunt...</p>
      <p className="card-product-tag">Color: <span>{hit.color}</span></p>
      <p className="card-product-price">{hit.price} <span>USD</span></p>
    </div>
  )
}

CardProduct.propTypes = {
  hit: PropTypes.object.isRequired
}

export default CardProduct