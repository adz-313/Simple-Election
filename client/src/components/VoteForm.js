import React, {useState} from 'react'
import { Form, Select, Button, Grid } from 'semantic-ui-react'

const VoteForm = ({vote}) => {
    const [selectedCandidate, setSelectedCandidate] = useState(1);

    const handleChange = (event, {value}) => {
        setSelectedCandidate(value);
        console.log(value);
    }

    const handleSubmit = () => {
        console.log(selectedCandidate);
        vote(selectedCandidate);
    }

    const candidateOptions = [
        {key : 1, value: 1, text: 'Candidate 1'},
        {key : 2, value: 2, text: 'Candidate 2'}
    ]

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <Select placeholder='Select your candidate' onChange={handleChange} options={candidateOptions} />
            </Form.Field>
            <Form.Field>
                <Button type='submit' primary>Submit</Button>
            </Form.Field>
        </Form>
    )
}

export default VoteForm
