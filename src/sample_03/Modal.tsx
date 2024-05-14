import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

// モーダルダイアログのコンポーネント
export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}): React.ReactPortal | null => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.body
  );
};
