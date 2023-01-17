import React from "react"
import Container from 'react-bootstrap/Container';
import { useState } from 'react'
import githubCss from './githubList.module.css'

const GithubList = () => {
    const [loaded, setLoaded] = useState(githubCss.unLoaded);
    return (
        <div className= {githubCss.githubListClass + ' ' + loaded}></div>
    );
};
export default GithubList;