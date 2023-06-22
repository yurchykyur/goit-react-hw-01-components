import styled from '@emotion/styled';

export const MyFriend = styled.li`
  display: flex;

  align-items: center;
  height: 70px;
  margin-bottom: 12px;

  font-size: 18px;
  font-weight: 500;

  color: black;
  background-color: #fbe1b0;

  border: 1px solid red;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const MyFriendStatus = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  margin-left: 18px;

  border-radius: 50%;
  background-color: ${props => (props.statusType ? 'goldenrod' : 'red')};
`;

export const MyFriendAvatar = styled.img`
  display: block;
  margin-right: 16px;
  margin-bottom: 0;
  margin-left: 16px;
`;

export const MyFriendName = styled.p`
  color: ${props => (props.statusType ? 'blue' : 'rgba(255, 0, 0, 0.5)')};
`;
