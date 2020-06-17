import React from 'react'

const WithClass = props => (
  <div className={props.classes}>
    {props.children}
  </div>
)

// Sends styles as a function, first parameter is the JSX to be wrapped 
// and second component the class to be applied on it.
// const withClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// };
//
// export default withClass(App, classes.App);

export default WithClass;