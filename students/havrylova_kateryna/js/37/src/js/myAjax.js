function myAjax(options, callback, data) {
    const xhr = new XMLHttpRequest();

    xhr.responseType = options.type ? options.type : 'json';


    xhr.onload = () => {
        if (xhr.status < 400) {
            // console.log(JSON.parse(xhr.response));
            if (typeof callback === 'function') callback(xhr.response);
            // console.log(xhr.response);
        } else {
            console.error(xhr.status);
        }
    }

    xhr.onerror = (e) => {
        console.error(e);
    }

    xhr.onprogress = (e) => {
        if (e.lengthComputable) {
            console.log(`Loaded ${e.loaded} to ${e.total}`);
        } else {
            console.log(`Loaded ${e.loaded}`);

        }
    }


    const method = options.method ? options.method : 'GET';

    xhr.open(method, options.url);

    if (method === 'GET') {
        xhr.send();
    } else if (method === 'POST') {
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(toJson(data));
    }

    function toJson(data) {
        return JSON.stringify(data);
    }


    console.log(xhr.response, 'dfghhj');

}

export default myAjax;
