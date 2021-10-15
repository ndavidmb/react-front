import React, { useImperativeHandle, useState } from "react";

export const Modal = React.forwardRef(
  ({ afterClosed, children }, ref) => {
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState({});

    useImperativeHandle(ref, () => ({
      openModal(method) {
        if(method?.edit) {
          setEdit(method);
        } else {
          setEdit({});
        }
        setVisible(true);
      },
    }));

    const closeModal = () => {
      setVisible(false);
      afterClosed();
    };

    return (
      <>
        {visible && (
          <div ref={ref} className="modal-container">
            <div className="custom-modal">
              <span onClick={closeModal}>
                <i className="bi bi-x"></i>
              </span>
              {React.cloneElement(children, { closeModal, edit })}
            </div>
          </div>
        )}
      </>
    );
  }
);
