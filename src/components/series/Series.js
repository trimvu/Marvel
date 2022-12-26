import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Series = () => {


    let {series} = useParams()
  return (
    <>
        <h1>Series: {series}</h1>
    </>
  )
}

export default Series