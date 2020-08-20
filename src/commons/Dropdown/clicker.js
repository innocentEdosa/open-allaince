import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeRef from '../../utilities/mergeRef';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.selectedElement = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.setPos);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setPos);
  }

  setPos = () => {
    const { getPos } = this.props;
    getPos(this.selectedElement.current.getBoundingClientRect());
  };

  render() {
    const {
      props: { toggle, children, forwardedRef },
      setPos,
    } = this;
    return React.cloneElement(children, {
      ref: mergeRef([this.selectedElement, forwardedRef]),
      onClick: !children.props.focus ? (e) => {
        if (children.props.onClick) {
          children.props.onClick();
        }
        setPos();
        toggle(e);
      } : (e) => {
        if (children.props.onClick) {
          children.props.onClick();
        }
      },
      onFocus: children.props.focus ? (e) => {
        if (children.props.onFocus) {
          children.props.onFocus();
        }
        setPos();
        toggle(e);
      } : (e) => {
        if (children.props.onFocus) {
          children.props.onFocus(e);
        }
      }
    });
  }
}

Clicker.defaultProps = {
  getPos: (e) => e,
  toggle: (e) => e,
  forwardedRef: {},
};

Clicker.propTypes = {
  getPos: PropTypes.func,
  toggle: PropTypes.func,
  children: PropTypes.element.isRequired,
  forwardedRef: PropTypes.shape({}),
};
export default Clicker;
