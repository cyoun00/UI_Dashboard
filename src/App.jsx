import { useState } from 'react'
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap'
import LangNavbar from './components/LangNavbar'
import RadarChart from './components/StoreRadarChart'
import LineChart from './components/CategoryLineChart'
import BarChart from './components/RevenueBarChart'
import SunburstChart from './components/VarietySunburstChart'
import { useCsvData } from './util/parser'
import { prepBarData, prepLineData, prepOrderData, prepRadarData, prepRevenueData, prepSunburstData } from './util/transform'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  const { rows, loading, error } = useCsvData('/CafeSalesReducedNew.csv');
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
  const orderData = prepOrderData(rows);
  const revenueData = prepRevenueData(rows);

  if (sortBar === "asc") {
    barData.sort((a, b) => a.revenue - b.revenue);
  } else if (sortBar === "desc") {
    barData.sort((a, b) => b.revenue - a.revenue);
  }

  return (
    <>
    <LangNavbar className = "navbar"/>
      <Container className = "dashboard"> 
            <Card className="chart-card line-chart">
              <Card.Body>
                <Card.Title className='cardTitle'>{t("lineTitle")}</Card.Title>
                <LineChart data={lineData} />
                <Card.Text className='slider'>{t("lineSlider")}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="chart-card bar-chart">
              <Card.Body>
                <Card.Title className='cardTitle'>{t("barTitle")}</Card.Title>
                <select
                  value={sortBar}
                  onChange={(e) => setSortBar(e.target.value)}
                >
                  <option value="none">{t("barDropdown1")}</option>
                  <option value="asc">{t("barDropdown2")}</option>
                  <option value="desc">{t("barDropdown3")}</option>
                </select>
                <BarChart
                  data={barData}
                />
              </Card.Body>
            </Card>
            <div className='cards'>
              <Card className="chart-card">
                <Card.Body>
                  <Card.Title className='card-format card-stat'>{t("orderCard")}</Card.Title>
                  <Card.Text className='card-format'>{orderData}</Card.Text>
                </Card.Body>
              </Card>
              <Card className="chart-card">
                <Card.Body>
                  <Card.Title className='card-format card-stat'>{t("revenueCard")}</Card.Title>
                  <Card.Text className='card-format'>{revenueData}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <Card className="chart-card sun-chart">
              <Card.Body>
                <Card.Title className='cardTitle'>{t("sunTitle")}</Card.Title>
                <SunburstChart data={sunData} />
              </Card.Body>
            </Card>
            <Card className="chart-card radar-chart">
              <Card.Body>
                <Card.Title className='cardTitle'>{t("radarTitle")}</Card.Title>
                <RadarChart data={radarData} />
              </Card.Body>
            </Card>
      </Container>
    </>
  );
}

export default App;
