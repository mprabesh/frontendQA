const data = (a) => {
  console.log(a);
  const bang = a.map((r) => {
    const name = r.firstname + " ".concat(r.lastname);
    const email = r.email;
    const finalData = { bleep: name + " : " + email };
    return finalData;
  });
  const d = bang;
  return d;
};

export default data;
