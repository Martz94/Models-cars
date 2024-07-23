import { useState } from "react"

function HideParagraph({title, p}) {
    const [isVisible, setVisible] = useState(false);
  
    function hideVisibility() {
      setVisible(!isVisible);
    }
  
    const paragraphStyle = {
      display: isVisible ? 'block' : 'none'
    };
  
    return (
        <div className="questions-answer">
        <p className="question-arrow">{title}
            <button className="questions_arrow-over" onClick={hideVisibility}>
              +/-          
            </button>
        </p>
        <div className="questions_show" style={paragraphStyle}>{p}.</div>
    </div>
    );
  }
  
  export default HideParagraph;



  
  
  
  
  
  
  