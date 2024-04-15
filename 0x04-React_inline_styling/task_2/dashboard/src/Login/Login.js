import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function Login() {
return (
  <div className={css(styles["App-body"])}>
    <p>Login to access the full dashboard</p>
    <div className={css(styles.login)}>
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" className={css(styles.input)} />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" className={css(styles.input)}/>
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
  },

  input: {
    margin: '0 .5vw',
    padding: '0.5vh',
  },

  button: {
    margin: '0 1vw',
    fontWeight: 'lighter',
    padding: '5px 10px',
    backgroundColor: 'transparent',
    border: '1px solid #000',
    borderRadius: '7.5px',
  },
});

export default Login;
