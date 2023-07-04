import { Navbar } from "./Navbar"

export function Shopping(){
    return(
        <div className="container-fluid">
            <Navbar brandName="Shopper" navItems={['Home', 'Shop', 'Blog', 'About']} />
            <Navbar brandName="Naresh-I-Technolgoies" navItems={['Home', 'Courses', 'Reviews', 'Pages','Faculty']} />
        </div>
    )
}