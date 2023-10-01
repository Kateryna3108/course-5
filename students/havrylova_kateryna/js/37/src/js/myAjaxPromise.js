function myAjaxPromise(options, callback, data) {
    return new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.responseType = options.type ? options.type : 'json';


            xhr.onload = () => {
                if (xhr.status < 400) {
                    resolve(xhr.response);

                } else {
                    reject(xhr);
                }
            }

            xhr.onerror = (e) => {
                console.error(e);
            }

            const method = options.method ? options.method : 'GET';

            xhr.open(method, options.url);

            if (method === 'GET') {
                xhr.send();
            } else if (method === 'POST') {
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(toJson(data));
            }



            console.log(xhr.response, 'dfghhj');

        }


    )
}

export default myAjaxPromise;




