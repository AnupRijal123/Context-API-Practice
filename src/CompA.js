import { FirstName, LastName } from './App';
import { useContext } from 'react';
function CompA() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <div>
            <h1>My name is {fname} {lname}</h1>
        </div>

    )
}
export default CompA;

//App.js ma FirstName ma lekheko value eta fname ma ayera basxa
//App.js ma LastName ma lekheko value eta lname ma ayera basxa


