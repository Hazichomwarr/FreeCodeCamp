import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Quote from './Quote'

export function QuoteDisplayer(props) {
   const [quote, setQuote] = useState('')
   const [author, setAuthor] = useState('')

    async function fetchData() {
        const res = await axios.get(`https://type.fit/api/quotes?_limit=10`)
        setQuote(res.data[Math.floor(Math.random()*res.data.length)].text)
        setAuthor(res.data[Math.floor(Math.random()*res.data.length)].author)

    }
    useEffect(() => {
        fetchData(); 
    }, [props.id])

   return (
    <div>
        <Quote 
        quote={quote}
        author={author}
        fetchData={fetchData}
        />   
    </div>
   )
}