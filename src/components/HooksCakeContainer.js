import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainers() {
    const numOfCakes= useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number Of Cakes(HookContainers) - {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>

        </div>
     );
}

export default HooksCakeContainers;