import { Component } from 'react';
import './app.scss';
import { connect } from 'react-redux';
import {
  getWelcomeMessage,
} from '../actions/action_test';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: '',
    };
  }

  componentWillMount() {
    const { props } = this;
    props.getWelcomeMessage();
  }

  componentWillReceiveProps(nextprops) {
    const { hello } = nextprops;

    this.setState({ hello });
  }

  render() {
    const { hello } = this.state;
    return (
      <div>
        <p>
          React Redux Starter App
          <br />
          Hello,
          {' '}
          {hello}
          ! Go bonkers!
          <br />
          If you want the simple react starter, checkout
          {' '}
          <a href="https://github.com/thediggu/react-starter">this project</a>
        </p>
      </div>
    );
  }
}

function mapStateToProps({ test }) {
  const {
    hello,
  } = test;

  return {
    hello,
  };
}

export default connect(mapStateToProps, {
  getWelcomeMessage,
})(App);
