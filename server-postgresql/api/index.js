
const api = require('./app');

const port = process.env.PORT || 3000;

api.listen(port, () => console.log(`Our express server has now departed from port ${port}  :D`));