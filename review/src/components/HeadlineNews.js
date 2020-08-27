import React, { Component } from 'react'
import { connect } from 'react-redux';
import NewsList from './NewsList';
import { getTopHeadlineNews } from '../utils/utilNews';
class HeadlineNews extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      listHeadlineNews: []
    }
  }
  
  componentDidMount(){
    getTopHeadlineNews().then((news)=>{
      this.setState({
        listHeadlineNews: news.articles
      })
    })
  }

  render() {
    const { listHeadlineNews } = this.state;
    return (
      <div>
        <NewsList listNews={listHeadlineNews}></NewsList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps)(HeadlineNews)

