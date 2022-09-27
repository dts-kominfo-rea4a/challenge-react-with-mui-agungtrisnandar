import { useState } from 'react';
import { Card, CardContent, Container,  Grid } from '@mui/material';
import './App.css';

// import component
import Contact from './components/Contact'
import Header from './components/Header';
import ContactForm from './components/ContactForm';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON)

  const formSubmitHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container sx={{padding:'2rem'}}>
        <Grid item xs={6}>
          <Container>
            <ContactForm submitHandler={formSubmitHandler} />
          </Container>
        </Grid>
        <Grid item xs={6}>
        <Card sx={{ backgroundColor: "#DBF6FA" }}>
          <CardContent>
            {contacts.map((data, i) => (
              <Contact key={i} data={data} />
            ))}
          </CardContent>
        </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
