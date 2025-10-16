import { Link } from "react-router-dom"


const menu = [
  {
    title: 'Link 1',
    path: '/link-1'
  },
  {
    title: 'Link 2',
    path: '/link-2'
  }
]

export const NavMenu = () => {
  return (
    <div>
      <ul className='flex gap-5'>
        {
          menu.map(item => (
            <Link key={item.path} to={item.path}>
              { item.title }
            </Link>
          ))
        }
      </ul>
    </div>
  )
}
