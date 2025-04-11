import React from "react";
import { Card, Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

// const apiUrl = import.meta.env.VITE_API_URL;
// const apiKey = import.meta.env.VITE_API_KEY;

// console.log("API URL:", apiUrl);
// console.log("API Key:", apiKey);

export default function Home() {
  const [stockInfo, setStockInfo] = useState(null);
  const [newsInfo, setNewsInfo] = useState(null);
  const [stockError, setStockError] = useState(null);
  const [newsError, setNewsError] = useState(null);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch stock information once when the component mounts
//     const fetchStockInfo = async () => {
//       try {
//         const response = await fetch(
//           `${apiUrl}/v2/snapshot/locale/us/markets/stocks/tickers/VZ?apiKey=${apiKey}`
//         );
//         if (!response.ok) {
//           console.error(`HTTP error! status: ${response.status}`);
//           return;
//         }
//         const data = await response.json();
//         setStockInfo(data);
//       } catch (e) {
//         console.error("An error occurred:", e);
//         setStockError("Failed to load stock info.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStockInfo();
//   }, []);

  // // if (loading) return <Spinner animation="border" />;
  // if (error) return <Alert variant="danger">{error}</Alert>

  useEffect(() => {
    // Fetch news info
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://api.polygon.io/v2/reference/news?ticker=VZ&order=asc&limit=10&sort=published_utc&apiKey=[REDACTED]`
        );
        if(response.ok){
          const data = await response.json();
          // console.log(data);
          setNewsInfo(data);
        }
      } catch (e) {
        console.error("An error occurred:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <Spinner animation="border" />;
 
console.log("News Info State: ", newsInfo);
if (newsInfo && Array.isArray(newsInfo.results)) {
  console.log("Results Length: ", newsInfo.results.length);
}
  return (
    <div className="mt-4">
      <h2>Hello from Home Page</h2>
      <h3>Latest News</h3>
      {newsInfo?.results?.length > 0 ? (
        newsInfo.results.map((article) => (
          <Card key={article.id} className="mb-3">
            <Card.Body>
              <Card.Title>
                <a
                  href={article.article_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              </Card.Title>
              <Card.Text>{article.description}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Alert variant="info">No news available.</Alert>
      )}
    </div>
  );
}
