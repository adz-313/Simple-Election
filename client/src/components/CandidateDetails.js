import * as React from 'react';

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@material-ui/core';

function createData(id, name, voteCnt) {
  return { id, name, voteCnt };
}



const CandidateDetails = ({candidate1, candidate2}) => {

    const rows = [
        createData(candidate1.id, candidate1.name, candidate1.voteCount),
        createData(candidate2.id, candidate2.name, candidate2.voteCount),
    ];

    return (
    <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Candidate ID</TableCell>
                <TableCell align="right">Candidate Name</TableCell>
                <TableCell align="right">Vote Count</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow key={row.id} >
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.voteCnt}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}

export default CandidateDetails