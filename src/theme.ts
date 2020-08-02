import { createMuiTheme } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: lightBlue['50'],
    },
  },
  props: {
    MuiContainer: {
      maxWidth: 'md',
    },
  },
});

export default theme;
