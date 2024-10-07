import {useState, useRef} from "react";
// import TodoTable from "./TodoTable"
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack'

export default function ToDoList() {
// Vaihtoehtoisesti export default ToDolist; koodin pohjalle

    const [todo, setToDo] = useState({
        // Alustus olioksi

        description: "",
        date: "",
        priority: ""
    });

    const [todos, setToDos] = useState([]);

    const gridRef = useRef();

    const[colDefs, setColDefs] = useState([
        {field: "description", filter: true},
        {field: "priority", 
            cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}
        },
        {field: "date"}
    ]);

    const handleAdd = () => {
        if (!todo.description.trim()) {
            alert("Type description first!");
        }
        else {
        setToDos([todo, ...todos]);
        setToDo({description: "", date: "", priority: ""});
        // Kentän tyhjennys
        }
    }

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0){
        setToDos(todos.filter((todo, index) =>
            index != gridRef.current.getSelectedNodes()[0].id));
        }
        else {
            alert("Select row first!");
        }
        // Filterillä suodatetaan taulukko
        // True -> tulee taulukkoon
    }

    return (
        <>
            <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">
                <TextField
                    label="Description"
                    value={todo.description}
                    onChange={event => setToDo({...todo, description: event.target.value})}
                    // Ottaa todon asiat ja päivittää description-olion tallentamalla
                    // siihen tietoa
                />
                <TextField
                    label="Priority"
                    value={todo.priority}
                    onChange={event => setToDo({...todo, priority: event.target.value})}
                    // Ottaa todon asiat ja päivittää description-olion tallentamalla
                    // siihen tietoa
                />
                <TextField
                    label="Date"
                    value={todo.date}
                    onChange={event => setToDo({...todo, date: event.target.value})}
                />
                <Button variant="contained" onClick={handleAdd}>Add ToDo</Button>
                <Button variant="contained" endIcon={<DeleteIcon />} color="error" onClick={handleDelete}>Delete</Button>
            </Stack>

            <div className="ag-theme-material"
            style={{ height: 500, width:"90%" }}>

            <AgGridReact
            rowData={todos}
            columnDefs={colDefs}
            selection="singleRow"
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            />
            </div>
        </>
    );
};

// <TodoTable handleDelete={handleDelete} todos={todos}/>