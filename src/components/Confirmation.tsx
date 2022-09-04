import "./Confirmation.css";

export default function Confirmation(props: {enabled: boolean, email: string}) {
    if(!props.enabled) {
        return (
            <></>
        );
    }
    else {
        if(props.email != "") 
        {
            return (
                <div className="confirmation">
                    <h3>Instructions sent to {props.email}</h3>
                </div>
            );
        }
        else {
            return (
                <div className="failed">
                    <h3>Please enter your email address</h3>
                </div>
            );
        }
    }
}
