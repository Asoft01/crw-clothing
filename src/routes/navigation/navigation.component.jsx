
import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
const Navigation = () => {
    return (
      // <div>
      //   <div>
      //     <h1>I am the navigation bar</h1>
      //   </div>
      //   <Outlet/>
      // </div>
      <Fragment>
        <div className='navigation'>
          {/* <h1>I am the navigation bar</h1> */}
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
            {/* <div>Logo</div> */}
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;