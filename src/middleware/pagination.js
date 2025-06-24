const paginate = (req, res, next) => {
    const defaultLimit = 10;
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || defaultLimit, 100);
    const offset = (page - 1) * limit;

    req.pagination = { limit, offset, page };
    next();
};

module.exports = paginate;
