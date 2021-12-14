var colCount, condCount = 0, actCount = 0;
var dropdownVals = ["-", "T", "F"];

function start()
{
    var addCond = document.getElementsByClassName("addCondition");
    var addAct = document.getElementsByClassName("addAction");
    var colNum = document.getElementById("num_cols");
    var tblBtn = document.getElementById("createTable");
    colCount = colNum.value;

    addCond[0].addEventListener('click', addCondition);
    addAct[0].addEventListener('click', addAction);
    addCond[0].addEventListener('click', enableButton);
    addAct[0].addEventListener('click', enableButton);
    colNum.addEventListener('change', setColNum);
    tblBtn.addEventListener('click', buildTable);
}



function setColNum()
{
    var colNum = document.getElementById("num_cols").value;
    colCount = colNum;

    var condRow = document.getElementsByClassName("newCondRow");
    var actRow = document.getElementsByClassName("newActRow");

    for (let i = 0; i < condRow.length; i++)
    {
        var selects = condRow[i].getElementsByTagName('SELECT');

        if (colCount < selects.length)
        {
            var toSlice = Array.prototype.slice.call(selects);
            toSlice.splice(0, colCount);
            
            for (let j = 0; j < toSlice.length; j++)
            {
                var toDelete = document.getElementById(toSlice[j].id);
                toDelete.remove();
            }
        }
        else if (colCount > selects.length)
        {
            for (let k = selects.length; k < colCount; k++)
            {
                var newSelect = document.createElement("select");
                newSelect.id = condRow[i].id + "Select" + k;
                for (let j = 0; j < dropdownVals.length; j++)
                {
                    var option = document.createElement("option");
                    option.textContent = dropdownVals[j];
                    newSelect.appendChild(option);
                }

                condRow[i].appendChild(newSelect);
            }
        }
    
        
    }

    

    for (let i = 0; i < actRow.length; i++)
    {
        var actSelects = actRow[i].getElementsByTagName('SELECT');

        if (colCount < actSelects.length)
        {
            var actSlice = Array.prototype.slice.call(actSelects);
            actSlice.splice(0, colCount);
            
            for (let j = 0; j < actSlice.length; j++)
            {
                var actDelete = document.getElementById(actSlice[j].id);
                actDelete.remove();
            }
        }
        else if (colCount > actSelects.length)
        {
            for (let k = actSelects.length; k < colCount; k++)
            {
                var newSelect = document.createElement("select");
                newSelect.id = actRow[i].id + "Select" + k;
                for (let j = 0; j < dropdownVals.length; j++)
                {
                    var option = document.createElement("option");
                    option.textContent = dropdownVals[j];
                    newSelect.appendChild(option);
                }

                actRow[i].appendChild(newSelect);
            }
        }
    }
}

function addCondition()
{
    var condRow = document.getElementsByClassName("conditions");
    var condRowNum = document.getElementsByClassName("newCondRow").length;
    var br = document.createElement("br");


    if (condRowNum < 10)
    {
        var condDiv = document.createElement("div");
        condDiv.className = "newCondRow";
        condDiv.id = "cond" + condCount;
        condDiv.name = "Condition Number " + condCount;
        condDiv.innerText = "Name of Row";
        condDiv.style = "font-size:20px";
        condDiv.appendChild(br);
    
        var minBtn = document.createElement("button");
        minBtn.type="button";
        minBtn.name = "cond" + condCount;
        minBtn.addEventListener('click', removeRow);
        minBtn.addEventListener('click', enableButton);
        minBtn.innerHTML = '<i class="fas fa-minus-circle fa-2x" id="minus"></i>';
        minBtn.id = "minRow";
        condDiv.appendChild(minBtn);
    
        var conInput = document.createElement("input");
        conInput.id = "cond" + condCount + "Input";
        conInput.maxLength ="50";
        condDiv.appendChild(conInput);
    
        for (let i = 0; i < colCount; i++)
        {
            var newSelect = document.createElement("select");
            newSelect.id = "cond" + condCount + "Select" + i;
            for (let j = 0; j < dropdownVals.length; j++)
            {
                var option = document.createElement("option");
                option.textContent = dropdownVals[j];
                newSelect.appendChild(option);
            }
    
            condDiv.appendChild(newSelect);
        }
        var br = document.createElement("br");
        if (condCount == 0)
        {
            condRow[0].appendChild(br);
        }
    
        condRow[0].appendChild(condDiv);
        condCount += 1;
    }
  
}

