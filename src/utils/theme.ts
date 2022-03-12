/* eslint-disable @typescript-eslint/naming-convention */

import { createTheme } from '@mui/material';
// TODO: Fix eslint later

export const appTheme = createTheme({
  palette: {},
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});
