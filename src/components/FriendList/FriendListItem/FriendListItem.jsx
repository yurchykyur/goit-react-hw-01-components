import css from './FriendListItem.module.css';

export default function FriendListItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className={css.item} key={id}>
        {isOnline ? (
          <span className={css.online}></span>
        ) : (
          <span className={css.noOnline}></span>
        )}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
}
