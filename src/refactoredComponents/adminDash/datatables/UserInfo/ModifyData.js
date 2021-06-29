const modifyData = (data) => {
  const apple = data.map((d) => {
    const data = {
      UserID: d._id,
      FirstName: d.firstname,
      LastName: d.lastname,
      Email: d.email,
      Password: d.password,
    };
    return data;
  });
  const a = apple;
  return a;
};

export default modifyData;
