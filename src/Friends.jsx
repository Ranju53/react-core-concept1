import React, { useEffect, useState } from 'react';
import Fnd from './Fnd';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div style={{border:"2px solid tomato", margin:'15px', borderRadius:"10px" , padding:'10px'}}>
           <h3>Friends {friends.length} </h3> 
           {friends.map(fnd=><Fnd key={fnd.id} fnd={fnd}/>)}
        </div>
    );
};

export default Friends;