/*Inbuilt Components*/
import {
    getNav,
} from "../utils/get-nav";
import Nav from "../atoms/nav";

const Navlist = () => {
    return (
        <nav className="blockwheels-navigation">
            <ul className="flex flex-wrap">
                {getNav.map(function (item){
                    return (
                        <Nav
                            to={item.to}
                            title={item.title}
                            key={item.to}
                        />
                    )
                })}

            </ul>
        </nav>
    );
}

export default Navlist;