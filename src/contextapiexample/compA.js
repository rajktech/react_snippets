import React, { createContext } from 'react';
import CompB from './compB';
const FirstName = createContext();
const LastName = createContext();

//FOR SINGLE CONTEXT API VARIABLE--PROVIDER
const CompA2 = () => {
    const name = "raj";    
    return (
        <>
            <div>=>This is Component A</div>  <br/>          
            <FirstName.Provider value="Rajj">
                <CompB name={name} />
            </FirstName.Provider>
        </>
    );
}

//FOR MULTIPLE CONTEXT API VARIABLE--PROVIDER
const CompA = () => {
    const name = "Raj Keshwani"; 
    return(
        <React.Fragment>
            => This is Component A
            <FirstName.Provider value="rajuu">
                <LastName.Provider value="kumar">
                    <CompB passedname={name} />
                </LastName.Provider>            
            </FirstName.Provider>
        </React.Fragment>
    );
}

export default CompA;
export { FirstName, LastName };