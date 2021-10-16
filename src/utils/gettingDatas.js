const x = () => {
  const articles = document.querySelectorAll("article.element-item");
  const output = [];
  const statsOutput = {};
  const namesOutput = {};
  let x;
  articles.forEach((article) => {
    const name = article.querySelector("h3").textContent;
    const nameId = name.replaceAll(" ", "").replaceAll("'", "");
    const runes = Array.from(article.querySelectorAll(".z-recipes")).map(
      (el) => el.textContent
    );

    const reqLvl = Number(article.querySelector(".zso_rwlvlrq").textContent);

    const allowed = Array.from(article.querySelectorAll("a.z-white")).map(
      (el) =>
        el.textContent
          .replaceAll("\n", "")
          .replaceAll(" ", "")
          .replaceAll("4socket", "")
    );
    const statsString =
      article.querySelectorAll(".z-smallstats")[1].innerText ||
      article.querySelectorAll(".z-smallstats")[2].innerText;

    const statsArrStrings = statsString.split("\n");

    const stats = statsArrStrings.map((statString) => {
      const id =
        // Array.from(statString)
        // .filter((letter) => {
        //   const isANumber = isNaN(letter);
        //   const isSign = letter === "+" || letter === "-" || letter === "%";
        //   return isANumber && !isSign;
        // })
        // .join("")
        statString
          .replaceAll(" ", "")
          .replaceAll("'", "")
          .replaceAll(")", "")
          .replaceAll("(", "")
          .replaceAll("/", "")
          .replaceAll(".", "")
          .replaceAll("+", "")
          .replaceAll("-", "");

      return {
        id: `stats.${id}`,
        defaultMessage: statString,
      };
    });
    output.push({ name: nameId, reqLvl, allowed, stats, runes });
  });

  const a = document.createElement("a");
  a.download = "xxx.json";
  var fileToSave = new Blob([JSON.stringify(namesOutput)], {
    type: "application/json",
  });
  a.href = URL.createObjectURL(fileToSave);
  a.click();
  return output;
};
