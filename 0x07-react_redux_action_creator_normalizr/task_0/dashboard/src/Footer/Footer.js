import React, {useContext} from "react";
import {StyleSheet, css} from "aphrodite";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext";

function Footer() {
  const { user } = useContext(AppContext);
  return (
    <footer className={css(styles["App-footer"])}>
      <hr className={css(styles.hr)}/>
      <p><em>Copyright {getFullYear()} - {getFooterCopy()}</em></p>
      {
        user.isLoggedIn&& (
          <p><a href='#'>Contact us</a></p>
        )
      }
    </footer>
  );
}

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

export default Footer;
