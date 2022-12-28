// Write your Character component here
import React, { Fragment, useState } from "react";
// import styled from "styled-components";

 export default function Character({data}) {
    const [ open, setOpen ] = useState(false);
    return (
        <div className='characters-container'>
            <h3>{data.name}</h3>
            <button onClick={() => setOpen(!open)}>See Details</button>
            {open && (
                <Fragment>
                    <p>{data.birth_year}</p>
                    <p>{data.gender}</p>
                    <p>{data.height}</p>
                    <p>{data.mass}</p>
                    <p>{data.hair_color}</p>
                    <p>{data.eye_color}</p>
                    <p>{data.skin_color}</p>
                </Fragment>
            )}
        </div>
    )
}
