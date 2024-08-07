import React from 'react'
import styled from 'styled-components'
import ContestInfo from '../components/ContestInfo'
import Topbar from '../components/Topbar'

const Layout = styled.div`
width : 1920px;
display : flex;
flex-direction : column;
justify-content:center;
align-items : center;
`
const TeamMatching = () => {
  return (
    <Layout>
    <Topbar />
    <ContestInfo />

    </Layout>

  )
}
export default TeamMatching;