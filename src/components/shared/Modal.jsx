import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const portalElement = document.getElementById("modal");

  return createPortal(
    <>
      <div className={`${classes.overlay} ${props.isOpen ? 'block' : 'hidden'}`} onClick={props.hideModal}></div>
      <dialog open={props.isOpen} className={classes.modal}>
        <h2 className="text-xl font-medium pb-3">{props.title}</h2>
        { props.children }
      </dialog>
    </>,
    portalElement
  );
};

export default Modal;
