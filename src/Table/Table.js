import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) 

      this.state = { 
         data: [ ]
      }

      this.getData()
   }

   deleteRecord(id){
        console.log(id)
        const newList = this.state.data;
       // console.log(newList.findIndex(obj => obj.id === id))
        newList.splice(newList.findIndex(obj => obj.id === id), 1)
        //console.log(newList)
        this.setState({data:newList})
   }
  

   renderTableData() {
    return this.state.data.map((data, index) => {
       const { id, name, phone, email } = data 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{phone}</td>
             <td>{email}</td>
             <td><button id="btn" onClick={()=>this.deleteRecord(id)}>delete</button></td>
          </tr>
        )
        })
    }
    

    getData(){
        return fetch("http://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
          this.setState({ data: res });
        });
    }

    renderTableHeader(){
        if(!this.state.data.length) return null;
        return (
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
        )
    }

   render() { 
      return (
         <div>
            <h1 id='title'>Sample Table</h1>
            <table id='data'>
               <tbody>
                        {this.renderTableHeader()}
                        
                        {this.renderTableData()}
               </tbody>
            </table>
         </div>

      )
   }
}

export default Table