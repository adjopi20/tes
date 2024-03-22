function groupAnagrams(strs) {
    let result = {};
  for (let word of strs) {
      let cleansed = word.split("").sort().join("");
      if (result[cleansed]) {
        result[cleansed].push(word);
      } else {
        result[cleansed] = [word];
      }
    }
  return Object.values(result);
  }

let words = ["cook", "save", "taste", "aves", "vase", "state", "map"]; 
console.log(groupAnagrams(words));