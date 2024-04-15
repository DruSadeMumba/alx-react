import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function Login() {
return (
  <div className={css(styles["App-body"])}>
    <p>Login to access the full dashboard</p>
    <div className={css(styles.login)}>
      <div className={css(styles.email)}>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" className={css(styles.input)} />
      </div>
      <div className={css(styles.password)}>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" className={css(styles.input)}/>
      </div>
      <button type="submit" className={css(styles.button)}>OK</button>
    </div>
  </div>
  );
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
    fontWeight: 'lighter',
    padding: '5px 10px',
    backgroundColor: 'transparent',
    border: '1px solid #000',
    borderRadius: '7.5px',
    '@media (max-width: 900px)': {
      margin: '0',
    }
  },
});

export default Login;
