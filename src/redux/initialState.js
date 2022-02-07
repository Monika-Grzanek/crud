const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title 1',
            shortDescription: 'Short description of the article...1',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Article title 2',
            shortDescription: 'Short description of the article...2',
            content: 'Main content of the article',
            publishedDate: new Date('02-04-2021'),
            author: 'Martin Smith'
        },
        {
            id: '3',
            title: 'Article title 3',
            shortDescription: 'Short description of the article...3',
            content: 'Main content of the article',
            publishedDate: new Date('03-02-2021'),
            author: 'Mike Tyler'
        }
    ],
    categories: [
        {
            id: '1',
            title: 'News',
        },
        {
            id: '2',
            title: 'Sport',
        },
        {
            id: '3',
            title: 'Movies',
        },
    ]
};

export default initialState;