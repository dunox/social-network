

const sideBarMenu = ["Profile", "Messages", "News", "Music", "Settings"]

const SideBar = () => {
  return (
    sideBarMenu.map( listItem => (
      <ul>
        <li>{listItem}</li>
      </ul>
    ))
  )
}

export default SideBar;