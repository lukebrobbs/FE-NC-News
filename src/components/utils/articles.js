const articlesUtil = {
  sortByVotes: articles => {
    return articles.sort((a, b) => {
      return a.votes - b.votes;
    });
  }
};

export default articlesUtil;
