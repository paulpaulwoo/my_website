import React from "react"
import Container from 'react-bootstrap/Container';
import { useState, useEffect, Component } from 'react'
import githubCss from './githubList.module.css'

const GithubList = () => {


    const headings = ["Date", "Repo Name", "Event Type", "Link to Repo"]
    



    return (
        <div className= {githubCss.githubListClass}>
            <div className = {githubCss.subject}>
                I am currently working on....
            </div>
            <div className = {githubCss.githubTable}>
                {<TableEntries heads = {headings} >
                    
                </TableEntries>}
            </div>
        </div>

    );
};



class TableRow extends Component {



    render() {

        var row = this.props.row;
        console.log("TABLEROW CALLED")
                
        return (
            
            <tr key={row[4]}>

                <td >{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td ><a href={row[3]}>Link to Repo</a></td>
            </tr>
        )
        
        }
}

class TableEntries extends Component {

    
    state = {datas: []}

    componentDidMount() {
        var jsons = []
        fetch('https://api.github.com/users/paulpaulwoo/events?per_page=4', {
            "method": "GET",
            "headers": {"Content-Type": "application/json"},
        }).then(res=>res.json()).then(
          data => {

            for (let i = 0; i < data.length; i++) {
                let eventType = data[i].type
                eventType = eventType.substring(0, eventType.indexOf("Event"))
            


                var port = [data[i].created_at.substring(0,10), data[i].type.substring(0, data[i].type.indexOf("Event")), data[i].repo.name, "https://github.com/" + data[i].repo.name, data[i].id]
                jsons.push(port)
            }

            this.setState({datas: jsons})

          }
        )
    }

    render () {
        
        if (this.state.datas.length === 0) {
            return null;
        }

        return (
            <table>
            <thead>
            
            <tr>
                <th key={0}>Date</th>
                <th key={1}>Repo Name</th>
                <th key={2}>Event Type</th>
                <th key={3}>Links to Repo</th>
            </tr>
            </thead>
            <tbody>
                {this.state.datas.map(row => 
                    <tr key = {row[4]}>
                        <td>{row[0]}</td>
                        <td>{row[2]}</td>
                        <td>{row[1]}</td>
                        <td ><a href={row[3]}>Link to Repo</a></td>
                    </tr>)}
            </tbody>
            </table>
        )
    }
}


export default GithubList;