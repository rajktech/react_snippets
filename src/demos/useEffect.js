import {useState, useEffect} from 'react';
const UseEffectComp = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    useEffect(() =>{
        alert('useEffect called');
    }, [nums]);
    return(
        <>
            <button onClick={() => setNum(num+1)}>This is count {num}</button><br />
            <button onClick={() => setNums(nums+1)}>This is new count {nums}. useEffect will be called on its click.</button>

            <div>
                <b>Description:</b><br/>
                useEffect calls after render so here I am showing alert after render but there are 2 conditions.<br/>
                a. If i will pass blank array after useEffect then it will call only after first render.<br/>
                b. If I will pass useState variable, then it will call on render of that variable.
            </div>
        </>
    );
}

export default UseEffectComp;