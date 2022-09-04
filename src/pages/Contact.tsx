import "./Contact.css"

export default function Contact() {
    return (
        <div className="contact">
            <h1>Got any questions?</h1>
            <h2>Leave us a message!</h2>
            <form>
                <label>Name:</label>
                <input placeholder="Name"></input>

                <label>Email:</label>
                <input placeholder="Email"></input>

                <label>Message:</label>
                <textarea placeholder="Message"></textarea>

                <button>Send</button>
            </form>
        </div>
    );
}
