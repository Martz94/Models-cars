import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children,title, ban}) => {
  return (
    <>
      <Header />
        {ban}
        <main>
          {children}
        </main>
      <Footer />
    </>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout