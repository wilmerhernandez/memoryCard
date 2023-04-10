export const search = async () => {
  const resultData = await fetch(
    "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=9"
  )
    .then((response) => response.json())
    .then()
    .catch((error) => {
      console.error(error);
    });
  let data = resultData.entries.map((result) => ({
    name: result.meta.name,
    src: result.fields.image.url,
  }));
  data.push(...data);
  data = data.map((result,index)=>({
    name: result.name,
    src: result.src,
    key:index
  }))
  return shuffleArray(data);
};
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log(array);
    return array;
  };
const exportObject = {
  search,
};

export default exportObject;
