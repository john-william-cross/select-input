import React from "react";

// function formatName(user) {
//    return user.firstName + " " + user.lastName;
// }

// const user = {
//    firstName: "John",
//    lastName: "Cross",
// };

class SelectInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = { value: "A-Z" };
   }

   handleChange(e) {
      this.setState({ value: e.target.value });
   }
   render() {
      return (
         <div>
            <select
               value={this.state.value}
               onChange={(e) => this.handleChange(e)}
               className="float-right dropdown col-5 form-control pl-0 form-control-lg"
            >
               <option value="A-Z">A-Z</option>
               <option value="Z-A">Z-A</option>
            </select>
            {/* <h1> Hello, {formatName(user)}</h1> */}
            <h1>Apple</h1>
            <h1>Banana</h1>
         </div>
      );
   }
}

export default SelectInput;
