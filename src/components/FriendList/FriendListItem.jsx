import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { VscCircleLargeFilled } from "react-icons/vsc";

export const FriendListItem = ({ name, avatar, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.online : css.offline}><VscCircleLargeFilled /></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li> 
    )
}


FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

