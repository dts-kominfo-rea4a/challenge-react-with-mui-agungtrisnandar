// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";


const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name : "", 
        phone : "", 
        email : "", 
        photo : "",
    });
    
    const updateState = (e => {
        setNewContact((state) => ({...state, [e.target.id] : e.target.value}));
    })
    
    const newDataHandler = (e => {
        e.preventDefault();
        props.submitHandler(newContact);
        setNewContact({ name: "", phone: "", email: "", photo: "" });
    })

    return (
        <>
        <Card>
            <CardContent sx={{bgcolor:'grey.200'}}>
                <TextField variant="filled" fullWidth sx={{ marginBottom: "1rem" }} id="name" label="Name *" value={newContact.name} onChange={updateState}/>
                <TextField variant="filled" fullWidth sx={{ marginBottom: "1rem" }} id="phone" label="Phone *" value={newContact.phone} onChange={updateState}/>
                <TextField variant="filled" fullWidth sx={{ marginBottom: "1rem" }} id="email" label="Email *" value={newContact.email} onChange={updateState}/>
                <TextField variant="filled" fullWidth sx={{ marginBottom: "1rem" }} id="photo" label="Photo URL *" value={newContact.photo} onChange={updateState}/>
                <Button color="primary" type="submit" onClick={newDataHandler}>Add</Button>
            </CardContent>
        </Card>
        </>
    );
}

export default ContactForm;