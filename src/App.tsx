/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styled from "@emotion/styled";
import Button from "./components/Button";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // タスクの追加処理
  const addTask = (newTask: string) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsModalOpen(false); // モーダルを閉じる
  };

  // タスクの削除処理
  const deleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  // モーダルの開閉処理
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <AppContainer>
      {isModalOpen && <Modal onAdd={addTask} onCancel={toggleModal} />}
      <Button color="#4caf50" onClick={toggleModal}>
        新規登録
      </Button>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </AppContainer>
  );
};

export default App;
