import React from 'react';

const Repository=(props)=>{
    return(
        <div class="mw6 hidden ba mv4 ">
        <a href={props.url}>
        <h1 class="f4 bg-near-black white mv0 pv2 ph3">{props.name}</h1>
        </a>
        <div class="pa3 bt">
            <p class="f6 f5-ns lh-copy measure mv0">
            {props.description}
            </p>
        </div>
        </div>
    )
}

export default Repository;