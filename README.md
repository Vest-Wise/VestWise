# VestWise: Verizon Stock Performance Tracker

## Overview
VestWise is a dynamic frontend application designed to provide users with a comprehensive view of Verizon's performance in the stock market. It centralizes current social and financial data, empowering users to stay informed and potentially make more insightful investment decisions related to Verizon.

## Technologies Used
* **React.js:** Frontend library for building the user interface.
* **React Bootstrap:** For responsive and pre-styled UI components.
* **React Date Picker:** For intuitive date range selection.
* **ReCharts:** For creating interactive and customizable data visualizations (charts).
* **Polygon.io API:** To fetch real-time and historical stock market data and news.

## Getting Started

### Prerequisites
* Node.js (v14 or higher)
* npm or yarn
* An API key for Polygon.io (required for data fetching)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_LINK_HERE]
    cd VestWise
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure API Key:**
    Create a `.env` file in the root of the project and add your Polygon.io API key:
    ```
    REACT_APP_POLYGON_API_KEY=your_polygon_api_key_here
    ```
4.  **Start the development server:**
    ```bash
    npm start
    ```
5.  Open your browser and navigate to `http://localhost:3000`.

## Takeaways
* **Context API & Routing Mastery:** Leveraging React Router allowed for seamless navigation between different views, while React Context proved invaluable in managing global state and eliminating prop drilling, simplifying data flow across components.

## Future Enhancements
* Offer a more detailed analysis of Verizon's current stock performance, potentially including advanced metrics.
* Include additional views for deeper dives into specific financial aspects or market segments.
* Tailor the styling further to achieve a more consistent and unique aesthetic throughout the application.

## License
This project is for portfolio and demonstration purposes.
