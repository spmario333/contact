import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalOpen, startLoadingContact, startSearch } from '../action/contact';
import { ButtonAuth } from './ButtonAuth';
import { Button } from 'react-bootstrap';

export const NavBar = () => {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch();
    const {ok} = useSelector(state => state.auth)


    const handleSearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value.trim() === '') {
            dispatch(startLoadingContact())

        }
        dispatch(startSearch(search))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(startSearch(search))
    }


    const handleNewContact = () =>{
        dispatch(modalOpen())

    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between ">
                <a className="navbar-brand">
                    {<ButtonAuth />}
                </a>


                <div className="d-flex align-items-center">

                   { (ok)&&
                   ( <Button
                        className="btn btn-primary mr-2 "
                        onClick={handleNewContact}


                    >
                        Nuevo
                    </Button>)}

                    <form className="form-inline ml-3 d-flex" onSubmit={handleSubmit}>
                        <button className="btn btn-outline-primary mr-2 btn__search" type="submit">
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
