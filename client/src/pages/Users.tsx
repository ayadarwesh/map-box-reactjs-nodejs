import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/actions";
import {IStore} from "../models/IStore";
import Loading from "../components/Loader";
import {IUser} from "../models/IUser";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state:IStore)=>state.users.users);
    const isLoading = useSelector((state:IStore)=>state.users.loading);
    useEffect(()=>{
        dispatch(getUsers());
    },[])

    return (<>
            { isLoading ? <Loading/> :
                <List sx={{ width: '100%', maxWidth: 360, bgColor: 'background.paper' }}>
                    {users?.map((user:IUser,index)=> (<ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.name} secondary={user.email} />
                    </ListItem>))}
                </List>
            }
        </>

    )
}
export default Users
