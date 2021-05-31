import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,Button,TextField} from '@material-ui/core';
import StarRatingComponent from 'react-star-rating-component';
import {v4 as uuidv4 } from 'uuid'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddMovie({getInputData}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [input, setInput] = useState({
     id:uuidv4(),
     title:'',
      img:'',
      desc:'',
  });
 const [rate, setRate] = useState(0);
const handleInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});

};
const handleAdd = (e) => {
    e.preventDefault();
    getInputData({ ...input,rate: rate});
};

  return (
    <div>
      <Button variant="contained" color="primary" type="button" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
    <form>
    <TextField type="text" name='title' placeholder="movie title" onChange={handleInput}/> <br/>
    <TextField type="text" name='description' placeholder="movie description" onChange={handleInput}/> <br/>
    <TextField type="text" name='img' placeholder="movie image" onChange={handleInput}/> <br/>
    <StarRatingComponent className='star-rating'
          name="rate" 
          starCount={5}
          value={rate}
          onStarClick={(value)=>setRate(value)}
        /> <br/>
        <Button type='submit' onClick={handleAdd} variant="outlined">Add movie</Button>
        </form>
    </div>
      </Modal>
    </div>
  );
}