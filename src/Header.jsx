const Header = () => {

    const navbar = [
        { name: "home", route: "/", order: 1 },
        { name: "works", route: "work", order: 2 },
        { name: "blogs", route: "/blog", order: 3 },
        { name: "contact", route: "/contact", order: 4 }
    ];

    return (
        <div className="heading">
            <div className="heading2">
                {navbar.map((item, index) => (
                    <a href={item.route} key={index} >{item.name}</a>
                ))}
            </div>
        </div>
    )
}
export default Header;