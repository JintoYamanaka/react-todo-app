/** @jsxImportSource @emotion/react */
import { useState, ChangeEvent } from "react";
import { css } from "@emotion/react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";

const appStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const App = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // タスクの追加処理
  const addTask = (): void => {
    if (task.trim().length > 0) {
      setTasks([...tasks, task]);
      setTask("");
      setIsModalOpen(false); // モーダルを閉じる
    } else {
      alert("タスク名は1文字以上でなければなりません。");
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
        <Modal
          task={task}
          onInputChange={handleInputChange}
          onAdd={addTask}
          onCancel={toggleModal}
        />
      )}
      <Button
        color="#4caf50"
        onClick={toggleModal}
        css={isModalOpen ? { zIndex: 0 } : {}}
      >
        新規登録
      </Button>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
