import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './UserEntry.css';

const UserEntry = ({ user }) => (
    <Link to={`/users/${user.login}`}>
      <div className={styles.entry}>
        <img className={styles.avatar} src={user.avatar_url} alt={user.login} />
        <strong className={styles.loginName}>{user.login}</strong>
      </div>
    </Link>
);

UserEntry.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default UserEntry;
