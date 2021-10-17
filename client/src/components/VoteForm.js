import React, { useState } from 'react'
import { Container, Grid, InputLabel, MenuItem, FormControl, Select, Button } from '@material-ui/core';

const VoteForm = ({ vote }) => {

    const [selectedCandidate, setSelectedCandidate] = useState('');

    const handleChange = (event) => {
        setSelectedCandidate(event.target.value);
        
    }

    const handleSubmit = () => {
        console.log(selectedCandidate);
        vote(selectedCandidate);
    }

    return (
        <Container>
            <Grid container>
                <Grid item lg={10}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Candidate</InputLabel>
                        <Select
                            value={selectedCandidate}
                            label="Candidate"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Candidate 1</MenuItem>
                            <MenuItem value={2}>Candidate 2</MenuItem>
                        </Select>
                    </FormControl>  
                </Grid>
                <Grid item> 
                    <Container>
                    <Button variant="contained" onClick={handleSubmit}>Vote</Button> 
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default VoteForm
