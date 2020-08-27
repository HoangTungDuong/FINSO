import React, { Component } from 'react'
import imageDefault from './../assests/default-img.jpg';
import { hashHistory } from '../configureStore';
import { SELECT_NEWS } from '../actions/actionNews';
import { connect } from 'react-redux';
import NewsNotFound from './NewsNotFound';
class NewsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  onNewsClicked(item) {
    this.props.dispatch({
      type: SELECT_NEWS,
      payload: {
        selectedNews: item
      }
    })
    hashHistory.push("/read-news")
  }

  renderListNews = () => {
    const { listNews } = this.props;
    if (!listNews || !listNews.length) {
      return (<NewsNotFound></NewsNotFound>)
    }
    return listNews.map((item, index) => {
      const imgNew = item.urlToImage ? item.urlToImage : imageDefault
      return (
        <div key={index}>
          <div className="news-overview"  onClick={() => this.onNewsClicked(item)}>
            <img className="img-news" src={imgNew} alt="" />
            <div className="news-description">
              <b >{item.title}</b>
              {item.author && <small>By {item.author}</small>}
              <div>
                <small> {item.description} </small>
              </div>
            </div>
          </div>
          <hr />
        </div>

      )
    })

  }

  render() {
    return (
      <div className="list-news">
        {this.renderListNews()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(NewsList)