import React, {Component} from 'react'
import List, { ListItem, ListItemIcon } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import {NavLink } from 'react-router-dom'

class SideList extends Component{
  render(){
    return(
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <NavLink activeClassName='active' to="/">
              BBC
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <NavLink activeClassName='active' to="/Components/News/CnnNews">
              CNN
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <NavLink activeClassName= 'active' to="/Components/News/Aljazira">
                  Aljazira
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <NavLink activeClassName= 'active' to="/Components/News/Telegraph">
                  Telegraph
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <NavLink activeClassName= 'active' to="/Components/News/UsaToday">
                  Usa Today
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <NavLink activeClassName= 'active' to="/Components/News/Times">
                  Times
            </NavLink>
          </ListItem>

        </List>
      </div>
    )
  }

}
export default SideList;
