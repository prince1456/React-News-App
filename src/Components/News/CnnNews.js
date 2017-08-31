import React, {Component} from 'react';
import Axios from 'axios';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import { NavLink } from "react-router-dom"

class CnnNews extends Component {
  constructor() {
    super()
    this.state = {
      News: []
    }
  }
  componentDidMount(){
    Axios.get("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=25ccc48862834ff6b52e5a6aff987063")
    .then(response => {
      console.log(response)
      this.setState({News: response.data.articles})
    })
    .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.News)
    return (
      <div>

        <GridList cellHeight={200} spacing={1} className='gridList'>
            {this.state.News.map((article, index) =>
            <GridListTile key={index}>
              <img src={article.urlToImage} alt= {article.title}/>
              <GridListTileBar
                title={
                  <NavLink className="tilte-title"  to={{ pathname:`/${article.title}/${article.author}/${article.description}/${encodeURIComponent(article.urlToImage)}/${article.publishedAt}/${article.publishedAt}` } }>
                  {article.title}
                  </NavLink>
                }
                titlePosition="top"
                actionIcon={
                  <IconButton>
                    <StarBorderIcon color='white'/>
                  </IconButton>
                }
                actionPosition="left"
                className= "titleBar"
              />
            </GridListTile>
          )}
        </GridList>
      </div>
    )
  }
}


export default CnnNews
