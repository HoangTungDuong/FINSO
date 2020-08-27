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
      getCustomNews(this.props.userPreference.id).then((news)=>{
        this.setState({
          listCustomNews: news.articles
        })
      })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    const { userPreference } = this.props;
    if(!_.isEqual(nextProps.userPreference, userPreference)){
      getCustomNews(nextProps.userPreference.id).then((news)=>{
        this.setState({
          listCustomNews: news.articles
        })
      })
    }
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
