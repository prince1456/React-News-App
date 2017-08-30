import React, { Component } from 'react';
import axios from "axios"
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class NewsCountainer extends Component {
  constructor(props){
    super();
    this.state = {
      News: []

    }
  }

  componentDidMount() {
    axios.get(' https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=25ccc48862834ff6b52e5a6aff987063')
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
        {this.state.News.map(article =>
       <GridListTile key={article.urlToImage} cols={article.featured ? 2 : 1} rows={article.featured ? 2 : 1}>
         <img src={article.urlToImage} alt={article.title} />
         <GridListTileBar
           title={article.title}
           titlePosition="top"
           actionIcon={
             <IconButton>
               <StarBorderIcon color="white" />
             </IconButton>
           }
           actionPosition="left"

         />
       </GridListTile>,
          )}
        </GridList>

    </div>
    );
  }
}

export default withStyles(styles)(NewsCountainer)
