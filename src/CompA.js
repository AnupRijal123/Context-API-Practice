import { FirstName } from './App';
function CompA() {
    return (
        <div>
            <FirstName.Consumer>
                {(fname) => {
                    return <h1>My name is {fname}</h1>
                }}
            </FirstName.Consumer>
        </div>

    )
}
export default CompA;

//App.js ma FirstName ma lekheko value fname ma ayera basxa