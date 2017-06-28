import React, { PropTypes } from 'react'

const Header = () => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#'>Hikerog</a>
        </div>
        <div className='navbar-collapse collapse'>
          <form className='navbar-form navbar-left'>
            <div className='form-group'>
              <div className='input-group'>
                <input type='text' className='form-control' placeholder='search' />
                <span className='input-group-btn'>
                  <input type='submit' className='btn btn-inverse' defaultValue='Submit' />
                </span>
              </div>
            </div>
          </form>
          <ul className='nav navbar-nav navbar-right'>
            <li><a href='/yamalogs/new'>投稿する</a></li>
            <li><a href='/yamalogs'>山行一覧</a></li>
            <li><a href='/myapages'>マイページ</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
