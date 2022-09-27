// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography, Divider } from '@mui/material';


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        alt={data.name}
                        src={data.photo}
                        sx={{ width: 64, height: 64 }}
                    ></Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography>{data.name}</Typography>
                    }
                    secondary={
                        <>
                            <Typography>{data.phone}</Typography>
                            <Typography>{data.email}</Typography>
                        </>
                    }
                    sx={{ ml: 2 }}
                ></ListItemText>
            </ListItem>
            <Divider variant="middle" />
        </>
    );
};

export default Contact;
