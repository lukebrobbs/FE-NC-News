const articlesUtil = {
  filterByTopic: (articles, topic) => {
    return articles.filter(
      article => article.topic.title.toLowerCase() === topic.toLowerCase()
    );
  },
  filterByUser: (articles, userId) => {
    return articles.filter(article => article.created_by._id === userId);
  },
  filterBy: (articles, filterBy, params) => {
    if (filterBy === "all") return articles;
    if (filterBy === "user") return articlesUtil.filterByUser(articles, params);
    if (filterBy === "topic")
      return articlesUtil.filterByTopic(articles, params);
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
