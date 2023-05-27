import React from 'react'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Check Your Marks</h1>
        <p>Check choose an option below</p>

      </section>
      <Link to='/upload' className='btn btn-reverse btn-block'>
        <FaQuestionCircle />Upload Files
      </Link>
      <Link to='/fileUploads' className='btn btn-reverse btn-block'>
        <FaTicketAlt />View Documents   
      </Link>
    </>
  )
}

export default Home