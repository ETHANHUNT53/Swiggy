import React from "react";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h2>About Us</h2>
//       <UserClass name={"Shaurya"} location={"Prayagraj"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h2>About Us</h2>
        <UserClass name={"Child1"} location={"Prayagraj"} />
        <UserClass name={"Child2"} location={"Prayagraj"} />
        <UserClass name={"Child3"} location={"Prayagraj"} />
      </div>
    );
  }
}

export default About;
