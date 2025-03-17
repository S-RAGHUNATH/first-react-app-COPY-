import { useEffect, useState } from "react";

const RANDOM_qUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

function useEffecttt(){
    const [quote, setQuote] = useState({text:'', author:""})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetchQuote()
    }, [])

    async function fetchQuote(){
        const response = await fetch(RANDOM_qUOTE_URL)
        const jresponse = await response.json();
        const randQuote = jresponse.quote;
        setQuote(randQuote);
        setIsLoading(false)
    
    }
        return (
            <div>
                <button onClick={fetchQuote}>get quote</button>
                <p className="Loader" style={{opacity: isLoading? 1:0}}>loading.....</p>
                <h1>{quote.text}</h1>
                <h3>{quote.author}</h3>
            </div>
        )

}



export default useEffecttt;