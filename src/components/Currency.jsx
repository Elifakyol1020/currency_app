import React, { useState } from 'react'
import '../css/Currency.css'
import axios from 'axios';
let BASE_URL="https://api.freecurrencyapi.com/v1/latest";
let API_KEY="fca_live_rdzoFARmDVxyNDD0zUGmpLsziOhtl6FaipP0tMLt";

function Currency() {
let EXCHANGE_APİ=`${BASE_URL}`
    const [amount,setAmount]=useState(0);
    const [fromCurrency,setFromCurrency]=useState('USD');
    const [toCurrency,setToCurrency]=useState('TRY');
    const [result,setResult]=useState(0);
    const exchange=async()=>{
        const response=await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result=((response.data.data[toCurrency])*amount).toFixed(2);
        setResult(result);
    }
  return (
    <div className='currency-div'>
        <div>
            <h3 className='text'>DÖVİZ KURU UYGULAMASI</h3>
        </div>
        <div className='div'>
        <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" className='amount' />
        <select onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>      
        </select> 
        <select onChange={(e)=>setToCurrency(e.target.value)} className='to-currency-option'>
            <option>TRY</option>
            <option>EUR</option>
            <option>USD</option>      
        </select> 
        <input value={result} onChange={(e)=>setResult(e.target.value)} type="number" className='result' />            
        </div>
        <div className='button-div'>
            <button onClick={exchange} className='button'>Çevir</button>
        </div>
    </div>
  )
}

export default Currency
