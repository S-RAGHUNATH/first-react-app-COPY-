import Rating from '@mui/material/Rating';
import { useState } from 'react';
export default function RatingDemo(){
    const [rate, setRate] = useState(8)
    function handleSubmit(e, newVal){ //it requires 2 params, event and newvalue as per doc
        setRate(newVal)
    }
    return (
        <div>
            <h1>rating val: {rate}</h1>
            <Rating name="simple-controlld" value={rate} onChange={handleSubmit}/>
            {/* it requires value property as per doc*/}
        </div>
    )
}