import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="list-inline">
                        <li className="list-inline-item"> 
                            <Link to="/" className="navbar-brand">
                                <img width="90px" height="30px" src="images/logo.png" alt="Logo" />
                            </Link>
                        </li>
                        <li className="list-inline-item"><Link to="/" replace>Home</Link></li>
                        <li className="list-inline-item"><Link to="/products" replace>Products</Link></li>
                        <li className="list-inline-item"><Link to="/coupons" replace>Coupons</Link></li>
                        {/*<li className="list-inline-item"><Link to="/users" replace>Users</Link></li>
                        <li className="list-inline-item"><Link to="/orders" replace>Orders</Link></li>*/}
                        <li className="list-inline-item"><Link to="/taxes" replace>Taxes</Link></li>
                        <li className="list-inline-item"><Link to="/reports" replace>Reports</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}