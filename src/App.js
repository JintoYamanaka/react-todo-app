import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const appStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
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
  padding: 10px 15px;
  margin: 0 5px;
  border: none;
  border-radius: 20px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #45a049;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
  }
`;

const cancelButtonStyle = css`
  margin-left: 10px;
  background-color: #f44336;
  color: white;

  &:hover {
    background-color: #d32f2f;
  }
`;

const listContainerStyle = css`
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 20px;
  margin: 20px 0;
`;

const listItemStyle = css`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const listTitleStyle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
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
      <div css={listContainerStyle}>
        <div css={listTitleStyle}>TODOリスト</div>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} css={listItemStyle}>
              {task}
              <button onClick={() => deleteTask(index)} css={buttonStyle}>削除</button>
            </div>
          ))
        ) : (
          <div css={listItemStyle}>タスクがありません。</div>
        )}
      </div>
    </div>
  );
}

export default App;
