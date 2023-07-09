import PropTypes from 'prop-types'
import Footer from "../components/Footer"
import Header from "../components/Header"

function Default({children}) {
    return (
      <>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </>
    )
}

export default Default

Default.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};