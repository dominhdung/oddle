import React, { PropTypes } from 'react';
import _ from 'lodash';
import UserEntry from '../UserEntry/UserEntry';
import styles from './UserList.css';

const UserList = ({ products }) => (
  <div className={styles.container}>
    {
      _.chunk(products, 5)
      .map((productChunk, index) => (
        <div key={index} className={styles.row}>
          {
            productChunk.map((product, pindex) =>
              <UserEntry key={pindex} user={product} />)
          }
        </div>
      ))
    }
  </div>
);

UserList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),

};

UserList.defaultProp = {
  products: {},
};

export default UserList;
