import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

/* `interface NavbarProps` is defining the type of props that the `Navbar` component expects to
receive. It specifies that the component should receive a `logo` prop of type `string`, and two
arrays of objects `links_left` and `links_right`. Each object in these arrays should have a `title`
property of type `string`, a `url` property of type `string`, and an optional `id` property of type
`string`. */
interface NavbarProps {
    logo: string
    links_left: {
      title: string
      url: string
      id?: string
    }[]
    links_right: {
        title: string
        url: string
        id?: string
      }[]
}

/**
 * This is a TypeScript React component for a navbar that takes in props for left and right links and a
 * logo.
 * @param  - The `Navbar` component is a functional component that takes in three props:
 * @returns The `Navbar` component is being returned, which is a functional component that renders a
 * navigation bar with a logo and links on the left and right sides. The component takes in
 * `links_left`, `logo`, and `links_right` as props and maps over them to render the corresponding
 * links.
 */
const Navbar: React.FC<NavbarProps> = ({ links_left, logo, links_right }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
              <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className="navbar-list">
                {links_left.map((link) => (
                    <li key={link.title}>
                        <Link className="navbar-link" id={link.id} to={link.url}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <ul className="navbar-list">
                {links_right.map((link) => (
                    <li key={link.title}>
                        <Link className="navbar-link" id={link.id} to={link.url}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar