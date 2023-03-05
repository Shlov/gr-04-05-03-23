import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { useSelector } from 'react-redux';
import {useGetComentsQuery} from '../../redux/commentApi'

export const Comments = () => {

  const {data: comments} = useGetComentsQuery();
  const filter = useSelector(state => state.filter.filter);
  const visibleComments = comments.filter((comment) => 
    comment.content.toLowerCase().includes(filter.toLowerCase()) || comment.author.toLowerCase().includes(filter.toLowerCase())
  ) 

  return (
    <Grid>
      {comments &&
        visibleComments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
