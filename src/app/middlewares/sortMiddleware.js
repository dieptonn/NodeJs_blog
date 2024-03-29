module.exports = function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };

    if (req.query.hasOwnProperty('_sort')) {
        // res.locals._sort.enabled = true
        // res.locals._sort.column = req.query.column
        // res.locals._sort.type = req.query.type

        Object.assign(res.locals._sort, {
            enabled: true,
            column: req.query.column,
            type: req.query.type,
        });
    }
    // console.log(res.locals._sort.column)
    next();
};
