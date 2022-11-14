import { Link } from "react-router-dom"

import './style.css';

export const TextLink = (props) => {
  return (
    <Link {...props} className={'text-link'}>
      {props.children}
    </Link>
  )
}