var calculations = {
  salarySum: function() {
    return this.reduce(function(acc, next) {
      return acc + next;
    }, 0);
  },
  logName: function() {
    this.forEach(function(user) {
      console.log(user.name);
    });
  },
  findUsersByIds: function(ids) {
    return this.filter(function(user) {
      return ids.find(function(id) {
          return user.id === id;
      })
    });
  }
};

var users = [
  {
    id: 1,
    name: "User 2",
    salary: 200
  },
  {
    id: 2,
    name: "User 3",
    salary: 200
  },
  {
    id: 3,
    name: "User 4",
    salary: 200
  }
];


// salarySum
var arrayOfAllSalaries = users.map(function(user) {
  return user.salary;
});
console.log(calculations.salarySum.apply(arrayOfAllSalaries));

// logName
calculations.logName.apply(users);

// findUsersByIds
var usersToThis = calculations.findUsersByIds.bind(users);
console.log(usersToThis([1,2]));