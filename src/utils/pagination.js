function getPagingMeta(page, limit, totalItems) {
    return {
        totalItems,
        page,
        pageSize: limit,
        totalPages: Math.ceil(totalItems / limit),
        hasNextPage: page * limit < totalItems,
        hasPrevPage: page > 1
    };
}

module.exports = { getPagingMeta };
