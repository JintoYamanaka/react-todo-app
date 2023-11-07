/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Button from "./Button";

const ListContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 20px;
  margin: 20px 0;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const ListTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

interface TaskListProps {
  tasks: string[];
  onDelete: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <ListContainer>
      <ListTitle>TODOリスト</ListTitle>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <ListItem key={index}>
            {task}
            <Button color="#f44336" onClick={() => onDelete(index)}>
              削除
            </Button>
          </ListItem>
        ))
      ) : (
        <ListItem>タスクがありません。</ListItem>
      )}
    </ListContainer>
  );
};

export default TaskList;
