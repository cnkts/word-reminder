const hello = (req, res) => {
  res.send("hi from hello route");
};

const index = (req, res) => {
  res.send("index controller ile yazdırılrdı. anasayfadasın");
};

module.exports = {
  hello,
  index,
};
