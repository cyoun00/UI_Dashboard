import { useState } from 'react'
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap'
import LangNavbar from './components/LangNavbar'
import RadarChart from './components/StoreRadarChart'
import LineChart from './components/CategoryLineChart'
import BarChart from './components/RevenueBarChart'
import SunburstChart from './components/VarietySunburstChart'
import { useCsvData } from './util/parser'
import { prepBarData, prepLineData, prepRadarData, prepSunburstData } from './util/transform'
//import { useTranslation } from 'react-i18next'

function App() {
  const { rows, loading, error } = useCsvData('/CafeSalesReduced.csv');
  const [sortBar , setSortBar] = useState("none");

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    )
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Failed to load data: {String(error)}</Alert>
      </Container>
    )
  }

  const lineData = prepLineData(rows);
  const barData = prepBarData(rows);
  const sunData = prepSunburstData(rows);
  const radarData = prepRadarData(rows);

  if (sortBar === "asc") {
    barData.sort((a, b) => a.revenue - b.revenue);
  } else if (sortBar === "desc") {
    barData.sort((a, b) => b.revenue - a.revenue);
  }

  return (
    <>
      <LangNavbar />
      <Container>

        <Row className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Sales Per Category Over Time</Card.Title>
                <LineChart data={lineData} />
                <Card.Text>Drag to adjust time range</Card.Text>
              </Card.Body>
            </Card>
        </Row>

        <Row className="g-3 mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Revenue By Type</Card.Title>
                <select
                  value={sortBar}
                  onChange={(e) => setSortBar(e.target.value)}
                >
                  <option value="none">Original Order</option>
                  <option value="asc">Lowest → Highest</option>
                  <option value="desc">Highest → Lowest</option>
                </select>
                <BarChart
                  data={barData}
                />
              </Card.Body>
            </Card>
        </Row>
        <Row>
          <Col>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Sales By Menu Item</Card.Title>
                <SunburstChart data={sunData} />
              </Card.Body>
            </Card>
          </Col>
           <Col>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Sales by Store</Card.Title>
                <RadarChart data={radarData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
