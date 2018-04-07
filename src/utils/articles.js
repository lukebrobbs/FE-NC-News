const articlesUtil = {
  sortByVotes: articles => {
    return articles.sort((a, b) => {
      return b.votes - a.votes;
    });
  },
  filterByTopic: (articles, topic) => {
    if (topic === "all") return articles;
    return articles.filter(
      article => article.topic.title.toLowerCase() === topic.toLowerCase()
    );
  },
  searchArticles: (articles, search) => {
    if (search.length) {
      return articles.filter(article => {
        return (
          article.title.toLowerCase().includes(search.toLowerCase()) ||
          article.topic.title.toLowerCase().includes(search.toLowerCase()) ||
          article.created_by.username
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      });
    } else return [];
  }
};

export default articlesUtil;
