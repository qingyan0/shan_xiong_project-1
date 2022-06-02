import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
   constructor(props){
       super(props);
       this.state = {error:null, errorInfo: null};
   }

   componentDidCatch(error, errorInfo) {
       this.setState({
           error:error,
           errorInfo:errorInfo
       })
   }

  render() {
      if (this.state.errorInfo) {
          return  (
              <h2>Something went wrong. You website wiil be back in mins.</h2>
          )
      }
      return this.props.children;
  }
}




