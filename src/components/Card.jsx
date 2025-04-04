import { Card } from 'react-bootstrap'


function CardComponent () {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Stock Info
                </Card.Text>
                <Button variant="primary">Might not even need a button</Button>
            </Card.Body>
        </Card>
    )
}


export default CardComponent;