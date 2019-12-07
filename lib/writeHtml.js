// so it can be used other places
module.exports = {
  // emps is the array of employee objects passed in
  write: function(emps) {
    //  needs fs to write to the file, and util to promisify fs functions
    const fs = require("fs");
    const util = require("util");

    // promisify writefile so we can cleanly finish writing before opening html
    const writeFileAsync = util.promisify(fs.writeFile);

    // create async fcn to write to the file; wait until write is done before continuing
    async function writeToFile(text) {
      try {
        // here is where we wait for write to be done
        await writeFileAsync("./lib/output/output.html", text);
      } catch (err) {
        //end of try block
        // handle error
        console.log(err);
      } // end of catch block
    } // end of async block

    const buildBegHtml = code => {
      // beginning html
      code = code + "<!DOCTYPE html> \n <html lang='en'>";

      // add header with meta & links, etc.
      code = code + "<head>\n";
      code = code + '<meta charset="UTF-8">\n';
      code =
        code +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
      code = code + '<meta http-equiv="X-UA-Compatible" content="ie=edge">\n';
      code =
        code +
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"        integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">\n';
      code = code + '<link rel="stylesheet" href="./output.css">\n';
      code = code + "<title>Employee Summary</title>\n";
      code = code + "</head>\n";

      // begin body with header, open container and row
      code = code + "<body>\n";
      code = code + '<h1 class="text-center">An Awesome Team!</h1>\n';
      code = code + "<container>\n";

      // d-flex, justify-content-around and flex-wrap should center the cards, but they don't...
      code =
        code +
        '<div class="row row-margin d-flex justify-content-around flex-wrap">\n';

      return code;
    }; // end of buildBegHtml function

    // creates a card for each employee
    const buildCard = (code, employee) => {
      let colEl =
        "<div class='col-sm-5 col-md-4 col-lg-3 border-info col-margin'>";
      code = code + colEl + "\n";

      // add the card div with classes
      let cardEl = "<div class='card mb-3'>";
      code = code + cardEl + "\n";

      // add the top of the card with classes & data
      let cardTopEl = "<div class='card-top'>";
      code = code + cardTopEl + "\n";

      // add headers to cardTopEl
      let h3El = `<h3 class="card-title">${employee.name}</h3>`;
      let h4El = `<h4 class="card-subtitle mb-2">${employee.title}</h4>`;
      // write to html with /div to close the card top
      code = code + h3El + "\n" + h4El + "\n" + "</div>" + "\n";

      // add the bottom of the card with classes &
      //    unordered list with data
      let cardBottomEl = "<div class='card-body card-bottom'>";
      code = code + cardBottomEl + "\n";

      // begin unordered list
      let listEl = "<ul>";
      // add first list item with the employee's id
      listEl = listEl + `<li>ID:  ${employee.id}</li>`;
      // add next list item with the employee's email address
      listEl = listEl + `<li>Email:  ${employee.email}</li>`;
      // the last item depends on what type of employee this is...
      switch (employee.title) {
        // Manager has office number
        case "Manager":
          listEl =
            listEl + `<li>Office Number:  ${employee.officeNumber}</li>` + "\n";
          break;
        // Engineer has Github username
        case "Engineer":
          listEl = listEl + `<li>Github:  ${employee.github}</li>` + "\n";
          break;
        // Intern has their school
        case "Intern":
          listEl = listEl + `<li>School:  ${employee.school}</li>` + "\n";
          break;
      } // of switch stmt

      // end the unordered list and the card body div, & write to html
      listEl = listEl + "</ul>\n </div>\n";
      code = code + listEl;

      // close the card & the column
      code = code + "</div> \n </div> \n";
      return code;
    }; // of buildCard

    const finishHtml = code => {
      // close div for row
      code = code + "</div>\n";
      // close container
      code = code + "</container>\n";
      // close body
      code = code + "</body>\n";
      // close html
      code = code + "</html>";
      return code;
    }; // of finishHtml

    let htmlCode = "";

    // built code at beginning of html that is always the same
    htmlCode = buildBegHtml(htmlCode);
    // for each card..

    emps.forEach(empObj => {
      // build new card for all other employees
      // add col div with classes
      htmlCode = buildCard(htmlCode, empObj);
    }); // end of forEach

    htmlCode = finishHtml(htmlCode);

    writeToFile(htmlCode);
  } // end of write
}; // of module exports