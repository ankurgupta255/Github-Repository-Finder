import React from 'react';
import RepoList from '../repolist/repolist';

const initialState={
    repositories: null
}

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state={
            username: null,
            repositories: null
        }
    }
    usernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    onButtonSubmit=()=>{
        this.setState(initialState)
        fetch(`https://api.github.com/users/${this.state.username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,{
            method: 'GET'
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            if(data.message !== "Not Found"){
                this.setState({
                    repositories: data
                })
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        return(
            <main class="pa4 black-80 pt6 measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Repository - Finder</legend>
            <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">Username</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="username" name="username"  id="username" onChange={this.usernameChange} />
            </div>
            </fieldset>
            <div class="">
            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Find" onClick={this.onButtonSubmit} />
            </div>
            
            {this.state.repositories ? 
            <div>
            <legend class="f4 fw6 ph0 mh0 mt2">Number of Repositories: {this.state.repositories.length}</legend>
            <RepoList repos={this.state.repositories} />
            </div> : 
            <legend class="f4 fw6 ph0 mh0 mt2">No Repositories Found / User Does Not Exist</legend>
            }
            </main>
        )
    }
}

export default Dashboard;