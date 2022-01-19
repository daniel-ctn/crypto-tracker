import { Dispatch, FC, ReactNode, SetStateAction, SyntheticEvent, useState } from 'react'
import { Backdrop, Box, Fade, Modal, Tab, Tabs, Typography } from '@mui/material'

import Login from 'components/auth/Login'
import SignUp from 'components/auth/SignUp'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'white',
}

interface AuthModalProps {
  open: boolean
  handleClose: Dispatch<SetStateAction<boolean>>
}

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const AuthModal: FC<AuthModalProps> = ({ open, handleClose }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs variant='fullWidth' value={value} onChange={handleChange}>
              <Tab label='Log In' id='tab-1' />
              <Tab label='Sign Up' id='tab-2' />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Login/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUp/>
          </TabPanel>
        </Box>
      </Fade>
    </Modal>
  )
}

export default AuthModal
