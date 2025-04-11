import { Card } from 'react-bootstrap';
import { restClient } from '@polygon.io/client-js';
import { useEffect, useState } from 'react';



const rest = restClient("YOUR_API_KEY");

function StockInfo() {
    const [stockInfo, setStockInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStockInfo = async () => {
            try {
                const data = await rest.stocks.snapshotTicker("VZ");
                setStockInfo(data);
            } catch (e) {
                console.error('An error occurred:', e);
                setError('Failed to load stock info.');
            }
        };

        fetchStockInfo();
    }, []);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Stock Info for VZ</Card.Title>
                <Card.Text>
                    Stock Info
                    Open: ${stockInfo.o}
                    Close: ${stockInfo.c}
                    Change from Yesterday: ${stockInfo.todaysChange}
                </Card.Text>
                <Button variant="primary">Might not even need a button</Button>
            </Card.Body>
        </Card>
    )
}


export default CardComponent;