/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent } from "react";
import Button from "./Button";

const buttonContainerStyle = css`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const modalStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const modalContentStyle = css`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .button-container {
    ${buttonContainerStyle};
  }
`;

interface ModalProps {
  task: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  onCancel: () => void;
}

const inputStyle = css`
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Modal: React.FC<ModalProps> = ({
  task,
  onInputChange,
  onAdd,
  onCancel,
}) => {
  // モーダル外クリックで閉じないようにするイベントハンドラ
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div css={modalStyle} onClick={onCancel}>
      <div css={modalContentStyle} onClick={stopPropagation}>
        <input
          type="text"
          value={task}
          onChange={onInputChange}
          placeholder="新しいタスクを入力"
          css={inputStyle}
        />
        <div css={buttonContainerStyle}>
          <Button color="#2979ff" onClick={onAdd}>
            追加
          </Button>
          <Button color="#f44336" onClick={onCancel}>
            キャンセル
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
