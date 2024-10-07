import ToDoList from './ToDoList'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// package.json --> Reactin toiminnallisuus
// Scripts --> toiminnot esim. npm dev


// import React from 'React' --> React.useState(0)
// Toinen tapa, jolla käyttää State

/*

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
*/

function App() {
  return(
  <Container maxWidth="xl">
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3">
          My Todos
        </Typography>
      </Toolbar>
      </AppBar>
    <ToDoList />
  </Container>
  )
}

export default App

/*
return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
*/