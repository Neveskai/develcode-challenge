import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import './Header.css'

function chk(curr, i) {
    if (i === curr) return true;
    return false;
}

export default function Header(props) {

    const title = props.title;
    const routes = props.routes;
    const [highlight, setHighlight] = useState(0);

    const route = useLocation();
    useEffect(() => {
        routes.forEach(function (r, i) {
            if (r.path === route.pathname) return setHighlight(i);
            return false;
        })
    }, [route, routes]);

    return (
        <header id="header" className="row">
            <div className="col-md-4 col-12">
                <h2 className="text-center text-md-left"> {title} </h2>
            </div>
            <div className="col-md-8 text-md-right col-12 text-center p-0 m-md-0 mt-2">
                <section className="d-inline-flex pl-1">
                    {routes.map(function (route, i) {
                        if (route.navmenu) {
                            return <div className="mr-2 mr-md-4 navi text-center" key={route.id}>
                                <Link to={{ pathname: route.path, search: route.q }} className={classNames({ highlight: chk(highlight, i) })} >
                                    <FontAwesomeIcon icon={route.icon} /><br></br>
                                    <span className="font-bold">{route.text}</span>
                                </Link>
                            </div>
                        }
                        return false
                    })}
                </section>
            </div>
        </header>
    );

}