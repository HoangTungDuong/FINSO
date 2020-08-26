import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { getCustomNews } from '../utils/utilNews';

class CustomNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listCustomNews: []
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

  renderListNews = () => {
    const {listCustomNews} = this.state;
    if(!listCustomNews || listCustomNews.length === 0){
      return null;
    }
    return listCustomNews.map((item, index) => {
      return <div key={index}>{item.content}</div>
    })
  }

  render() {
    return (
      <div>
        {this.renderListNews()}
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
