const ParentComp = () => {
    const parentHandler = () => {
        alert("Parent Clicked");
    }

    const myStyle = {
        backgroundColor: 'red'
    };

    const myStyleChild = {
        backgroundColor: 'green'
    }
    return(
        <div>
            <div style={myStyle}>
                This is parent  <br/>          
                <button onClick={parentHandler.bind(this)}>Parent function Click</button>
            </div>
            <br/><br/>
            <div style={myStyleChild}>
                <ChildComp name="raj" parentHandlercallinChild={parentHandler} />
            </div>            
        </div>
    );
}

const ChildComp = (myProps) => {
    const childHandler = () => {
        alert("Child clicked");
    }
    return(
        <>
            <div>This is child ({myProps.name})</div>
            <button onClick={childHandler.bind(this)}>Child function Click</button><br/>
            <button onClick={myProps.parentHandlercallinChild.bind(this)}>Parent function Click from child</button>
        </>
    );
}

export default ParentComp;