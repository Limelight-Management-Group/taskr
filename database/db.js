const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/taskr';
const db = pgp('connectionString');

// const Tasks = {
//   getAll: () => db.any('SELECT * FROM todos')

//   // create: function create(task) {
//   //   return db.any('INSERT INTO todos(task) VALUES ($1)', [task]);
//   // },
//   // delete: function _delete(id) {
//   //   return db.none('DELETE from todos WHERE id = $1', [id]);
//   // },
//   // completed: function completed(id) {
//   //   return db.any('UPDATE todos SET isCompleted=true WHERE id = $1', [id]);
//   // },
//   // setToIncomplete: function setToIncomplete(id) {
//   //   return db.any('UPDATE todos SET isCompleted=false WHERE id = $1', [id]);
//   // },
//   // edited: function edited(id, task) {
//   //   return db.any('UPDATE todos SET task=$1 WHERE id = $2', [task, id]);
//   // }
// };

const getAll = () => db.any('SELECT * FROM todos')



module.exports = {getAll:getAll}




// var pgPromise = require('pg-promise')
// var pgp = pgPromise()
// var db = pgp(`postgres://${process.env.USER}@localhost:5432/todolist`)


// const Tasks = {
//   getAll: () => {
//     return db.any( 'SELECT * FROM projects' )
//   },
//   create: (task, descriptionItem) => {
//     return db.any('INSERT INTO projects(task, description) VALUES ($1, $2)', [projectName, descriptionItem])
//   },
//   delete: (id) => {
//     return db.none('DELETE from projects WHERE id = $1', [id])
//   },
//   completed: (id) => {
//     return db.any('UPDATE projects SET isCompleted=true WHERE id = $1', [id])
//   },
//   setToIncomplete: (id) => {
//     return db.any('UPDATE projects SET isCompleted=false WHERE id = $1', [id])
//   },
//   edited: (id, project_name, description) => {
//     return db.any('UPDATE projects SET project_name=$1, description=$2 WHERE id = $3', [project_name, description, id])
//   }
// }

// module.exports = Tasks