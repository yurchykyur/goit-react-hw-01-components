import styled from '@emotion/styled';

export const Container = styled.div`
  margin-right: auto;
  margin-bottom: 60px;
  margin-left: auto;

  width: 320px;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0px 5px 12px -5px;

  background-color: whitesmoke;
`;

export const Card = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 140px;

  border: 1px solid lightgray;
  border-radius: 50%;
  box-shadow: 0px 2px 5px;
  background-color: tomato;
`;

export const UserName = styled.p`
  margin-top: 40px;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  font-size: 22px;
  font-weight: bold;
`;

export const NickName = styled.p`
  margin-top: 10px;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  font-size: 16px;
  font-weight: normal;
  color: dimgray;
`;

export const UserLocation = styled.p`
  margin-top: 10px;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  font-size: 16px;
  font-weight: normal;
  color: dimgray;
`;

export const UserStats = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
`;

export const UserStatsItem = styled.li`
  height: 92px;
  width: calc(320px / 3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid lightgray;
  background-color: rgb(235, 235, 235);

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: lightsteelblue;
  }

  :not(:last-child) {
    border-right: 1px solid lightgray;
  }
`;

export const UserStatsTitle = styled.span`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  font-size: 14px;
  font-weight: normal;
  color: dimgray;
`;

export const UserStatsQuantity = styled.span`
  margin-top: 10px;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  font-size: 16px;
  font-weight: bold;
`;
