const sortByTitle = (arr, order) => {
    return order === 'ASC'
        ? arr.sort((a, b) => (a.issue.title > b.issue.title) ? 1 : ((b.issue.title > a.issue.title) ? -1 : 0))
        : arr.sort((a, b) => (a.issue.title < b.issue.title) ? 1 : ((b.issue.title < a.issue.title) ? -1 : 0));
}

const sortByUsername = (arr, order) => {
    return order === 'ASC'
        ? arr.sort((a, b) => (a.user.username > b.user.username) ? 1 : ((b.user.username > a.user.username) ? -1 : 0))
        : arr.sort((a, b) => (a.user.username < b.user.username) ? 1 : ((b.user.username < a.user.username) ? -1 : 0));
}

const sortByDate = (arr, order) => {
    return order === 'ASC'
        ? arr.sort((a, b) => Date.parse(a.spentAt) - Date.parse(b.spentAt))
        : arr.sort((a, b) => Date.parse(b.spentAt) - Date.parse(a.spentAt));
}

const sortBySpentTime = (arr, order) => {
    return order === 'ASC'
        ? arr.sort((a, b) => Number(a.timeSpent) - Number(b.timeSpent))
        : arr.sort((a, b) => Number(b.timeSpent) - Number(a.timeSpent));
}

export { sortByTitle, sortByUsername, sortByDate, sortBySpentTime };