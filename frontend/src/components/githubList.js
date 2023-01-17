import React from "react"
import Container from 'react-bootstrap/Container';
import { useState } from 'react'
import githubCss from './githubList.module.css'

const GithubList = () => {
    const [loaded, setLoaded] = useState(githubCss.unLoaded);

    function apiRequest() {
        let userInfo = {
            "id": sessionStorage.getItem("id")
        };
        fetch('/getUserPortfolios', {
            "method": "POST",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(userInfo)
        }).then(res=>res.json()).then(
          data => {
            for (let i = 0; i < data.size; i++) {
                var port = {
                    value: data.portIds[i],
                    label: data.portNames[i]
                }
                //portOption.push(port)

            }
            setLoaded(true)
          }
        )
    }

    return (
        <div className= {githubCss.githubListClass + ' ' + loaded}>
            <div className = {githubCss.subject}>
                I am currently working on....
            </div>
        </div>

    );
};



export default GithubList;