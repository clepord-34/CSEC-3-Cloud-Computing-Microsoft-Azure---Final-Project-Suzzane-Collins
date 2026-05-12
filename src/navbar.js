function Navbar(){
    return(
        <div className = "navbar">
            <div className = "Logo">
                <img src = "https://www.hachettebookgroup.com/wp-content/uploads/2020/11/HG-Logo-Black.png" alt = "logo"/>
            </div>

            <div className = "Tabs">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>BOOKS & INTERVIEWS</li>
                    <li>AUDIO BOOKS</li>
                    <li>HG ILLUSTRATED</li>
                    <li>EDUC.RESOURCES</li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;