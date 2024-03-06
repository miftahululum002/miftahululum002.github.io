/**
 * @author: O027-MIFTAHUL ULUM S.Pd
 * @date: 2023-04-22 22:18:53
 * @desc:
 */
function getTemplate(index, data) {
  let template = `<tr>
        <td>${index + 1}.</td>
        <td>${data.name}</td>
        <td>${data.year}</td>
        <td>${data.link}</td>
    </tr>`;
  return template;
}

function getContainerSkill(data) {
  return `<div class="progress">
	<span class="skill">${data.name} <i class="val">${data.value}${data.unit}</i></span>
	<div class="progress-bar-wrap">
		<div class="progress-bar" role="progressbar" aria-valuenow="${data.value}" aria-valuemin="0"
			aria-valuemax="100">
		</div>
	</div>
</div>`;
}

function getSkills() {
  const fecthOptions = getFetchOptions();
  const urlSkill = "assets/json/skills.json";
  fetch(urlSkill, fecthOptions)
    .then((response) => response.json())
    .then((data) => {
      let dataParsing = data.skills;
      dataParsing.forEach((element, index) => {
        let row = getContainerSkill(element);
        if (element.category == "teknis") {
          $("#container-teknis").append(row);
        } else {
          $("#container-other").append(row);
        }
      });
    });
}

function getFetchOptions() {
  let fecthOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fecthOptions;
}

function getPortoTim() {
  const url = "assets/json/data.json";
  const fecthOptions = getFetchOptions();
  fetch(url, fecthOptions)
    .then((response) => response.json())
    .then((data) => {
      let dataParsing = data.data;
      dataParsing.forEach((element, index) => {
        let row = getTemplate(index, element);
        $("#portfolio-body").append(row);
      });
    });
}

function getSertifikat() {
  const url = "assets/json/sertifikat.json";
  const fecthOptions = getFetchOptions();
  fetch(url, fecthOptions)
    .then((response) => response.json())
    .then((data) => {
      let dataParsing = data.data;
      dataParsing.forEach((element, index) => {
        let row = getTemplate(index, element);
        $("#certified-body").append(row);
      });
    });
}

function getPortoPersonal() {
  const urlPersonal = "assets/json/datapersonal.json";
  const fecthOptions = getFetchOptions();
  fetch(urlPersonal, fecthOptions)
    .then((response) => response.json())
    .then((data) => {
      let dataParsing = data.data;
      dataParsing.forEach((element, index) => {
        let row = getTemplate(index, element);
        $("#portfolio-personal-body").append(row);
      });
    });
}

$(function () {
  getSkills();
  getPortoTim();
  getSertifikat();
  getPortoPersonal();
});
