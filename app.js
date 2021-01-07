const http = new EasyHTTP;

/* //Get Users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

//User Data
const user = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}
/* 
//Create User -POST
http.post('https://jsonplaceholder.typicode.com/users', user)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

/* //Update User
http.put('https://jsonplaceholder.typicode.com/users/2', user)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

//Delete request
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));