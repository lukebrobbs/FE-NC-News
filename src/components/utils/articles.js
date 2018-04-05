const articlesUtil = {
  sortByVotes: articles => {
    return articles.sort((a, b) => {
      return b.votes - a.votes;
    });
  }
};

export default articlesUtil;
