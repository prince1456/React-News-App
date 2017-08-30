import React, {Component} from 'react';
import Axios from 'axios';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';

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
            <GridListTile key={index} cols= { index ? 1 : 2} rows = { index ? 1 : 2}>
              <img src={article.urlToImage} alt= {article.title}/>
              <GridListTileBar
                title={article.title}
                titlePosition="top"
                actionIcon={
                  <IconButton>
                    <StarBorderIcon/>
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
