/**
 * @author: O027-MIFTAHUL ULUM S.Pd
 * @date: 2023-04-22 22:18:53
 * @desc:
 */
function getTemplate(index, data) {
  let dateYear = data.year != undefined ? data.year : data.date;
  let template = `<tr>
        <td>${index + 1}.</td>
        <td>${data.name}</td>
        <td>${data.description}</td>
        <td>${data.technology}</td>
        <td>${dateYear}</td>
        <td>${data.link}</td>
    </tr>`;
  return template;
}

function getTemplateSertifikat(index, data) {
  let dateYear = data.year != undefined ? data.year : data.date;
  let link = "";
  data.link.forEach((item, ind) => {
    link += `<a href="${item}" target="_blank">Link ${ind + 1}</a><br>`;
  });
  // link += "";
  let template = `<tr>
        <td>${index + 1}.</td>
        <td>${data.name}</td>
        <td>${dateYear}</td>
        <td>${data.expired}</td>
        <td>${link}</td>
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
      let visual = getGaleriPortofolio(dataParsing);
      $("#container-visual").html(visual);
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
        let row = getTemplateSertifikat(index, element);
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
      let visual = getGaleriPortofolio(dataParsing);
      $("#container-visual-personal").html(visual);
    });
}

function getGaleriPortofolio(data) {
  let html = "";
  data.forEach((element, index) => {
    html += `<div class="col-lg-6 col-md-6 portfolio-item border border-1 px-1 filter-app">
      <div class="portfolio-wrap">
        <img src="${element.image}" class="img-fluid" alt="image-${element.shortname}">
        <div class="portfolio-info">
          <span>${element.shortname}</span>
          <p>Aplikasi Web</p>
          <div class="portfolio-links">
            <a href="${element.image}" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
            <a href="${element.image}" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>`;
  });
  return html;
}

$(function () {
  getSkills();
  getPortoTim();
  getSertifikat();
  getPortoPersonal();
});
