import React from "react";

const Results = (data) => {
    return (
        <div className="container-fluid">
          <table className="table table-hover table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                </tr>
            </thead>
            <tbody>
            {data.users ? data.users.map((employee, i) => 
                <tr key={i}>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.location.city}</td>
                <td>{employee.location.country}</td>
                </tr>
                ): <p>N/A</p>}
            </tbody>
            </table>  
        </div>
    )
}

export default Results;
