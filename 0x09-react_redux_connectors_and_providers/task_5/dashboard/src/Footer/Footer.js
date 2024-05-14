import React from "react";
import {StyleSheet, css} from "aphrodite";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { connect } from 'react-redux';
import { object } from 'prop-types';

export const mapStateToProps = (state) => {
  const user = state && typeof state.get === 'function' ? state.get('user') : state.ui.get('user');
  return {
    user: user,
  };
};

export function Footer({user}) {
  return (
    <footer className={css(styles["App-footer"])}>
      <hr className={css(styles.hr)}/>
      <p><em>Copyright {getFullYear()} - {getFooterCopy()}</em></p>
      {
        user &&
        <p><a href='#'>Contact us</a></p>
      }
    </footer>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.prototype = {
  user: object,
};

const styles = StyleSheet.create({
  "App-footer": {
    height: 'fit-content',
    width: '100%',
    textAlign: 'center',
    fontSize: 'calc(5px + 1vw)',
    position: 'fixed',
    bottom: '0',
  },
  hr: {
    border: 'none',
    width: '100%',
    height: '2px',
    backgroundColor: '#df344b',
  }
});

export default connect(mapStateToProps)(Footer);
