import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en:{
        translation: {
            appTitle: "Cafe Sales Dashboard",
            drinkingChocolate: "Drinking Chocolate",
            tea: "Tea",
            coffee: "Coffee",
            barTitle: "Revenue by Type",
            lineTitle: "Sales per Category over Time",
            radarTitle: "Sales by Store",
            sunTitle: "Sales By Menu Item",
            radarBtn: "All",
            sunBtn: "Back",
            lineSlider: "Drag to adjust time range",
            barDropdown1: "Unsorted",
            barDropdown2: "Lowest → Highest",
            barDropdown3: "Highest → Lowest",
            dropdownLabel: "Click dropdown to sort: ",
            radarLabel: "Click the legend to see one store",
            orderCard: "Total Orders",
            revenueCard: "Total Revenue"
        }
    },
    fr:{
        translation: {
            appTitle: "Tableau de bord des ventes du café",
            drinkingChocolate: "Chocolat chaud",
            tea: "Thé",
            coffee: "Café",
            barTitle: "Chiffre d'affaires par type",
            lineTitle: "Évolution des ventes par catégorie",
            radarTitle: "Ventes par magasin",
            sunTitle: "Ventes par article du menu",
            radarBtn: "Tout",
            sunBtn: "Retour",
            lineSlider: "Faites glisser pour ajuster la plage de temps",
            barDropdown1: "Non trié",
            barDropdown2: "Plus bas → Plus élevé",
            barDropdown3: "Plus élevé → Plus bas",
            dropdownLabel: "Cliquez sur la liste déroulante pour trier: ",
            radarLabel: "Cliquez sur la légende pour voir un magasin",
            orderCard: "Total des commandes",
            revenueCard: "Chiffre d'affaires total"
        }
    }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',          
  fallbackLng: 'en',
  interpolation: { escapeValue: false }, 
})

export default i18n;