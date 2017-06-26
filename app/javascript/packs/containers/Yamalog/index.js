import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/yamalog'

import MessageList from '../../components/YamalogList'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { yamalog, actions } = this.props
    return (
      <div>
        <MessageList yamalogs={yamalog} actions={actions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    yamalog: state.Yamalog
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
