import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startLoadingContact, startSearch } from '../action/contact';

export const NavBar = () => {


const [search, setSearch] = useState('mario')
const dispatch = useDispatch();


    const handleSearch = (e) =>{
        setSearch(e.target.value)
        if (e.target.value.trim()==='') {
            dispatch(startLoadingContact())

        }
        dispatch(startSearch(search))   
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(startSearch(search))
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between ">
                <a className="navbar-brand">NavBar</a>
                
                
                <div className="d-flex align-items-center">
                    
                    
                    <form className="form-inline ml-3 d-flex" onSubmit={handleSubmit}>
                        <button className="btn btn-outline-primary mr-2" type="submit">
                            Buscar
                        </button>
                        <input 
                            className="form-control" 
                            type='search' 
                            placeholder="Buscar" 
                            aria-label="Search" 
                            onChange={handleSearch}
                            name='search'
                            value={search}
                            autoComplete='off'
                        />
                    </form>
                </div>
            </nav>
        </div>
    )
    
}
