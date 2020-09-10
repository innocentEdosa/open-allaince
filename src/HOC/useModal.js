import React, { useState } from "react";

const useModal = () => {
  const [displayedChild, setDisplayedChild] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (placeholder) => {
    setDisplayedChild(placeholder);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setDisplayedChild(null);
    setIsModalOpen(false);
  };
  const placeholder = isModalOpen && (
    <div className="z-50 fixed top-0 bottom-0 bg-shade-wickedDark bg-opacity-80 right-0 left-0 flex ">
      {displayedChild}
    </div>
  );
  return {
    modal: placeholder,
    openModal,
    setDisplayedChild,
    closeModal,
  };
};

export default useModal;
