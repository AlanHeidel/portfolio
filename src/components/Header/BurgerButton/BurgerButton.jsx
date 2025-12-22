import "./BurgerButton.css"

export default function BurgerButton({ open, setOpen }) {
    return (
        <button
            className={`burger-button ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
        >
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
        </button>
    );
}