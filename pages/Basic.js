import React from 'react'
import useSWR from 'swr' 
import axios from 'axios'
import { VictoryBar } from 'victory'

function Basic() {
    var dataGraph = []
    const fetcher = url => axios.get(url, {mode:'no-cors', headers: {
        'crossDomain': true,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }}).then(res => res.data)

    //const { data, error } = useSWR('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5', fetcher)
    const { data, error } = useSWR(NEXT_PUBLIC_NUMBERS_API_URI, fetcher)
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
        
    return (
        <div>Data: <br/> 
        {console.log(data.result)}
         <VictoryBar data={data.result} x='period' y='value' />
        </div>
    )
}

export default Basic 