function addAction()
{
    var actRow = document.getElementsByClassName("actions");
    var actRowNum = document.getElementsByClassName("newActRow").length;
    var br = document.createElement("br");

    if (actRowNum < 25)
    {
        var actDiv = document.createElement("div");
        actDiv.className = "newActRow";
        actDiv.id = "Act" + actCount;
        actDiv.innerText = "Name of Row";
        actDiv.style = "font-size:20px";
        actDiv.appendChild(br);
    
        var minBtn = document.createElement("button");
        minBtn.type="button";
        minBtn.name = "Act" + actCount;
        minBtn.addEventListener('click', removeRow);
        minBtn.addEventListener('click', enableButton);
        minBtn.innerHTML = '<i class="fas fa-minus-circle fa-2x" id="minus"></i>';
        minBtn.id = "minRow";
        actDiv.appendChild(minBtn);
    
        var conInput = document.createElement("input");
        conInput.id = "Act" + actCount + "Input";
        conInput.maxLength="50";
        actDiv.appendChild(conInput);
    
        for (let i = 0; i < colCount; i++)
        {
            var newSelect = document.createElement("select");
            newSelect.id = "act" + actCount + "Select" + i;
            for (let j = 0; j < dropdownVals.length; j++)
            {
                var option = document.createElement("option");
                option.textContent = dropdownVals[j];
                newSelect.appendChild(option);
            }
    
            actDiv.appendChild(newSelect);
        }
    
        var br = document.createElement("br");
        if (actCount == 0)
        {
            actRow[0].appendChild(br);
        }
    
        actRow[0].appendChild(actDiv);
        actCount += 1;
    }
   
}

function removeRow()
{
    var rowToDelete = document.getElementById(this.name);
    rowToDelete.parentNode.removeChild(rowToDelete);
}

function enableButton()
{
    var actNum = document.getElementsByClassName("actions");
    var condNum = document.getElementsByClassName("conditions");
    var actRowNum = document.getElementsByClassName("newActRow").length;
    var condRowNum = document.getElementsByClassName("newCondRow").length;
    var createTblBtn = document.getElementById("createTable");

    if (actNum[0].children.length > 4 && condNum[0].children.length > 4)
    {
        createTblBtn.disabled = false;
    }
    else if (actRowNum == 0 || condRowNum == 0)
    {
        createTblBtn.disabled = true;
    }
}

function buildTable()
{
    var tableDiv = document.getElementsByClassName("output");
    tableDiv[0].innerHTML="";
    var tableTitle = document.getElementById("title").value;
    var condRows = document.getElementsByClassName("newCondRow");
    var actRows = document.getElementsByClassName("newActRow");

    var table = document.createElement('table');
    var tHead = document.createElement('thead');
    var tHead2 = document.createElement('thead');
    var tBody = document.createElement('tbody');
    var tBody2 = document.createElement('tbody');
    var title = document.createElement('caption');
    title.innerHTML=tableTitle;
    title.id = "table_title";
    table.appendChild(title);

    table.appendChild(tHead);
    table.appendChild(tBody);

    var row1 = document.createElement('tr');
    var row2 = document.createElement('tr');
    var head1 = document.createElement('th');
    var head2 = document.createElement('th');
    var head3 = document.createElement('th');

    head1.innerHTML = "";
    head2.id="buffer";
    head2.innerHTML = "Rules";
    head2.colSpan = colCount;
    head2.id="header";
    row1.appendChild(head1);
    row1.appendChild(head2);
    row2.id="header";
    head3.innerHTML = "Conditions";
    head3.id="header";

    row1.appendChild(head1);
    row1.appendChild(head2);
    row2.appendChild(head3);
    console.log(colCount);
    for (let i = 1; i <= colCount; i++)
    {
        var ruleNum = document.createElement('td');
        ruleNum.innerHTML = i;
        ruleNum.id = "rule_number";
        row2.appendChild(ruleNum);
        console.log(i);
    }



    tHead.appendChild(row1);
    tHead.appendChild(row2);

    for (let i = 0; i < condRows.length; i++)
    {
        var input = document.getElementById(condRows[i].id + "Input").value;
        var selects = condRows[i].getElementsByTagName('SELECT');
        var colRow = document.createElement('tr');
        var colData = document.createElement('td');
        colData.innerHTML = input;
        colRow.appendChild(colData);
        
        for (let j = 0; j < selects.length; j++)
        {
            var selectData = document.createElement('td');
            selectData.innerHTML = selects[j].value;
            colRow.appendChild(selectData);
            
        }
        tBody.appendChild(colRow);
        table.appendChild(tBody);
    }


    var row1 = document.createElement('tr');
    var head1 = document.createElement('th');

    head1.innerHTML = "Actions";
    head1.id="header";
    row1.appendChild(head1);
    for (let i = 1; i <= colCount; i++)
    {
        var ruleNum = document.createElement('td');
        ruleNum.innerHTML = i;
        ruleNum.id = "rule_number";
        row1.appendChild(ruleNum);
    }
    tHead2.appendChild(row1);
    table.append(tHead2);
  
    for (let i = 0; i < actRows.length; i++)
    {
        var input = document.getElementById(actRows[i].id + "Input").value;
        var selects = actRows[i].getElementsByTagName('SELECT');
        var colRow = document.createElement('tr');
        var colData = document.createElement('td');
        colData.innerHTML = input;
        colRow.appendChild(colData);
        
        for (let j = 0; j < selects.length; j++)
        {
            var selectData = document.createElement('td');
            selectData.innerHTML = selects[j].value;
            colRow.appendChild(selectData);
            
        }
        tBody2.appendChild(colRow);
    } 
    table.appendChild(tBody2);

    tableDiv[0].appendChild(table);
}

window.addEventListener("load", start);