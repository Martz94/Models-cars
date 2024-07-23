import { RefinementList } from "react-instantsearch-hooks-web"
import PropTypes from 'prop-types'

const transformItems = (items) => {
  return items.map((item) => ({
    ...item,
    label: <>
      <span className="itemMark">
        <svg fill="currentColor" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polygon fillRule="evenodd" points="9.707 14.293 19 5 20.414 6.414 9.707 17.121 4 11.414 5.414 10"/>
        </svg>  
      </span> {item.label}
    </>,
    count: ` (${item.count})`
  }));
};

const CustomRefinementList = ({attribute}) => {
  return (
    <RefinementList
      attribute={attribute}
      showMore={true}
      limit={5}
      transformItems={transformItems}
    />
  )
}

CustomRefinementList.propTypes = {
  attribute: PropTypes.string.isRequired,
}

export default CustomRefinementList