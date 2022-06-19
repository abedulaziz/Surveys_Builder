import React from 'react'

// const inputType = ({type, placeholder}) => {
//   return (
//     <div>
//       <input type={type} placeholder={placeholder} />
//     </div>
//   )
// }


const inputType = React.forwardRef((props, ref) => ( 
  <div>
    <input ref={ref} type={props.type} placeholder={props.placeholder} />
  </div>
));

export default inputType