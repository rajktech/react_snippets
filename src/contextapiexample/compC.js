import {FirstName, LastName} from './compA';

//FOR SINGLE CONTEXT API VARIABLE--CONSUMER
const CompC2 = () => {
    return(
        <FirstName.Consumer>{(fname) => {
            return(
                <div>This is {fname}</div>
            );
        }}</FirstName.Consumer>
    );
}

//FOR MULTIPLE CONTEXT API VARIABLE--CONSUMER
const CompC = (props) => {
    return (
        <>
            <div> => This is comp C and name <b>{props.passedname}</b>  is passing from component A through simple props.</div>
            <FirstName.Consumer>{(fname) => {
                return(
                    <LastName.Consumer>
                        {(lname) => {
                            return(
                                <div>=>This is comp C and name <b>{fname} {lname}</b>  is passing from component A through simple props.</div>
                            );
                        }}
                    </LastName.Consumer>                    
                );
            }}</FirstName.Consumer>

            <div>
            <br /> <b>Definition:</b><br />
            Context provides a way to pass data through the component tree without having to pass props down manually at every level. — React Definition on Context API<br/>
            Means we dont have to pass data in every component. Consumer only accepts functions.
            </div>
        </>
    );
}
export default CompC;