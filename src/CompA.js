import { FirstName, LastName } from './App';
function CompA() {
    return (
        <div>
            {/* <FirstName.Consumer>
                {(fname) => {
                    return <h1>this is firstname: {fname}</h1>
                }}
            </FirstName.Consumer>
            <LastName.Consumer>
                {(lname) => {
                    return <h1>this is lastname: {lname}</h1>
                }}
            </LastName.Consumer> */}
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return <h1>My name is {fname} {lname}</h1>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </div>

    )
}
export default CompA;

//App.js ma FirstName ma lekheko value fname ma ayera basxa
//inside consumer there should only be function i.e.<Consumer>function</Consumer>