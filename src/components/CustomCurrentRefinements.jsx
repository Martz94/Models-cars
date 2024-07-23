import { useCurrentRefinements  } from "react-instantsearch-hooks-web"

function CustomCurrentRefinements(props) {
  const { items, refine } = useCurrentRefinements(props);

  const handleRefinementClick = (refinement) => {
    refine(refinement);
  }

  return (
    <>
      {
        items.map( (item) => (
          <ul key={item.attribute}>
            {
              item.refinements.map( (refinement) => (
                <li key={refinement.label}>
                  <button className="button_1 button-outlined" style={{marginTop: '8px', marginBottom: '8px'}} onClick={() => handleRefinementClick(refinement)}>
                    {refinement.label}
                    <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                  </button>
                </li>
              ) )
            }
          </ul>
        ) )
      }
    </>
  );
}

export default CustomCurrentRefinements