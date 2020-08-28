import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { getCustomNews } from '../utils/utilNews';
import NewsList from './NewsList';

class CustomNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listCustomNews: []
    }
  }

  UNSAFE_componentWillMount(){
    if(this.props?.userPreference?.id){
      this.getNews(this.props.userPreference.id);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if(this.props && nextProps && !_.isEqual(nextProps.userPreference, this.props.userPreference)){
      this.getNews(nextProps.userPreference.id);
    }
  }

  getNews(id){
    getCustomNews(id).then((news)=>{
      this.setState({
        listCustomNews: news.articles
      })
    })
  }

  render() {
    const {listCustomNews} = this.state;
    return (
      <div>
        <NewsList listNews={listCustomNews}></NewsList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { userPreference } = state.reducerUserProfile;
  return {
    userPreference
  }
}
export default connect(mapStateToProps)(CustomNews)
