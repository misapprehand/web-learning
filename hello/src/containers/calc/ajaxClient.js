function requestThemes ({onSuccess, onFail}) {
  $.ajax({
    url: 'http://localhost:4000/layouts',
    type: 'GET'
  })
  .done(function (data, textStatus, jqXHR) {
    onSuccess({body: data});
  })
  .fail(function (jqXHR, textStatus, errorThrow) {
    onFail({status: textStatus});
  });
}
export {
    requestThemes
};
