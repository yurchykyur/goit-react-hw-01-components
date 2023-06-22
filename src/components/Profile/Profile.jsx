import PropTypes from 'prop-types';

import {
  Container,
  Card,
  UserAvatar,
  UserName,
  NickName,
  UserLocation,
  UserStats,
  UserStatsItem,
  UserStatsTitle,
  UserStatsQuantity,
} from './Profile.styled';

export default function Profile({
  userName,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <Container>
      <Card>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{userName}</UserName>
        <NickName>@{tag}</NickName>
        <UserLocation>{location}</UserLocation>
      </Card>

      <UserStats>
        <UserStatsItem>
          <UserStatsTitle>Followers</UserStatsTitle>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsTitle>Views</UserStatsTitle>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsTitle>Likes</UserStatsTitle>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </UserStatsItem>
      </UserStats>
    </Container>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
