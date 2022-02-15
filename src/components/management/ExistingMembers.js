
import './ExistingMembers.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CSVLink } from 'react-csv'
import loadingIcon from '../../assets/loading.gif'
import Pagination from '../utils/Pagination'
import { baseUrl } from '../constants/BaseUrl'

const headers = [
  { label: "Serial Number", key: "serialNumber" },
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Sex", key: "sex" },
  { label: "Driving License", key: "driveLic" },
  { label: "Smoking", key: "smoking" },
  { label: "Phone Number", key: "phoneNumber" },
  { label: "Area", key: "area" },
  { label: "Additional Members", key: "addiMembers" },
  { label: "Demented Patients", key: "demPatients" },
  { label: "Incontinence", key: "incontinence" },
  { label: "German", key: "german" },
  { label: "Expected Salary", key: "expectedSalary" },
  { label: "Night Shift", key: "nightShift" },
  { label: "Number of Patients", key: "numberOfPatients" },
  { label: "Preferred Gender", key: "preferredGender" },
  { label: "Preferred Region", key: "preferredRegion" },
  { label: "Immobility", key: "immobility" },
  { label: "Availability", key: "availability" }
]



const ExistingMembers = () => {
  const [members, setMembers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const [loading, setLoading] = useState(true)
  const [csvReport, setCsvReport] = useState({
    filename: '',
    data: '',
    headers: ''
  })
  useEffect(() => {
    getMembers();
  }, [])
  const getMembers = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/nurses/getnurses`);
      console.log(res)
      if (res.status === 200) {
        setCsvReport({
          filename: 'Report.csv',
          data: res.data.data,
          headers: headers
        })
        setMembers(res.data.data)
        setLoading(false)
        return
      }
      return alert("fail")
    } catch (error) {
      console.log(error)
    }
  }
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = members.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <div className='members-main'>
      {!loading ?
        <div className='members-second'>
          {console.log(csvReport)}
          <CSVLink {...csvReport}>Export CSV</CSVLink>
          <table className="table">
            <thead className="thead-dark">
              <tr className='table-headers-main'>
                <th className='table-headers' scope="column">Serial Number</th>
                <th className='table-headers' scope="column">Name</th>
                <th className='table-headers' scope="column">Age</th>
                <th className='table-headers' scope="column">Sex</th>
                <th className='table-headers' scope="column">Driving License</th>
                <th className='table-headers' scope="column">Smoking</th>
                <th className='table-headers' scope="column">Phone Number</th>
                <th className='table-headers' scope="column">Availability</th>
                <th className='table-headers' scope="column">Area</th>
                <th className='table-headers' scope="column">Additional Members</th>
                <th className='table-headers' scope="column">Demented Patients</th>
                <th className='table-headers' scope="column">Incontinence</th>
                <th className='table-headers' scope="column">German</th>
                <th className='table-headers' scope="column">Expected Salary</th>
                <th className='table-headers' scope="column">Night Shift</th>
                <th className='table-headers' scope="column">Number of Patients</th>
                <th className='table-headers' scope="column">Preferred Gender</th>
                <th className='table-headers' scope="column">Preferred Region</th>
                <th className='table-headers' scope="column">Immobility</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((item, index) => (
                <tr key={index}>
                  <td>{item.serialNumber}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.sex}</td>
                  <td>{item.driveLic}</td>
                  <td>{item.smoking}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.availability}</td>
                  <td>{item.area}</td>
                  <td>{item.addiMembers}</td>
                  <td>{item.demPatients}</td>
                  <td>{item.incontinence}</td>
                  <td>{item.german}</td>
                  <td>{item.expectedSalary}</td>
                  <td>{item.nightShift}</td>
                  <td>{item.numberOfPatients}</td>
                  <td>{item.prefGender}</td>
                  <td>{item.prefRegion}</td>
                  <td>{item.immobility.join()}</td>

                </tr>
              ))}


            </tbody>
          </table>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={members.length}
            paginate={paginate}
          />
        </div>
        :

        <div className="spinner">
          <img src={loadingIcon} alt="loading" />
        </div>

      }
    </div>
  );
};

export default ExistingMembers;
