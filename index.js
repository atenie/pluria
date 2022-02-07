data = {
  automobil: {
    benzina: {
      marca: "dacia",
      anul: "2022",
    },
    diesel: {
      marca: "audi",
      anul: "2022",
    },
    electric: {
      marca: "tesla",
      anul: "2022",
    },
  },
  bicicleta: "pegas",
  role: {
    inline: {
      "de viteza": {
        marca: "Rollerblades",
      },
    },
  },
};

async function myFunction() {
  const parsedData = JSON.parse(JSON.stringify(data));
  let finalData = flatten(parsedData);
  let map = new Map(Object.entries(finalData));
  console.log(map);
  for (const [key, value] of map) {
    document.write("<p>'" + key + "' => '" + value + "'</p>");
  }
}

function flatten(array) {
  let toReturn = {};
  for (let i in array) {
    if (typeof array[i] == "object" && array[i] !== null) {
      let flatObject = flatten(array[i]);
      for (let j in flatObject) {
        if (/\s/.test(i)) {
          i = i.replace(/\s/g, "--");
        }
        toReturn[i + "__" + j] = flatObject[j];
      }
    } else {
      toReturn[i] = array[i];
    }
  }
  return toReturn;
}
