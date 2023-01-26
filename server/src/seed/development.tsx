exports.seed = function (db: any) {
  // Deletes ALL existing entries
  return db("exampleResources")
    .del()
    .then(() => {
      // Inserts seed entries
      return db("exampleResources").insert([
        {
          title: "abc",
        },
        {
          title: "def",
        },
      ]);
    });
};
