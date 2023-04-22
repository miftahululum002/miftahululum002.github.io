/** 
 * @author: O027-MIFTAHUL ULUM S.Pd 
 * @date: 2023-04-22 22:18:53 
 * @desc:  
 */
function getTemplate(index, data) {
    let template = `<tr>
        <td>${(index + 1)}</td>
        <td>${data.name}</td>
        <td>${data.year}</td>
        <td>${data.link}</td>
    </tr>`;
    return template;
}

$(function () {
    let fecthOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }
    const url = "assets/json/data.json";
    fetch(url, fecthOptions).then((response) => response.json()).then((data) => {
        let dataParsing = data.portfolios;
        dataParsing.forEach((element, index) => {
            let row = getTemplate(index, element);
            $('#portfolio-body').append(row);
        });
    });
})