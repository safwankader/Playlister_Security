import { useContext } from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { Modal } from '@mui/material';
import AuthContext from '../auth';

export default function MUIAlerts() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
};

  const {auth} = useContext(AuthContext);

  function handleClose(event) {
    auth.noError();
  }

  {console.log(auth.hasError())}
  return (
    <Modal open={auth.hasError()}>
      <Box sx={style}>
        <Collapse in={true}>
          <Alert
            severity='error'
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {auth.errormessage}
          </Alert>
        </Collapse>
      </Box>
    </Modal>
  );
}