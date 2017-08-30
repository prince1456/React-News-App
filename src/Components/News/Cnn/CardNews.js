
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class CardNews extends Component {
  constructor(props){
    super(props)
    this.state = {
      expanded: false,
      title: "",
      author:"",
      description: "",
      image: ""
    }
  }
  componentDidMount(){
    this.setState({
      title: this.props.match.params.title,
      author: this.props.match.params.author,
      description: this.props.match.params.description,
      image: this.props.match.params.image

    })
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const classes = this.props.classes;
    console.log(this.props.match.params)
    return (

      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title={this.state.title}
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="http://www.desicomments.com/wp-content/uploads/2017/01/Whenever-Youre-Having-A-Bad-Day-Remember-This-I-Love-You.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {this.state.description}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                <strong>Method:</strong> {this.state.author}
              </Typography>
              <Typography paragraph>
                <strong>
                {this.state.description}
                </strong>

              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

CardNews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardNews);
