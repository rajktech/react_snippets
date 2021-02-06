import {useContext} from 'react'
import {FirstName, LastName} from './compA';
const CompC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return(
        <>
            This is comp C
            <div>My name is <b>{fname} {lname}</b> and This is coming from useContext hooks from Component A rather than context api</div>

            <div>
                <br/><b>Definition:</b><br/>
                If you have to pass only data without passing to intermediate components, then use useContext hooks rather than redux.
            </div>
        </>
    );
}

export default CompC;