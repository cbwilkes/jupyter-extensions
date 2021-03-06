import React from 'react';
import { classes, style } from 'typestyle';

import { Props } from '../panel';

import { CircularProgress, IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import SyncDisabledIcon from '@material-ui/icons/SyncDisabled';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';

interface StatusButtonState {
  title: string;
  icon: any;
  status: string;
}

const disableHoverClass = style({
  $nest: {
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
});

export class StatusButton extends React.Component<Props, StatusButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      title: 'All Files Up To Date',
      icon: <DoneAllIcon color="action" fontSize="small" />,
      status: 'up-to-date',
    };
  }

  componentDidMount() {
    this._addListeners();
  }

  render() {
    return (
      <IconButton
        className={classes(disableHoverClass)}
        title={this.state.title}
        color="inherit"
        disableFocusRipple
        disableRipple
      >
        {this.state.icon}
      </IconButton>
    );
  }

  private _setUpToDateState(): void {
    this.setState({
      title: 'All Files Up To Date',
      icon: <DoneAllIcon color="action" fontSize="small" />,
      status: 'up-to-date',
    });
  }

  private _setSyncState(): void {
    this.setState({
      title: 'Syncing with Remote Repository',
      icon: <CircularProgress size={20} />,
      status: 'sync',
    });
  }

  private _setDirtyState(): void {
    this.setState({
      title: 'Files have Unpushed Changes',
      icon: <DoneIcon color="action" fontSize="small" />,
      status: 'dirty',
    });
  }

  private _setWarningState(): void {
    this.setState({
      title: 'An Error has Occurred',
      icon: <SyncProblemIcon fontSize="small" />,
      status: 'warning',
    });
  }

  private _setConflictState(): void {
    this.setState({
      title: 'Files have Unresolved Conflicts',
      icon: <SyncDisabledIcon fontSize="small" />,
      status: 'conflict',
    });
  }

  private _addListeners() {
    this.props.service.statusChange.connect((_, value) => {
      if (value.status !== this.state.status) {
        switch (value.status) {
          case 'up-to-date':
            this._setUpToDateState();
            break;
          case 'sync':
            this._setSyncState();
            break;
          case 'dirty':
            this._setDirtyState();
            break;
          case 'warning':
            this._setWarningState();
            break;
          case 'conflict':
            this._setConflictState();
            break;
        }
      }
    });

    this.props.service.blockedChange.connect((_, isBlocked) => {
      if (!isBlocked) this._setDirtyState();
    });
  }
}
