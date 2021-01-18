import React from 'react'

function SampleTable(){

    const data = [
        {
            "id":"1",
            "name":"Sheik",
            "phone":"9994648367"
        },
        {
            "id":"2",
            "name":"Abudhahir",
            "phone":"9994648367"
        },
        {
            "id":"3",
            "name":"Sharp",
            "phone":"9994648367"
        },
    ]

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data)=>{
                            return <tr><td>{data.id}</td><td>{data.name}</td><td>{data.phone}</td></tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SampleTable;