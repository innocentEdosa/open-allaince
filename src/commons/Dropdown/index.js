import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ClickAwayListener from '../ClickAwayListener';

class DropdownWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      clickerPosition: {
        top: 0,
        left: 0,
        width: 0,
      },
    };
    this.portalRef = React.createRef(null);
    this.clickerRef = React.createRef(null);
  }

  componentDidMount() {
    const { selector } = this.props;
    this.portalRef.current = document.querySelector(selector);
  }

  componentDidUpdate() {
    const { selector } = this.props;
    this.portalRef.current = document.querySelector(selector);
  }

  getPos = ({
    left, top, height, width,
  }) => {
    this.setState((prevState) => ({
      clickerPosition: {
        ...prevState.clickerPosition,
        left,
        top: top + height,
        width,
      },
    }));
  };

  close = (e) => {
    const { isOpen } = this.state;
    if (!isOpen) {
      return;
    }
    if (e) {
      e.preventDefault();
    }

    this.setState((prevState) => ({
      ...prevState,
      isOpen: false,
    }));
  };

  toggle = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { children } = this.props;
    const {
      isOpen, clickerPosition: {
        top,
        left,
        width = 0,
      },
    } = this.state;

    const inputChildren = (
      <>
        {
    React.Children.map(children, (child) => {
      if (child.props.clicker) {
        return React.cloneElement(child, {
          toggle: this.toggle,
          getPos: this.getPos,
          close: this.close,
          forwardedRef: this.clickerRef,
        });
      }

      const {
        offset: {
          left: offsetLeft = 0,
          right: offsetRight = 0,
          top: offsetTop = 0,
        } = {}, align = 'left',
      } = child.props;
      const lets = align === 'left'
        ? { left: left + Number(offsetLeft) }
        : { left: left + width + Number(offsetRight) };
      const childStyle = {
        position: 'absolute',
        zIndex: 100000,
        top: top + Number(offsetTop),
        ...lets,
      };

      return (
        isOpen
        && this.portalRef.current
        && ReactDOM.createPortal(
          <ClickAwayListener exclude={[this.clickerRef]} onClickAway={this.close}>

            {React.cloneElement(child, {
              style: { ...child.props.style, ...childStyle },
              onClick: (e) => {
                if (child.props.onClick) {
                  child.props.onClick(e);
                }
              },
              close: () => this.close(),
            })}
          </ClickAwayListener>,
          this.portalRef.current,
        )
      );
    })
  }
      </>
    );

    return inputChildren;
  }
}

DropdownWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  selector: PropTypes.string.isRequired,
};

export default DropdownWrapper;
