// import React from "react";
// import styled from "styled-components";

// const Input = styled.input`
//     & + div {
//         display: none;
//     }
//     &.check{
//         &+div{
//             display : block;
//         }
//     }
// `;

// class Student extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             checked:false,
//             checkedStyle :false
//         };
//     }

//     handleChange = event => {
//            this.setState({checked : event.target.checked});
//     };
     
//     handleChange = event => {
//         this.setState({checkedStyle: event.target.checked});
//     };

//     render(){
//         return (
//         <div>
//           <input type="checkbox" name="checkbox" 
//           onChange={this.handleChange}/>
//           <br />
//           <Input
//              type="checkbox"
//              name="checkbox"
//              onChange={this.handleChangeStyled}
//              className={this.state.checkedStyle && "check"}
//           />
//            <div>Check-Styled</div>    
//           </div>
//         );
//     }      
// }

// export default Student;