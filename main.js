

function appendData(data) {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < data.length; i++) {
        // table data and table row creation
        const row = document.createElement("tr");
        const nameOfChad = document.createElement("td");
        const companyOfChad = document.createElement("td");
        const idOfChad = document.createElement('td');
        // appending data from Json
        const cellText = document.createTextNode(data[i].fullName);
        const cellText2 = document.createTextNode(data[i].company);
        const cellText3 = document.createTextNode(data[i].id);
        //putting data into table
        nameOfChad.appendChild(cellText);
        companyOfChad.appendChild(cellText2);  
        idOfChad.appendChild(cellText3);

        row.appendChild(idOfChad);
        row.appendChild(nameOfChad);
        row.appendChild(companyOfChad);

        tblBody.appendChild(row);
      };
      tbl.appendChild(tblBody);
      document.body.appendChild(tbl);
      tbl.setAttribute("border", "2");
    };

const asyncForPete = async () => {
    try {
        const res = await fetch('./db.json');
        const data = await res.json();
        appendData(data);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log(' finally  -> data has been fetched - like a chad!');
    }
}

function resAfter2Sec() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log(`data has been fetched ;pp`);
            asyncForPete();
        }, 10000)
    });
};

resAfter2Sec();
