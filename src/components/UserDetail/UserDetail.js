import React, { PropTypes } from 'react';

const UserDetail = ({ products}) => {

    const gitRepos = () => {
        const repos = products.selectedItem.repos;
        if(!repos) return null;
        return (
            <select>
                {repos.map((item, key) => ((<option key={item.id}>{item.full_name}</option>) ))}
            </select>
        );
    };

    const displayInfo = (name, value) => (
        <div className="row">
            <div className="name">{name}</div>
            <div className="value">{value}</div>
        </div>
    )

    const renderContent = () => {
        return (

            <div className="container">
                <div className="subtitle">Detail Information of User</div>
                <img className="thumbnail" src={products.selectedItem.avatar_url} alt="Could not found."/>
                <div className="information">
                    {displayInfo("Login name: ", products.selectedItem.login)}
                    {displayInfo("Name: ", products.selectedItem.name)}
                    {displayInfo("Company: ", products.selectedItem.company)}
                    {displayInfo("Location: ", products.selectedItem.location)}
                    {displayInfo("Type: ", products.selectedItem.type)}
                    {displayInfo("Number of public repos: ", products.selectedItem.public_repos)}
                    {displayInfo("Number of public gists: ", products.selectedItem.public_gists)}
                    {displayInfo("Number of followers: ", products.selectedItem.followers)}
                    {displayInfo("Public gists: ", products.selectedItem.public_gists)}

                    <div className="row">
                        <div className="name">All Github repos:</div>
                        <div className="value">{gitRepos()}</div>
                    </div>
                </div>
            </div>)
    }

    return renderContent();
}

UserDetail.propTypes = {
  products: PropTypes.shape({
    name: PropTypes.string,

  }).isRequired,

};

export default UserDetail;
