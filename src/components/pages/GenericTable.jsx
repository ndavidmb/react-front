import React from "react";
import { AppContext } from "../../App";
import useCrudApi from "../../hooks/useCrudApi";
import { Modal } from "../ui/Modal";
import { Table } from "../ui/Table";
import { GenericDelete } from "./GenericDelete";

export const GenericTable = ({ ModalForm, apiMethod, title, buttonLabel }) => {
  const [data, setData] = React.useState([]);
  const [deleteModal, setDeleteModal] = React.useState({
    state: false,
    id: "",
  });
  const modalRef = React.useRef();
  const { toast, setToast } = React.useContext(AppContext);
  const { getAll, remove } = useCrudApi(apiMethod);

  React.useEffect(() => {
    consultData();
  }, []);

  const consultData = () => {
    getAll()
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        setToast({
          ...toast,
          visible: true,
          message: err.status,
          type: err.type,
        });
      });
  };
  const handleModal = (method = {}) => {
    if (method?.delete) {
      setDeleteModal({ state: true, id: method.id });
      modalRef.current.openModal();
      return;
    }

    modalRef.current.openModal(method);
  };

  const afterClosed = () => {
    if (deleteModal.state === true) {
      setDeleteModal({ state: false, id: "" });
    }
    consultData();
  };

  return (
    <div className="p-3 bg-light full-size">
      <div className="card shadow-sm">
        <Modal afterClosed={afterClosed} ref={modalRef}>
          {deleteModal.state ? (
            <GenericDelete id={deleteModal.id} remove={remove} />
          ) : (
            ModalForm
          )}
        </Modal>
        <div className="card-body" style={{ maxHeight: "86vh" }}>
          <div className="d-flex justify-content-between mb-2">
            <h3 className="card-title text-dark">{title}</h3>
            <button className="btn btn-primary" onClick={() => handleModal({})}>
              {buttonLabel}
            </button>
          </div>
          <Table tableContent={data} handleModal={handleModal} />
        </div>
      </div>
    </div>
  );
};
