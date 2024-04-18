import React from 'react';
import {StyleSheet, css} from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, email: '', password: '', enableSubmit: false, };
  }
  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
    this.validateForm();
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
    this.validateForm();
  };

  validateForm = () => {
    if (this.state.email !== '' && this.state.password !== '') {
      this.setState({ enableSubmit: true });
    }
    console.log('Enable submit: ', this.state.enableSubmit);
  };

  render() {
    return (
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.login)} onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.email)}>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" className={css(styles.input)} value={this.state.email} onChange={this.handleChangeEmail} autoComplete="true"/>
          </div>
          <div className={css(styles.password)}>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" className={css(styles.input)} value={this.state.password} onChange={this.handleChangePassword} autoComplete="true"/>
          </div>
          <input type="submit" className={css(styles.button)} value='OK' disabled={ !this.state.enableSubmit }/>
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  'App-body': {
    margin: 'calc(8px + 1vw) 0 0 calc(8px + 1vw)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    fontSize: 'calc(.7rem + 0.5vw)',
  },

  login: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
    }
  },

  input: {
    margin: '.2vw .5vw',
    padding: '0.5vh',
    '@media (max-width: 900px)': {
      border: 'none',
      margin: '0',
    }
  },

  button: {
    margin: '0 1vw',
    padding: '5px 10px',
    color: '#df344b',
    backgroundColor: 'transparent',
    border: '2px solid #df344b',
    borderRadius: '7.5px',
    '@media (max-width: 900px)': {
      margin: '0',
    }
  },
});

export default Login;
