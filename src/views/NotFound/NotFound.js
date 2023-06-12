import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"
import "../../style/NotFound.scss"

const NotFound = (props) => {

    let navigate = useNavigate()
    const handleHomepage = () => {
        navigate('/')
    }
    return (
        <div className="notfound-container">
            <h4>
                This Page Isn't Available.
            </h4>
            <h5>
                This link maybe broken, or this page is removed. Check to see if the link you 're trying to open isn't correct.
            </h5>
            <Button variant="primary" onClick={() => handleHomepage()}>
                Go to Homepage
            </Button>
        </div>
    )
}

export default NotFound