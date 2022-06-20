import {Link} from 'react-router-dom';

const header = () => {
  return (
    <header>
      <div className='container'>
      <div className="content">

        <div className='logo'>
          Surveys maker
        </div>
        <div className='nav_links'>
          <Link to="/admin"><div className='forms'>
            My forms
          </div></Link>
          <Link to="admin/create-form"><div className='create_form'>
            Create form
          </div></Link>
        </div>

      </div>
      </div>
    </header>
  )
}

export default header