const db = require('./db');

const Query = {
   test: () => 'Test Success, GraphQL server is up & running !!' ,

   greeting: () => {
     return "환영합니다/JK.Youk"
   },
   students:() =>
   {
     return db.students.list();
   },

   studentById:(root,args,context,info) => {
   //args will contain parameter passed in query
    return db.students.get(args.id);
  }
  ,
  colleges:() =>
  {
    return db.colleges.list();
  }

}


module.exports = { Query }
