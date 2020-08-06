const styles = theme => ({
  ...theme.mixins.stage,
  button: {
    display: 'block',
    boxSizing: 'border-box',
    minWidth: '200px',
    textTransform: 'uppercase',
    padding: '16px',
    borderStyle: 'none',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    /* [START button state] */
    backgroundColor: '#4285f4', // 1. default state
    '&:hover': {
      backgroundColor: '#296CDB'
    },
    '&:focus': {
      backgroundColor: '#0F52C1',
      // 2. Suppressing default browser styles when focused
      outline: 0
    },
    '&:active': {
      backgroundColor: '#0039A8'
    },
    /* [END button state] */

    /* [START Webkit specific] */
    // 3. Webkit / Chrome Specific CSS to remove tap highlight color
    WebkitTapHighlightColor: 'transparent',
    /* [END webkit-specific] */

    /* [START Firefox specific] */
    // 4. remove gradient background on button element
    backgroundImage: 'none',
    // 5. remove outline on touchable elements
    '&::-moz-focus-inner': {
      border: 0
    },
    /* [END Firefox specific] */

    userSelect: 'none' // 6. disabling user-select
  }
});

export default styles;
