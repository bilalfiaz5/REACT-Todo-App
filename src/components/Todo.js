import React from 'react';
import {Avatar,Button, List,ListItem,ListItemAvatar,Modal,Input} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import '../components/Todo.css';
import db from '../Firebase';
import { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },  button: {
        margin: theme.spacing(1),
      },
  }));

function Todo(props) {
    const classes = useStyles();
    const deleteTodo = (e)=>{
        db.collection("todos").doc(props.todo.id).delete()
    }
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const updateTodo = ()=>{
        db.collection('todos').doc(props.todo.id).set({
            todo:input
        },{merge:true})
        setInput('');
        setOpen(false);
    }

    return (
<>
<Modal 
  open={open}
  onClose={handleClose}>
      <div className={classes.paper}>
          <h1>open</h1>
          <Input placeholder={props.todo.todo} value={input} onChange = { e=> setInput(e.target.value)} />
          <Button onClick={updateTodo} 
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<EditIcon />}
          >Update TODO</Button>
      </div>
</Modal>
<span>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    
                    </Avatar>
                </ListItemAvatar>
    <li id="litem">{props.todo.todo}</li>
                {/* <ListItemText primary = {props.todo.todo} secondary="" ></ListItemText> */}
            </ListItem>
            <EditIcon onClick={handleOpen}  id="edit-i" />
            <DeleteIcon onClick={deleteTodo} id="edit-i"/>
        </List>
        </span>
</>
     
    )
}

export default Todo;
