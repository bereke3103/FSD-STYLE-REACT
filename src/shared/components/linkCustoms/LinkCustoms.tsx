import React from 'react';
import { Link } from 'react-router-dom';

const LinkCustoms = () => {
    return (
        <>
            <Link to={'/kk/home'}>Home</Link>
            <Link to={'/kk/about'}>About</Link>
            <Link to={'/kk/notfound'}>Not Foundа</Link>
            <Link to={'/kk/admin'}>Admin</Link>
            <Link to={'/kk/agency'}>Agency</Link>
            <Link to={'/kk/appeal'}>Appeal</Link>
            <Link to={'/kk/incident'}>Incident</Link>
            <Link to={'/kk/initiator'}>Initiator</Link>
            <Link to={'/kk/organization'}>Organization</Link>
            <Link to={'/kk/postal'}>Postal</Link>
            <Link to={'/kk/problem'}>Problem</Link>
            <Link to={'/kk/appealreport'}>Appeal report</Link>
            <Link to={'/kk/article'}>Article</Link>
        </>
    );
};

export default LinkCustoms;
