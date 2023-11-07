import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const appStyle = css`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
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
`;

const modalContentStyle = css`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const listStyle = css`
  margin-top: 20px;
`;

const buttonStyle = css`
  margin-left: 10px;
`;

const cancelButtonStyle = css`
  margin-left: 10px;
  background-color: #f44336;
  color: white;

  &:hover {
    background-color: #d32f2f;
  }
`;

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // タスクの追加処理
  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, task]);
      setTask("");
      setIsModalOpen(false); // モーダルを閉じる
    } else {
      alert("タスク名は1文字以上でなければなりません。");
    }
  };

  // タスクの削除処理
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // モーダルの開閉処理
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div css={appStyle}>
      <button onClick={toggleModal} css={buttonStyle}>
        新規登録
      </button>
      {isModalOpen && (
        <div css={modalStyle} onClick={toggleModal}>
          <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="新しいタスクを入力"
            />
            <button onClick={addTask} css={buttonStyle}>
              追加
            </button>
            <button onClick={toggleModal} css={cancelButtonStyle}>
              キャンセル
            </button>
          </div>
        </div>
      )}
      <div css={listStyle}>
        {tasks.map((task, index) => (
          <div key={index}>
            {task}
            <button onClick={() => deleteTask(index)} css={buttonStyle}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
