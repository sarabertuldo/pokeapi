import axios from "axios";

async function login(username, password) {
  try {
    let res = await fetch("...");
    let json = await res.json();
    // if success {username: "?" id: "?" role: "?"}

    // UPDATE GLOBAL STATE
    userData(userID);
  } catch (err) {}
}

async function userData(userID) {
  try {
    let res = await fetch("...");
    let json = await res.json();
  } catch (err) {}
}

async function getByType(type) {
  try {
    setError("");
    let typeLC = type.toLowerCase();
    let response = await fetch(`${url}type/${typeLC}`);
    let json = await response.json();
    // console.log(json);
    let resPokeTypes = json.pokemon.map((pokemon) => {
      return { name: pokemon.pokemon.name };
    });
    // let ptype = json.pokemon[0].pokemon.name;
    console.log(resPokeTypes);
    props.setTypes(resPokeTypes);
    async function getTypeInfo(typeinfo) {
      try {
        setError("");
        let tresponse = await fetch(`${typeurl}`);
        let tjson = await tresponse.tjson();
        let typePkmn = {
          dex: tjson.id,
          name: tjson.name,
          img: tjson.sprites.front_default,
          type: tjson.types[0].type.name,
        };
      } catch (e) {
        setError("Invalid type");
        props;
      }
    }
  } catch (e) {
    setError("Invalid type");
    props.setTypes([]);
  }
}

// async function pullData (id, name) {
//     // {success: boolean, data: null | Array, error: null | string }
//     // GET
//     let res = await fetch(`example.com/id=${id}&name=${name}`);
//     let json = await res.json();
//     // AXIOS
//     let res = await axios.get(`example.com/id=${id}&name=${name}`);
//     let json = res.formData;
// transformResponse:
// if (json.success)

//     // POST
//     let res = await fetch("example.com", {
//         method: "POST",
//         header: { "Content-Type": "application/json", }
//     },
//     body: JSON.stringify({id: id, name: name})
//     // JSON has to be capitalized and it's a JS keyword
// })
// let json = await res.json();
//     if (json.success) {
//         // DO SOMETHING
//     }
// }

// npm i axios
