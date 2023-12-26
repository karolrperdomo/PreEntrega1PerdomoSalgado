import React from "react";
import { PropTypes } from "prop-types";


const UserData = ({firstName, lastName, age, birthdate, myObject}) => {
    return (
        <div>
            <ul>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{age}</li>
                <li>{birthdate}</li>
            </ul>
        </div>
    )
}

export default UserData 


UserData.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    birthdate: PropTypes.string
}