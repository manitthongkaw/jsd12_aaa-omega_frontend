import { useContext } from "react";

import { MessageContext } from "../../../contexts/messageContext/MessageContext";

export default function ConfirmModal() {

  const { confirmModal, closeConfirm } = useContext(MessageContext);

  if (!confirmModal.open) return null;

  const handleConfirm = async () => {
    if (confirmModal.onConfirm) {
      await confirmModal.onConfirm();
    }
    closeConfirm();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{confirmModal.title}</h3>
        <p>{confirmModal.message}</p>
        <div className="button-row justify-end">
          <button type="button" className="button button-soft" onClick={closeConfirm} >ยกเลิก</button>
          <button type="button" className="button button-error" onClick={handleConfirm}>ยืนยัน</button>
        </div>
      </div>
    </div>
  );

}