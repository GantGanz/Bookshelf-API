const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
} = require('./handler');

const routes = [{
    method: 'POST',
    path: '/Books',
    handler: addBookHandler,
}, {
    method: 'GET',
    path: '/Books',
    handler: getAllBooksHandler,
}, {
    method: 'GET',
    path: '/Books/{id}',
    handler: getBookByIdHandler,
}, {
    method: 'PUT',
    path: '/Books/{id}',
    handler: editBookByIdHandler,
}, {
    method: 'DELETE',
    path: '/Books/{id}',
    handler: deleteBookByIdHandler,
}];

module.exports = routes;
