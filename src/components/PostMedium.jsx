import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Input from '@material-ui/core/Input'


function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 80,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 5,
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
  },
  input: {
    margin: theme.spacing.unit,
  },
})

const SimpleModal = (props) => {
  const {
    isOpen, classes, handleClose, onClick,
  } = props

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="title" id="modal-title">
              New Post

          </Typography>
          <div className={classes.container}>
            <Input
              placeholder="Please write title"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Input
              placeholder="Tag for the article"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </div>
          <Button onClick={onClick} variant="contained" color="primary" className={classes.button}>
              Send
            <Icon className={classes.rightIcon}>
                send
            </Icon>
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default withStyles(styles)(SimpleModal)
