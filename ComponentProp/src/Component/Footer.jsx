export default function Footer(props) {
    return (
        <>
            <footer>
                <p>{props.sym.symbol} {props.year[1]} My React App. All rights reserved.    
                </p>
            </footer>
        </>
    );
}