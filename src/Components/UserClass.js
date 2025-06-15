import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " constructor");
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + " component did mount");
    const data = await fetch("https://api.github.com/users/ethanhunt53");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("component did update");
  }
  render() {
    const { login, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    // console.log(this.props.name + " render");
    return (
      <div>
        <h3>Name: {login}</h3>
        <h3>Location: {location}</h3>
        <img src={avatar_url}></img>
        <h3>Count:{count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease
        </button>
      </div>
    );
  }
}

export default UserClass;
