/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

// スタイルドコンポーネントを作成
const Button = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);
  background-color: ${(props) => props.color || '#757575'}; // propsから直接色を取得
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
    opacity: 0.85;
  }
`;

export default Button;
