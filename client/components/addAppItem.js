import React from 'react';
import { ListItem } from 'material-ui/List';

import AddIcon from 'material-ui/svg-icons/content/add-circle';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';

import { githubGreen, githubBlue } from './../util/colorScheme.js';

class AddAppItem extends React.Component {
  constructor(props) {
    super(props);

    this.addApp = this.addApp.bind(this);
    // this.removeApp = this.removeApp.bind(this);
  }

  addApp() {
    // fillme: add app to repo
    console.log('add app to repo', this.props.reponame);
  }

  // removeApp() {
  //   // fillme: add app to repo
  // }

  render() {
    // const style = { position: 'absolute', right: 0, top: 0, };
    const { app } = this.props;
    const status = app.added ? 
                    <CheckIcon color={githubGreen} /> : 
                    <AddIcon color={githubBlue} onClick={this.addApp} />;
    return (
      <ListItem primaryText={app.name} rightIcon={status} />
    );
  }
}

export default AddAppItem;

// touchup: Implement cancel when hover over checkIcon
// svg-icon for cancel: <CancelIcon onClick={this.removeApp} />