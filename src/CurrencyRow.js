import React from 'react'

export default function CurrencyRow() {
    return (
        <div className='currency-row'>
            <input type="number" className='input' />
            <select name="" id="">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">GBP</option>
            </select>
        </div>
    )
}