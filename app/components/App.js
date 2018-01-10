/** @jsx h */
import { h } from 'sill'

export default function App (props, children) {
  return (
    <div>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
        </ul>
      </nav>

      {children}
    </div>
  )
}
