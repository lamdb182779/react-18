import { Button, Row, Col } from "react-bootstrap"
import Scroll from "./Scroll"
import Flip from "./Flip"
import Swipe from "./Swipe"
import { useState } from "react"
import Swing from "./Swing"
import Fade from "./Fade"
import Bounce from "./Bounce"
import Slide from "./Slide"
import Bloom from "./Bloom"
import Drop from "./Drop"
import Paper from "./Paper"

const InfinityAnimation = (props) => {
    const [mode, setMode] = useState(0)

    const renderAnimation = () => {
        switch (mode) {
            case 0: return <Scroll />
            case 1: return <Flip />
            case 2: return <Swipe />
            case 3: return <Swing />
            case 4: return <Fade />
            case 5: return <Bounce />
            case 6: return <Slide />
            case 7: return <Bloom />
            case 8: return <Drop />
            case 9: return <Paper />
            default: return <Scroll />
        }
    }
    return (
        <div className="infinity-container">
            <Row className="">
                <Col>
                    <Button disabled={mode === 0 ? true : false} onClick={() => setMode(0)}>Scroll</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 1 ? true : false} onClick={() => setMode(1)}>Flip</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 2 ? true : false} onClick={() => setMode(2)}>Swipe</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 3 ? true : false} onClick={() => setMode(3)}>Swing</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 4 ? true : false} onClick={() => setMode(4)}>Fade</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 5 ? true : false} onClick={() => setMode(5)}>Bounce</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 6 ? true : false} onClick={() => setMode(6)}>Slide</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 7 ? true : false} onClick={() => setMode(7)}>Bloom</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 8 ? true : false} onClick={() => setMode(8)}>Drop</Button>
                </Col>
                <Col>
                    <Button disabled={mode === 9 ? true : false} onClick={() => setMode(9)}>Paper</Button>
                </Col>
            </Row>
            {renderAnimation()}
        </div>
    )
}

export default InfinityAnimation

