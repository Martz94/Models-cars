import PropTypes from 'prop-types'
import { useState } from "react"

const Collapse = ({title, children}) => {
  const [ isOpen, setIsOpen ] = useState(true);
  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button className="collapse-header" onClick={() => { setIsOpen( !isOpen ) }}>
        {title}
        <span className="collapse-header-icon"></span>
      </button>
      <div className="collapse-body">
        {children}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default Collapse