'use strict'

const axios = require('axios')

const getTodo = async (id: number) => {
  let res;
  try {
    res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    throw err;
  }

  return res.data;
}

export default getTodo

