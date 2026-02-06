import './Header.css';
export default function Header(props) {
    return (
        <>
            <h1 id="hello">{props.title}</h1>
            <nav>
                <a href="#">Home</a> <br />
                <a href="#">About Us</a> <br />
                <a href="#">Contact Us</a>
            </nav>
        </>
    );
}