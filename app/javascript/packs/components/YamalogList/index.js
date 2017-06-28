import React, { Component } from 'react'
import Yamalog from '../Yamalog'

class YamalogList extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.createYamalogList(
      [
        {"id":4,"hiking_date":"2016-03-07","mountain_name":"武奈ヶ岳"},
        {"id":3,"hiking_date":"2016-06-06","mountain_name":"蓬莱山"},
        {"id":2,"hiking_date":"2017-04-01","mountain_name":"常念岳"},
        {"id":1,"hiking_date":"2017-06-26","mountain_name":"焼岳"}
      ]
    )
  }

  render() {
    const { yamalogs } = this.props
    return (
      <div className='container'>
        {yamalogs.map((yamalog) => <Yamalog key={yamalog.id} hiking_date={yamalog.hiking_date} mountain_name={yamalog.mountain_name} />)}
      </div>
    )
  }
}

export default YamalogList
