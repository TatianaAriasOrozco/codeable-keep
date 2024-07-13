let url = `https://codeable-keep-api-production.up.railway.app/api`;


function createNote(username, body) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "insomnia/8.3.0",
    },
    body: JSON.stringify(body)
  };
  
 const response =  fetch(
    `${url}/${username}/notes`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
        return response.note;
    })
    .catch((err) => console.error(err));

    return response;
}

function getNote(username) {
  const options = {
    method: "GET",
    headers: { "User-Agent": "insomnia/8.3.0" },
  };

  return fetch(
    `${url}/${username}/notes`,
    options
  )
    .then((response) => response.json())
    .then((response) => response.notes)
    .catch((err) => console.error(err));
}

function editNote(username, id, body){
  const options = {
  method: 'PATCH',
  headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.3.0'},
  body: JSON.stringify(body)
};

return fetch(`${url}/${username}/notes/${id}`, options)
  .then(response => response.json())
  .then(response => response)
  .catch(err => console.error(err));
}

function deleteNote(username, id){
    const options = {method: 'DELETE', headers: {'User-Agent': 'insomnia/8.3.0'}};

fetch(`${url}/${username}/notes/${id}`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}

export {createNote, getNote, editNote, deleteNote}
