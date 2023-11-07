/** @jsxImportSource @emotion/react */
import { useState, ChangeEvent } from "react";
import { css } from "@emotion/react";
import Button from "./components/Button"; // 作成したButtonコンポーネントをインポート

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

const App = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // タスクの追加処理
  const addTask = (): void => {
    if (task.trim().length > 0) {
      setTasks([...tasks, task]);
      setTask('');
      setIsModalOpen(false); // モーダルを閉じる
    } else {
      alert('タスク名は1文字以上でなければなりません。');
    }
  };

  // タスクの削除処理
  const deleteTask = (index: number): void => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // モーダルの開閉処理
  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  // テキスト入力のイベントハンドラ
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  // モーダル外クリックのイベントハンドラ（イベント伝播の停止）
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <div css={appStyle}>
      {isModalOpen && (
        <div css={modalStyle} onClick={toggleModal}>
          <div css={modalContentStyle} onClick={handleModalClick}>
            <input
              type="text"
              value={task}
              onChange={handleInputChange}
              placeholder="新しいタスクを入力"
            />
            <Button color="#2979ff" onClick={addTask}>追加</Button>
            <Button color="#f44336" onClick={toggleModal}>キャンセル</Button>
          </div>
        </div>
      )}
      <div css={listContainerStyle}>
        <div css={listTitleStyle}>TODOリスト</div>
        <Button color="#4caf50" onClick={toggleModal}>新規登録</Button>
        {tasks.length > 0 ? (
          tasks.map((taskItem, index) => (
            <div key={index} css={listItemStyle}>
              {taskItem}
              <Button color="#f44336" onClick={() => deleteTask(index)}>削除</Button>
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
