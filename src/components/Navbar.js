import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
          <Link to="/about">О проекте</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/tags">Поиск по тегам</Link>
          <Link to="/recipes">Рецепты</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
