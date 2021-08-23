import React from "react";
import ReactDOM from "react-dom";
import Times from "../../Icons/Times";

import classes from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <Times className={classes.close} onClick={props.onClose} />
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
