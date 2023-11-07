import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const appStyle = css`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const listStyle = css`
  margin-top: 20px;
`;

const buttonStyle = css`
  margin-left: 10px;
`;

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, task]);
      setTask('');
    } else {
      alert('タスク名は1文字以上でなければなりません。');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div css={appStyle}>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask} css={buttonStyle}>追加</button>
      <div css={listStyle}>
        {tasks.map((task, index) => (
          <div key={index}>
            {task}
            <button onClick={() => deleteTask(index)} css={buttonStyle}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
