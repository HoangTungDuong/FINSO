import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ProfileComponent from './ProfileComponent'
import HeadlineNews from './HeadlineNews'
import CustomNews from './CustomNews'
import { TAB_VIEW_KEY } from '../constants/common'
import { getUserDataLocalStorage } from '../utils/utilUserProfile';
import { SAVE_USER_PROFILE } from '../actions/actionUserProfile';
import { connect } from 'react-redux';
class HomeComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  componentDidMount(){
    const data = getUserDataLocalStorage();
    this.props.dispatch({
      type: SAVE_USER_PROFILE,
      payload: {
        userName: data.name,
        userPreference: data.preference
    }
    });
  }
  
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={TAB_VIEW_KEY.PROFILE} transition={false} id="noanim-tab-example">
          <Tab eventKey={TAB_VIEW_KEY.HEADLINE_NEWS} title="Headline News">
            <HeadlineNews />
          </Tab>
          <Tab eventKey={TAB_VIEW_KEY.CUSTOM_NEWS} title="Custom News">
            <CustomNews />
          </Tab>
          <Tab eventKey={TAB_VIEW_KEY.PROFILE} title="Profile">
            <ProfileComponent />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(HomeComponent)
