import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth } from "@/context/AuthContext";
import { Container, Table } from 'react-bootstrap';
import TableRow from '@/components/TableRow';

const Dashboard = () => {
  const { user } = useAuth()

  const [listData, setListData] = useState([]);

  const getListData = () => {
    axios.get('https://back-nodejs2.vercel.app/api/restaurants').then(res => {
      setListData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getListData()
  }, []);

  function DataTable() {
    return listData.map((res, i) => {
      return <TableRow obj={res} key={i} />;
    });
  }

  return (
    <>
      <div>{user ? "Welcome, " + user.email : ""}</div>
      <Container>
        <h1 className="text-center my-3 ">Restaurant in Yaowarat</h1>
        <div className='table-wrapper mt-5'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {DataTable()}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  )
}

export default Dashboard