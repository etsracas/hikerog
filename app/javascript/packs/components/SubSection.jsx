import React, {Component, PropTypes} from 'react';
import mui, {
  CircularProgress,
  Tabs,
  Tab,
  DatePicker
} from 'material-ui';

class MainSection extends Component {
  render() {
    return (
      <div>
        <h2>Progress Component</h2>
        <CircularProgress mode="indeterminate" size={60}/>
        <CircularProgress />
        <br/>

        <h2>Tab Component</h2>
        <Tabs>
          <Tab label="Tab One" value="0"/>
          <Tab label="Tab Two" value="1"/>
          <Tab label="Tab Three" value="2"/>
        </Tabs>
        <br/>

        <h2>DatePicker Component</h2>
        <DatePicker hintText="Portrait Dialog"/>
        <br/>
      </div>
    );
  }
}

export default MainSection;