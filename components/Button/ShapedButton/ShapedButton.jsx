const ShapedButton = () => {
    return ( 
        <>
            {/* <div className="angle-button">Gift a Card</div> */}

            <div className="triangle"></div>
            <svg style={{visibility: 'hidden', position: 'absolute'}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="weird-shape">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="weird-shape" />
                        <feComposite in="SourceGraphic" in2="weird-shape" operator="atop"/>
                    </filter>
                </defs>
            </svg>
        </>
     );
}
 
export default ShapedButton;