import styled from 'styled-components';

export const ListButton = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ListItemButton = styled.li`
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 25px;
  background-color: #5eb164;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  border: none;
  box-shadow: 0px 1px 7px rgb(0 0 0), 0px 1px 8px rgb(0 0 0 / 67%),
    0px 2px 3px rgb(0 0 0 / 47%);
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: white;
    color: #217a0b;
  }
`;
