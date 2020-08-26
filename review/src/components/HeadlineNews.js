import React, { Component } from 'react'
import { connect } from 'react-redux';
class HeadlineNews extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  
  

  render() {
    return (
      <div>
        HeadlineNews
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps)(HeadlineNews)

