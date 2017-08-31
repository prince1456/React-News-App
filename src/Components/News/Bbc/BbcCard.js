
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
import moment from 'moment'

const styles = theme => ({
  card: {
    maxWidth: 'auto',
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

class BbcCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      expanded: false,
      title: "",
      author:"",
      description: "",
      image: "",
      publish: ""
    }
  }
  componentDidMount(){
    this.setState({
      title: this.props.match.params.title,
      author: this.props.match.params.author,
      description: this.props.match.params.description,
      image: decodeURIComponent(this.props.match.params.image),
      publish: this.props.match.params.publishedAt

    })
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {

    const classes = this.props.classes;
    const time = moment(this.state.publish).format('ll');
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
            subheader={time}
          />
          <CardMedia
            className={classes.media}
            image={this.state.image}
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
                <strong>Author:</strong> {this.state.author}
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

BbcCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BbcCard);
