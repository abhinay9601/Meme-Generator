// eslint-disable-next-line no-unused-vars
import react from "react";

const componentDidMount = () => { //ensure that data is fetched at the beginning
  fetch("https://api.imgflip.com/get_memes") //call to URL
    .then(response => response.json()) //turn promise into JS object
    .then(response => {
  const { memes } = response.data //pull memes array from response.data
  console.log(memes[0]) // check data is present
  this.setState({ allMemeImgs: memes }) // set allMemeImgs state
})
};
  return <div></div>;

export default componentDidMount ;
