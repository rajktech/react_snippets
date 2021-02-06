import { useState } from "react";

const Changebghooks = () => {
    const [bg, SetBg] = useState('red');
    const [dialog, SetDialog] = useState('My name is Raj');

    const changebgcolor = () => {
        SetBg('green');
    }
    return(
        <div style={{backgroundColor: bg, height: '500px', textAlign: 'center'}}>
            <button onClick={changebgcolor}>Click Me</button>
            <button onClick={() => SetDialog('naam to suna ho hoga')}>Change Dialog</button>
            <div>{dialog}</div>
        </div>
    );
}

export default Changebghooks;