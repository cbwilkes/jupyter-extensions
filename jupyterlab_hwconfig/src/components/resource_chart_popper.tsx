/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import { Popper, Fade, Paper } from '@material-ui/core';
import { classes } from 'typestyle';
import { STYLES } from '../data/styles';
import { HardwareService } from '../service/hardware_service';
import { ResourceUtilizationCharts } from './resource_utilization_charts';

interface Props {
  hardwareService: HardwareService;
}

interface State {
  anchorEl: null | HTMLElement;
}

const GRAPH_ICON_CLASS = 'jp-UtilizationGraphsIcon';

/** Wraps resource utilization charts with icon button popper. */
export class ResourceChartPopper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  render() {
    const { hardwareService } = this.props;
    const { anchorEl } = this.state;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      this.setState({
        anchorEl: this.state.anchorEl ? null : event.currentTarget,
      });
    };

    const open = Boolean(anchorEl);
    const id = open ? 'widget-popper' : undefined;

    return (
      <span
        className={classes(
          GRAPH_ICON_CLASS,
          STYLES.icon,
          STYLES.interactiveHover
        )}
        title="Show resource utilization"
        onClick={handleClick}
      >
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement={'top-start'}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper elevation={5}>
                <ResourceUtilizationCharts hardwareService={hardwareService} />
              </Paper>
            </Fade>
          )}
        </Popper>
      </span>
    );
  }
}
