import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserEntry = ({ user }) => (
    <Link to={`/users/${user.login}`}>
      <div className="entry">
        <img className="avatar" src={user.avatar_url} alt={user.login} />
        <strong className="loginName">{user.login}</strong>
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
