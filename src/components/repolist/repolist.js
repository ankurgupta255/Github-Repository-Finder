import React from 'react';
import Repository from '../repository/repository';

const RepoList=({repos})=>{
    const RepoComponent=repos.map((repo, i)=>{
        return <Repository
        name={repos[i].name}
        url={repos[i].html_url}
        description={repos[i].description}
        />
    })
    return(
        <div>
            {RepoComponent}
        </div>
    )
}

export default RepoList;