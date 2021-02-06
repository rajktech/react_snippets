import React, {createContext} from 'react';
import CompB from './compB';
const FirstName = createContext();
const LastName = createContext();

const CompA = () => {
    return(
        <React.Fragment>
            <div>This is comp A</div>
            <FirstName.Provider value="Rajj">
                <LastName.Provider value={"Keshwani"}>
                    <CompB />
                </LastName.Provider>
            </FirstName.Provider>
        </React.Fragment>
    );
}

export default CompA;
export {FirstName, LastName};