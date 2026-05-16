import React from 'react';
import useFirstJobs from '../Elements/useFetchJobs'
import { Container } from 'reactstrap';

function Job() {
  const { jobs, loading, error } = useFirstJobs()
  return (
    <>
      <Container>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try Refreshing</h1>}
        <h1>{jobs.length}</h1>
      </Container>
    </>

  )
}

export default Job;