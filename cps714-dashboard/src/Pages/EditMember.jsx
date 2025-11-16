import { useParams } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import supabase from '../supabase-client'

const EditMember = () => {
    const { id } = useParams()

    return (
    <div>
        <h2>Update - {id}</h2>
    </div>
    )
    
}



export default EditMember