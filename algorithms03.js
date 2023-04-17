const randomId = () => {
  return Math.random().toString(36).substring(2, 6);
};

const generarId = () => {
	return `${randomId()}-${randomId()}-${randomId()}-${randomId()}` 
}

const id = generarId()

console.log(id)