'use client'
import { getStartPageMetaDate } from '@/services/getMetaData'
import { IWebMeta } from '@/types/api'
import React, { useEffect, useState } from 'react'

function TestApi() {
    const [data, setData] = useState<IWebMeta | null>(null)
    const {API_URL} =  process.env
    async function getData(cld:(data:IWebMeta)=>void) {
        const res = await getStartPageMetaDate()
        cld(res)
    }
    const handlerequest = () => {
        setData && getData(setData)
        console.log("hanlder process.env client",process.env)
    }

    console.log("process.env client",process.env)
  return (
    <div>
        <h1 style={{marginTop:'5rem'}}>API test</h1>
        <button  type='button' onClick={handlerequest}>fetch</button>
        {
            data && <p>{JSON.stringify(data)}</p>
        }
    </div>
  )
}

export default TestApi