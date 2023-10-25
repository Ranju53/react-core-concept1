import React from 'react';

const Fnd = ({fnd}) => {
    const {name, email} = fnd;
    return (
        <div style={{border:"2px solid tomato", margin:'15px', borderRadius:"10px" , padding:'10px'}}>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    );
};

export default Fnd;