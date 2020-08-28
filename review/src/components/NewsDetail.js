import React, { Component } from 'react'
import { connect } from 'react-redux';
import { hashHistory } from '../configureStore';
import imageBack from './../assests/icon-back.png';
import { convertISODateToFormattedDate } from '../utils/utilNews';
import imageDefault from './../assests/default-img.jpg';

class NewsDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newsData: null
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      newsData: nextProps.selectedNews
    })
  }

  onBackBtnClicked() {
    hashHistory.push("/");
  }

  renderBackBtn() {
    return (
      <div onClick={this.onBackBtnClicked}>
        <img className="icon-back" src={imageBack} alt="" />
        <i className="fas fa-chevron-circle-left">Back to list news</i>
      </div>

    )
  }

  renderNewsUI() {
    const { selectedNews } = this.props;
    
    if (!selectedNews || !Object.keys(selectedNews).length) {
      return (
        <div>
          {this.renderBackBtn()}
        </div>
      )
    }
    return (
      <div>
        {this.renderBackBtn()}
        <hr/>
        <div className="mt-3">
          <div className="header">
            <div className="header row">
              <b className="col-md-9">{selectedNews.title}</b>
              <small> <i className="col-md-3">
                {convertISODateToFormattedDate(selectedNews.publishedAt)}
                </i></small>
            </div>
            <div className="body row mt-3">
              <img className="col-md-3" src={selectedNews.urlToImage ? selectedNews.urlToImage : imageDefault} alt=""/>
              <div className="col-md-9">
                {selectedNews.content}
              </div>
            </div>
            <div>
              <a href={selectedNews.url}>Link to the news</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div style={{ padding: 15 }}>
        {this.renderNewsUI()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedNews } = state.reducerNews;
  return {
    selectedNews
  }
}
export default connect(mapStateToProps)(NewsDetail)
