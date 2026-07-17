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

  return (
    <>
      <LangNavbar />
      <Container>

        <Row className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Ordered Categories Over Time </Card.Title>
                <LineChart data={lineData} />
                  
              </Card.Body>
            </Card>
        </Row>

        <Row className="g-3 mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Revenue of each Type over a Month</Card.Title>
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
                <Card.Title>Drink Details of Sales this Month</Card.Title>
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
