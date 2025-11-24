import React, {useState, useEffect} from 'react'
import supabase from '../supabase-client'
import ClassCard from '../Components/ClassCard'


const ViewClass = () => {

  const [classData, setClass] = useState([])
  const [fetchError, setFetchError] = useState([])
  

  useEffect(() => {
    const fetchClass = async() => {
      const { data, error } = await supabase
        .from('classData')
        .select()

        if (error) {
          setFetchError('Could not get class data.')
          setClass([])
          console.log(error)
        }

        if (data) {
          setClass(data)
          console.log(data)
          setFetchError([])
        }
    }

    fetchClass()

  }, [])
  

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {classData && (
        <div className='members'> 
          <div className='members-grid'>
            {classData.map(classData => (
            <ClassCard key={classData.class_id} classData={classData} />
          ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewClass