import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_DATA, USER_PREFERENCES } from '../constants/common';
class ProfileComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      preference: null
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    const { name, preference } = this.state;
    if(nextProps.userName !== name || !_.isEqual(nextProps.preference, preference)){
      this.setState({
        name: nextProps.userName,
        preference: nextProps.userPreference
      })
    }
  }

  onNameChanged = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  saveUserData = () => {
    const { name, preference } = this.state;
    const savedData = {
      name,
      preference
    }
    localStorage.setItem(USER_DATA, JSON.stringify(savedData));
    // this.props.dispatch({
    //   type: SAVE_USER_PROFILE,
    //   payload: {
    //     userName: 'duong',
    //     userPreference: USER_PREFERENCES[1]
    //   }
    // })
  }

  onSelectPreference = (event, value) => {
    this.setState({
      preference: value
    })
  }

  render() {
    const { name, preference } = this.state;
    return (
      <div className="card-profile">
          <div className="control">
            <label>User name</label>
            <input className="form-control name-tag"
              placeholder="Enter name"
              onChange={this.onNameChanged}
              value={name} />
          </div>
          <div className="control">
            <label>User preference</label>
            <Autocomplete
              id="combo-box-demo"
              options={USER_PREFERENCES}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Keyword" variant="outlined" />}
              onChange={this.onSelectPreference}
              value={preference}
            />
          </div>
          <div className="control">
            <button onClick={this.saveUserData} type="submit" className="btn btn-primary">Save</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { userName, userPreference } = state.reducerUserProfile;
  return {
    userName,
    userPreference
  }
}

export default connect(mapStateToProps)(ProfileComponent)
