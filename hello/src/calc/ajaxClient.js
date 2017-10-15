const httpRequest = new XMLHttpRequest();
function requestThemes ({onSuccess,onFail}) {
    httpRequest.onreadystatechange = finishHandler;
    const url = 'http://localhost:4000/layouts';
    httpRequest.open('GET', url);
    httpRequest.send();

    function finishHandler(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                console.log('request done: ' + httpRequest.responseText);
                onSuccess({body:httpRequest.responseText});
            } else {
                onFail({status: httpRequest.status});
            }
        }
    }
}
export {
    requestThemes   
};
