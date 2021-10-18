import React from 'react'
import { Table } from 'semantic-ui-react'

const CandidateDetails = ({candidate1, candidate2}) => {
    function createData(id, name, voteCnt) {
        return { id, name, voteCnt };
    }

    const rows = [
        createData(candidate1.id, candidate1.name, candidate1.voteCount),
        createData(candidate2.id, candidate2.name, candidate2.voteCount),
    ];

    return (
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Candidate ID</Table.HeaderCell>
                <Table.HeaderCell>Candidate Name</Table.HeaderCell>
                <Table.HeaderCell>Vote Count</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            {rows.map((row) => (
                <Table.Row>
                    <Table.Cell>{row.id}</Table.Cell>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell>{row.voteCnt}</Table.Cell>
                </Table.Row>
            ))}
            </Table.Body>
        </Table>
    )
}

export default CandidateDetails
