import React, {TextInput} from 'react'
import './nav.css'

const Nav = () => {
    return (
        <div className="navigation">
            <div className="row">
                <div className="col-5 mt-3 text-right">
                    <label className="searchInput" htmlFor="">Search for your pokemon</label>

                </div>
                <div className="col-3 mt-4 text-left">
                    <input type="text" className="form-control form-control-lg" />
                </div>
                <div className="col-1 mt-4  text-left">
                    <button className="btn btn-lg btn-success">Oi</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
