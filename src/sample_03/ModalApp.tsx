import { useState } from "react";
import { Modal } from "./Modal";

// モーダルダイアログを使用するコンポーネント
export const ModalApp = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>ReactPortal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal dialog.</p>
      </Modal>
    </div>
  );
};
