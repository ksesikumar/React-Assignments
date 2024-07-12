import React, { useState } from 'react';
import ArticleList from './ArticleList';
import SortOptions from './SortOptions';

const ArticleSortingApp = () => {
    const [articles, setArticles] = useState([
        { id: 1, title: 'React Basics', date: '2024-07-12' },
        { id: 2, title: 'Advanced React', date: '2024-07-02' },
        { id: 3, title: 'React with Hooks', date: '2024-07-06' },
    ]);

    const [sortCriteria, setSortCriteria] = useState('title');

    const handleSortChange = (criteria) => {
        setSortCriteria(criteria);
    };

    const sortedArticles = articles.sort((a, b) => {
        if (sortCriteria === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortCriteria === 'date') {
            return new Date(a.date) - new Date(b.date);
        }
        return 0;
    });

    return (
        <div>
            <SortOptions onSortChange={handleSortChange} />
            <ArticleList articles={sortedArticles} />
        </div>
    );
};

export default ArticleSortingApp;
