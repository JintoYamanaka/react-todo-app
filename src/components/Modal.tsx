/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState, ChangeEvent } from "react";
import Button from "./Button";

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const StyledModal = styled.div`
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
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledInput = styled.input`
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const ErrorMessage = styled.div`
  color: #f44336;
  margin-top: -10px;
  margin-bottom: 10px;
`;

interface ModalProps {
  onAdd: (task: string) => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ onAdd, onCancel }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    if (error) setError("");
  };

  const handleAdd = () => {
    if (task.trim().length > 0) {
      onAdd(task);
      setTask("");
    } else {
      setError("タスク名は1文字以上でなければなりません。");
    }
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledModal>
      <ModalContent onClick={stopPropagation}>
        <StyledInput
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="新しいタスクを入力"
          aria-describedby="error-message"
        />
        {error && <ErrorMessage id="error-message">{error}</ErrorMessage>}
        <ButtonContainer>
          <Button color="#2979ff" onClick={handleAdd}>
            追加
          </Button>
          <Button color="#f44336" onClick={onCancel}>
            キャンセル
          </Button>
        </ButtonContainer>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
