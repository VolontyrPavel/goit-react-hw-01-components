import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { CreateFriendsMarkup } from './CreateFriendsMarkup';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
        {friends.map(({ id, name, avatar, isOnline }) => (
            <CreateFriendsMarkup key={id} name ={name} avatar={avatar} isOnline={isOnline}/>
        ))}
    </ul>)
};


FriendList.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}