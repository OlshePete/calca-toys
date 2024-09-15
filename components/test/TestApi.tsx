'use client'
import { getStartPageMetaDate } from '@/services/getMetaData'
import { IWebMeta } from '@/types/api'
import React, { useEffect, useState } from 'react'

function TestApi() {
    const [data, setData] = useState<IWebMeta | null>(null)
    const {API_URL} =  process.env
    useEffect(() => {
        async function getData(cld:(data:IWebMeta)=>void) {
            const res = await getStartPageMetaDate()
            cld(res)
        }
        setData && getData(setData)
    }, [setData])
    console.log("API_URL client",API_URL)
  return (
    <div>
        <h1 style={{marginTop:'5rem'}}>API test</h1>
        {
            data && <p>{JSON.stringify(data)}</p>
        }
    </div>
  )
}

export default TestApi