export const lightTheme = {
  primary: '#be7810',
  secondary: '#4bd5b5',
  focus: '#e74c3c',
  background: '#c1b7a9',
  text: '#34495e',
  disabled: '#bdc3c7',
  success: '#0b9243',
  warning: '#fff441',
  error: '#e85546',
};

export const darkTheme = {
  primary: '#2980b9',
  secondary: '#27ae60',
  focus: '#c0392b',
  background: '#2c3e50',
  text: '#ecf0f1',
  disabled: '#94999d',
  success: '#36a08c',
  warning: '#f39c12',
  error: '#c85043',
};

export type CustomTheme = typeof lightTheme | typeof darkTheme;
