const commentsUtil = {
  sortByVotes: comments => {
    return comments.sort((a, b) => {
      return b.votes - a.votes;
    });
  }
};

export default commentsUtil;
