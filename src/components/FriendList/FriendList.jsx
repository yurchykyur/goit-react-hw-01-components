import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendListItem';

import { MyFriendList } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <MyFriendList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </MyFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
