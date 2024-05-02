import React, {useState, useEffect} from 'react'
import { getMeUserService } from '../services/UserServices'

const Dashboard = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getMeUserService(token)
        if(response.status === 200){
          setUserData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error al obtener datos')
      }
    }

    getUserData()
 
  }, [token])
  

  return (
    <>
    <h1>Dashboard</h1>
{userData?.first_name && <p>{userData.first_name}</p>}
{userData?.first_name && <p>{userData.last_name}</p>}
{userData?.first_name && <p>{userData.gender}</p>}
{userData?.first_name && <p>{userData.email}</p>}
{userData?.first_name && <p>{userData.role}</p>}
    </>
  )
}

export default Dashboard