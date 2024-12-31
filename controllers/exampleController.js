exports.getExample = (req, res) => {
    res.json({ message: 'Hello, World!' });
};

exports.helloFs = (req, res) => {
    res.json({ message: "Hello, FS" });
};