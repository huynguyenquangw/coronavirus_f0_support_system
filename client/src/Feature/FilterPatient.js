import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState'

export default function FilterPatient(props) {

    const state = useContext(GlobalState)
    const [data,setData] = state.getAllPatientAPI.patients
    const [search, setSearch] = state.getAllPatientAPI.search
    const [page, setPage] = state.getAllPatientAPI.page
    const [sort, setSort] = state.getAllPatientAPI.sort

    const pageIncrease = () => {
        if (page > 0 && data.length) {
             setPage(i => i + 1)
        } else{
            alert("No more data available, please go back ")
        }
        
       
    }

    
    const pageDecrease = () => {
        if (page > 0) setPage(i => i - 1)
    }

    // console.log(data.length)
    return (
        <>
            Search Name: <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <br />
            <button onClick={pageDecrease}> Back </button>
            <button onClick={pageIncrease}> Next </button>
           <br />

            Sort: <select name="sort" id="sort" value={sort} onChange={e=>setSort(e.target.value)}>
                <option value=""> options</option>
                <option value="sort=-name">Name Descending</option>
                <option value="sort=+name">Name Ascending</option>
            </select>
        </>
    )
}
