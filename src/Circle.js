import {
  default as React,
  Component,
} from "react";

import {
  default as CircleCreator,
  circleDefaultPropTypes,
  circleControlledPropTypes,
  circleEventPropTypes,
} from "./creators/CircleCreator";

export default class Circle extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...circleDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...circleControlledPropTypes,
    // Event [onEventName]
    ...circleEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getBounds () { return this.state.circle.getBounds(); }

  getCenter () { return this.state.circle.getCenter(); }

  getDraggable () { return this.state.circle.getDraggable(); }

  getEditable () { return this.state.circle.getEditable(); }

  getMap () { return this.state.circle.getMap(); }

  getRadius () { return this.state.circle.getRadius(); }

  getVisible () { return this.state.circle.getVisible(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle

  state = {
  }

  componentDidMount () {
    const {mapHolderRef, ...circleProps} = this.props;
    const circle = CircleCreator._createCircle(mapHolderRef, circleProps);

    this.setState({ circle });
  }

  render () {
    if (this.state.circle) {
      return (
        <CircleCreator circle={this.state.circle} {...this.props}>
          {this.props.children}
        </CircleCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}
