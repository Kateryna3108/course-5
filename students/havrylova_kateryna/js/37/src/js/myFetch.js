function myFetch(url, options = {}) {
    return fetch(url, options).then((response) => {
        return response.json();
    })
}

export default myFetch;
