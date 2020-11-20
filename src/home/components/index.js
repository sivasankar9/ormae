import React from 'react';
import Table from './table';

export default(props)=>{
    debugger;
    return <section>
            <article>You’ve been tasked to create a data table using the following API
    (http://jsonplaceholder.typicode.com/photos). Use these (_start=0&_limit=5) query params to limit the data being fetched for each call. The idea is to be able to pull in the data from the API and store it in application store. Render the data in the store efficiently in a table view.
    Keep the store in sync with each API call. 
    State management can be implemented using any library, 
    but we recommend Redux.
    </article>
    <h3>Repo Path</h3>
        <Table/>
        </section>
}


