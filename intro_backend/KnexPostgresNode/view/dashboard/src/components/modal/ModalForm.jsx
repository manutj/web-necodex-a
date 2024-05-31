import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddEditForm from "../forms/AddEditForm";

const ModalForm = (props) => {
  const [toogle, setToogle] = useState(false);

  const openModal = () => {
    setToogle(!toogle);
  };

  const buttonLabel = props.buttonLabel;
  let button = "";
  let title = "";

  if (buttonLabel === "Editar") {
    button = <Button onClick={openModal} color="warning">{buttonLabel}</Button>;

    title = "Editar usuario";
  } else {
    button = <Button onClick={openModal} color="success">{buttonLabel}</Button>;

    title = "Agregar usuario";
  }

  return (
    <>
  {button}
    <div>
      <Modal isOpen={toogle} toggle={openModal}>
        <ModalHeader toggle={openModal}>{title}</ModalHeader>

        <ModalBody>
          <AddEditForm item={props.item}  />
        </ModalBody>
      </Modal>
    </div>
    </>
  );
};

export default ModalForm;
