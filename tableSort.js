// var sortFirstAsc = document.getElementById('sort-first-asc');
// var sortFirstDesc = document.getElementById('sort-first-desc');
//
// var sortSecondAsc = document.getElementById('sort-second-asc');
// var sortSecondDesc = document.getElementById('sort-second-desc');

function sortTable(tableId, sortClass, defaultOrder = "DESC") {

    let table = document.getElementById(tableId);
    let tableBody = table.getElementsByTagName("tbody")[0];
    let tableRows = tableBody.getElementsByTagName("tr");

    let data = [];
    for (let i = 0; i < tableRows.length; i++) {
        let values = tableRows[i].getElementsByTagName("td");
        let arrayValues = [];
        for (let j = 0; j < values.length; j++) {
            arrayValues.push(values[j]);
        }
        data.push(arrayValues);
    }
    // console.log(data);

    let titles = table.getElementsByTagName("thead")[0].getElementsByTagName("th");

    let order = defaultOrder;
    let sortButtons = [];
    let states = {}

    for (let index = 0; index < titles.length; index++) {

        if (titles[index].className === sortClass) {
            let button = document.createElement('button');
            button.innerHTML = order === "ASC" ? "&uarr;" : "&darr;";
            button.value = index.toString();
            let text = " " + titles[index].textContent.trim();
            titles[index].innerHTML = "";
            titles[index].append(button);
            titles[index].append(text);
            sortButtons.push(button);
            states[button] = order;
        }
    }

    function sortByColumn(columnIndex, reverse = false) {
        console.log(columnIndex, reverse);
        console.log(data);
        data.sort((row1, row2) => {
            // console.log(row1, row2);
            return row1[columnIndex].textContent.localeCompare(row2[columnIndex].textContent);
        });
        if (reverse) {
            data.reverse();
        }
        console.log(data);



    }

    sortButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (states[button] === "ASC") {
                button.innerHTML = "&darr;";
                states[button] = "DESC";
                sortByColumn(parseInt(button.value),false);
            } else {
                button.innerHTML = "&uarr;";
                states[button] = "ASC";
                sortByColumn(parseInt(button.value),true);
            }
            console.log(tableRows.length)
            let rowsCount = tableRows.length
            for (let i = 0; i < rowsCount ; i++) {
                console.log(rowsCount);
                // tableRows[i].remove();
            }
        })
    })
}

    //Sort Row

    // function sortRow(reversed = false) {
    //
    //     switching = true;
    //     /*Make a loop that will continue until
    //     no switching has been done:*/
    //     while (switching) {
    //         //start by saying: no switching is done:
    //         switching = false;
    //         rows = table.rows;
    //         /*Loop through all table rows (except the
    //         first, which contains table headers):*/
    //         for (i = 1; i < (rows.length - 1); i++) {
    //             //start by saying there should be no switching:
    //             shouldSwitch = false;
    //             /*Get the two elements you want to compare,
    //             one from current row and one from the next:*/
    //             x = rows[i].getElementsByTagName("TD")[0];
    //             y = rows[i + 1].getElementsByTagName("TD")[0];
    //             //check if the two rows should switch place:
    //             if (x != null && y != null) {
    //                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    //                     //if so, mark as a switch and break the loop:
    //                     shouldSwitch = true;
    //                     break;
    //                 }
    //             }
    //         }
    //         if (shouldSwitch) {
    //             /*If a switch has been marked, make the switch
    //             and mark that a switch has been done:*/
    //             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //             switching = true;
    //         }
    //
    //     }
    // }



//
//
// function sortTableFirstRowAsc() {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("myTable");
//     switching = true;
//     /*Make a loop that will continue until
//     no switching has been done:*/
//     while (switching) {
//         //start by saying: no switching is done:
//         switching = false;
//         rows = table.rows;
//         /*Loop through all table rows (except the
//         first, which contains table headers):*/
//         for (i = 1; i < (rows.length - 1); i++) {
//             //start by saying there should be no switching:
//             shouldSwitch = false;
//             /*Get the two elements you want to compare,
//             one from current row and one from the next:*/
//             x = rows[i].getElementsByTagName("TD")[0];
//             y = rows[i + 1].getElementsByTagName("TD")[0];
//             //check if the two rows should switch place:
//             if (x != null && y != null) {
//                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//                     //if so, mark as a switch and break the loop:
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//         }
//         if (shouldSwitch) {
//             /*If a switch has been marked, make the switch
//             and mark that a switch has been done:*/
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//         }
//     }
//
//     sortFirstAsc.hidden = true;
//     sortFirstDesc.hidden = false;
// }

// function sortTableFirstRowDesc() {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("myTable");
//     switching = true;
//     while (switching) {
//         switching = false;
//         rows = table.rows;
//         for (i = 1; i < (rows.length - 1); i++) {
//             shouldSwitch = false;
//             x = rows[i].getElementsByTagName("TD")[0];
//             y = rows[i + 1].getElementsByTagName("TD")[0];
//             if (x != null && y != null) {
//                 //Inverse <> for change ASC to DESC
//                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//         }
//         if (shouldSwitch) {
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//         }
//     }
//
//     sortFirstAsc.hidden = false;
//     sortFirstDesc.hidden = true;
// }
//
// function sortTableSecondRowAsc() {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("myTable");
//     switching = true;
//     /*Make a loop that will continue until
//     no switching has been done:*/
//     while (switching) {
//         //start by saying: no switching is done:
//         switching = false;
//         rows = table.rows;
//         /*Loop through all table rows (except the
//         first, which contains table headers):*/
//         for (i = 1; i < (rows.length - 1); i++) {
//             //start by saying there should be no switching:
//             shouldSwitch = false;
//             /*Get the two elements you want to compare,
//             one from current row and one from the next:*/
//             x = rows[i].getElementsByTagName("TD")[1];
//             y = rows[i + 1].getElementsByTagName("TD")[1];
//             //check if the two rows should switch place:
//             if (x != null && y != null) {
//                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//                     //if so, mark as a switch and break the loop:
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//         }
//         if (shouldSwitch) {
//             /*If a switch has been marked, make the switch
//             and mark that a switch has been done:*/
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//         }
//     }
//
//     sortSecondAsc.hidden = true;
//     sortSecondDesc.hidden = false;
// }
//
// function sortTableSecondRowDesc() {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("myTable");
//     switching = true;
//     while (switching) {
//         switching = false;
//         rows = table.rows;
//         for (i = 1; i < (rows.length - 1); i++) {
//             shouldSwitch = false;
//             x = rows[i].getElementsByTagName("TD")[1];
//             y = rows[i + 1].getElementsByTagName("TD")[1];
//             if (x != null && y != null) {
//                 //Inverse <> for change ASC to DESC
//                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//         }
//         if (shouldSwitch) {
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//         }
//     }
//
//     sortSecondAsc.hidden = false;
//     sortSecondDesc.hidden = true;
// }
//
//
//
//
// sortFirstAsc.addEventListener('click', function () {
//     sortTableFirstRowAsc();
// })
//
// sortFirstDesc.addEventListener('click', function () {
//     sortTableFirstRowDesc();
// })
//
// sortSecondAsc.addEventListener('click', function () {
//     sortTableSecondRowAsc();
// })
//
// sortSecondDesc.addEventListener('click', function () {
//     sortTableSecondRowDesc();
// })


// Call Funtion with option

sortTable(
    "myTable",
    "sort",
    "ASC"
);