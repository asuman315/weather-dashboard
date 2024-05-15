import React from 'react'

const HomePage = () => {
  return (
    <main>
        <h1>Welcome to Kampala Events Hub</h1>
        <p>Find the latest events happening in Kampala</p>
    </main>
  )
}

export default HomePage;



export const getServerSideProps = async () => {

  return { redirect: { destination: '/auth/register', permanent: false } }
};