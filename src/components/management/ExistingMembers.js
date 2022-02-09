
import './ExistingMembers.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CSVLink } from 'react-csv'

const headers = [
  { label: "Serial Number", key: "Serial Number" },
  { label: "Name", key: "Name" },
  { label: "Age", key: "Age" },
  { label: "Sex", key: "Sex" },
  { label: "Driving License", key: "Driving License" },
  { label: "Smoking", key: "Smoking" },
  { label: "Phone Number", key: "Phone Number" },
  { label: "Area", key: "Area" },
  { label: "Additional Members", key: "Additional Members" },
  { label: "Demented Patients", key: "Demented Patients" },
  { label: "Incontinence", key: "Incontinence" },
  { label: "German", key: "German" },
  { label: "Expected Salary", key: "Expected Salary" },
  { label: "Night Shift", key: "Night Shift" },
  { label: "Number of Patients", key: "Number of Patients" },
  { label: "Preferred Gender", key: "Preferred Gender" },
  { label: "Preferred Region", key: "Preferred Region" },
  { label: "Immobility", key: "Immobility" },
]



const ExistingMembers = () => {
  const [members, setMembers] = useState([])
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
      const res = await axios.get("http://localhost:8080/api/v1/nurses/getnurses");
      console.log(res)
      if (res.status === 200) {
        setCsvReport({
          filename: 'Report.csv',
          data: res.data.data,
          headers: headers
        })
        setMembers(res.data.data)

        return


      }
      return alert("fail")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='members-main'>
      <div className='members-second'>
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
            {members.map((item, index) => (
              <tr key={index}>
                <td>{item.serialNumber}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.sex}</td>
                <td>{item.driveLic}</td>
                <td>{item.smoking}</td>
                <td>{item.phoneNumbers}</td>
                <td>{item.availability}</td>
                <td>{item.area}</td>
                <td>{item.addiMembers}</td>
                <td>{item.demPatient}</td>
                <td>{item.incontinence}</td>
                <td>{item.german}</td>
                <td>{item.expectedSalary}</td>
                <td>{item.nightShift}</td>
                <td>{item.numberOfPatients}</td>
                <td>{item.prefGender}</td>
                <td>{item.prefRegion}</td>
                <td>
                  {item.immobility.map((immo, key) => (
                    <span>{immo}</span>
                  ))}
                </td>

              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExistingMembers;
