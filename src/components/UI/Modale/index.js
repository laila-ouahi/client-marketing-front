import React from "react";
import { Modal } from "antd";

export default ({
  title,
  visible,
  onOk,
  onCancel,
  okText,
  cancelText,
  text
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText ? okText : "Oui"}
      cancelText={cancelText ? cancelText : "Non"}
    >
      <p>{text}</p>
    </Modal>
  );
};
