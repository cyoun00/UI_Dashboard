import { Navbar, Container, Button, ButtonGroup } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function LanguageNavbar() {
  const { t, i18n } = useTranslation()

  const switchTo = (lng) => {
    i18n.changeLanguage(lng)
    document.documentElement.lang = lng   // good for accessibility/SEO
  }

  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container className = "inline">
        <Navbar.Brand>{t('appTitle')}</Navbar.Brand>
        <ButtonGroup className='buttonGroup'>
          <Button className='btn'
            variant={i18n.language === 'en' ? 'light' : 'outline-light'}
            size="sm"
            onClick={() => switchTo('en')}
          >
            EN
          </Button>
          <Button className='btn'
            variant={i18n.language === 'fr' ? 'light' : 'outline-light'}
            size="sm"
            onClick={() => switchTo('fr')}
          >
            FR
          </Button>
        </ButtonGroup>
      </Container>
    </Navbar>
  )
}

export default LanguageNavbar