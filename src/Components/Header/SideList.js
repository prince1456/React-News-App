import React, {Component} from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
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
            <NavLink activeClassName='active' to="/Component/News/Cnn/CnnNews">
              CNN
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="NYC"/>
          </ListItem>

        </List>
      </div>
    )
  }

}
export default SideList;
