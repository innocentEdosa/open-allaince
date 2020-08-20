import React, { useRef, useEffect } from 'react';
import mergeRefs from '../../utilities/mergeRef';

const ClickAwayListener = ({ children, exclude, onClickAway }) => {
  const directChild = useRef();

  useEffect(() => {
    const areYouAlien = (event) => {
      let aliensFound = false;
      if (directChild.current && directChild.current.contains(event.target)) {
        return;
      }
      if (exclude && !Array.isArray(exclude)) {
        if (
          exclude.current
          && exclude.current.contains
          && exclude.current.contains(event.target)
        ) {
          return;
        }
      }
      if (Array.isArray(exclude)) {
        aliensFound = exclude.some((ref) => {
          if (ref.current && ref.current.contains) {
            return ref.current.contains(event.target);
          }
        });
      }
      if (!aliensFound) {
        onClickAway(event);
      }
    };
    window.addEventListener('click', areYouAlien);
    window.addEventListener('touchend', areYouAlien);

    return () => {
      window.removeEventListener('click', areYouAlien);
      window.removeEventListener('touchend', areYouAlien);
    };
  });

  const finalChildren = React.Children.map(children, (child) => React.cloneElement(child, {
    ref: mergeRefs([child.ref, directChild]),
    onClick: () => {
      if (child.onClick) {
        child.onClick();
      }
    },
  }));
  return finalChildren;
};

export default ClickAwayListener;
