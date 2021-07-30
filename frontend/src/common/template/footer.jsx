import React from 'react'

export default props => (
  <footer className="main-footer">
    <strong>
      Copyright &copy; <span> {new Date().getFullYear()}</span>
      <a href="https://www.instagram.com/fulldev.stack" target="_blank">
        {' '}
        Fulldevstack
      </a>
      .
    </strong>
  </footer>
)
