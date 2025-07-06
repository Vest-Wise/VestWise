import React from "react";
import { Card, Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [newsInfo, setNewsInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch news info
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/v2/snapshot/locale/us/markets/stocks/tickers/VZ?apiKey=${apiKey}`
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
 
// console.log("News Info State: ", newsInfo);
// if (newsInfo && Array.isArray(newsInfo.results)) {
//   console.log("Results Length: ", newsInfo.results.length);
// }
  return (
    <div className="mt-4">
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
