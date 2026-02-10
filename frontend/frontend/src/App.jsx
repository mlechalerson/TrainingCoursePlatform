import { useEffect, useState } from 'react'
import './App.css'
import Authentication from './Authentication'
import ContentWrapper from './ContentWrapper'

function App() {

  return (
    <>
      <Authentication>
        <ContentWrapper>

        </ContentWrapper>
      </Authentication>
    </>
  )
}

export default App
