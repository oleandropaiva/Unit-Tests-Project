const returnFeed = () => 'Eita pessoa boa!';
const createStudent = (student) => {
  const name = {
  name: student,
  feedback: returnFeed,
};
return name;
};

module.exports = createStudent;
