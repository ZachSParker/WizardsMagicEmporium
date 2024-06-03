import React from 'react'
import { Container, Table } from 'react-bootstrap'

const Home = () => {
  return (
    <Container>
            <h2>Products for Sale</h2>
          <Table striped bordered hover variant='info' className='mx-auto my-auto border border-0 rounded-2 py-2' >
              <thead className='border border-0 rounded-2'>
                  <tr>
                      <th>Name</th>
                      <th>Date Posted</th>
                      <th>Price</th>
                      <th>Owner</th>
                  </tr>
              </thead>
              <tbody>



              </tbody>
          </Table>
    </Container>
  )
}

export default Home