const styles = {
  root: {
    lineHeight: 0,
    marginTop: '16px'
  },
  input: {
    height: '1px',
    width: '1px',
    margin: '-1px',
    clip: 'rect(0 0 0 0)',
    position: 'absolute'
  },
  switch: {
    boxSizing: 'content-box',
    display: 'inline-block',
    width: '8em',
    height: '4em',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    background: '#EEEEEE',
    borderRadius: '4em',
    padding: '4px',
    transition: 'all 0.4s ease',
    border: '2px solid #e8eae9',
    '&::after': {
      left: '0',
      position: 'relative',
      display: 'block',
      content: '" "',
      width: '50%',
      height: '100%',
      borderRadius: '4em',
      background: '#ffffff',
      transition:
        'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease',
      boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08)'
    },
    '&:active::after': {
      paddingRight: '1.6em',
      boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.1)'
    }
  },
  switchOn: {
    background: '#69f0ae',
    '&::after': {
      left: '50%'
    },
    '&:active::after': {
      marginLeft: '-1.6em',
      boxShadow: 'none'
    }
  }
};

export default styles;
