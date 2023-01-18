import React from "react"
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react'
import githubCss from './githubList.module.css'

const GithubList = () => {
    const [loaded, setLoaded] = useState(githubCss.unLoaded);
    const [datas, setDatas] = useState([]);

    function apiRequest() {
        var jsons = []
        fetch('https://api.github.com/users/paulpaulwoo/events?per_page=4', {
            "method": "GET",
            "headers": {"Content-Type": "application/json"},
        }).then(res=>res.json()).then(
          data => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                console.log(data[i])
                var port = [data[i].type, data[i].repo.name]
                jsons.push(port)
            }
            console.log(jsons)
            setDatas(datas)
            setLoaded(true)
          }
        )
    }

    useEffect(() => {
        apiRequest();
      }, [])

    return (
        <div className= {githubCss.githubListClass + ' ' + loaded}>
            <div className = {githubCss.subject}>
                I am currently working on....
            </div>

        </div>

    );
};



export default GithubList;