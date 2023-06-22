import PropTypes from 'prop-types';

import {
  MyFriend,
  MyFriendStatus,
  MyFriendAvatar,
  MyFriendName,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <MyFriend>
      <MyFriendStatus statusType={isOnline}></MyFriendStatus>

      <MyFriendAvatar src={avatar} alt="User avatar" width="48" />
      <MyFriendName statusType={isOnline}>{name}</MyFriendName>
    </MyFriend>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
