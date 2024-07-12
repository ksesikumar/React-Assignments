import React from 'react';

const ArticleList = ({ articles }) => {
    return (
        <div>
            {articles.map((article) => (
                <div key={article.id}>
                    {article.title} - {article.date}
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
