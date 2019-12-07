import React from 'react';

const Page1 = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Home page</h1>
            <button type="button" class="btn btn-danger" onClick={props.history.goBack}>Go back</button>
        </div>)

}
export default Page1;

