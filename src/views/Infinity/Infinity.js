import { Button, Row, Col } from "react-bootstrap"
import Scroll from "./Scroll"
import Flip from "./Flip"
import Swipe from "./Swipe"
import { useState } from "react"

const InfinityAnimation = (props) => {
    const [mode, setMode] = useState(0)

    const renderAnimation = () => {
        switch (mode) {
            case 0: return <Scroll />
            case 1: return <Flip />
            case 2: return <Swipe />
            default: return <Scroll />
        }
    }
    return (
        <div className="infinity-container d-grid gap-3">
            <Row>
                <Col>
                    <Button disabled={mode === 0 ? true : false} onClick={() => setMode(0)}>Scroll</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 1 ? true : false} onClick={() => setMode(1)}>Flip</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 2 ? true : false} onClick={() => setMode(2)}>Swipe</Button>
                </Col>
            </Row>
            {renderAnimation()}
        </div>
    )
}

export default InfinityAnimation

