var colCount, condCount = 0, actCount = 0, rowCount = 0;
var dropdownVals = ["-", "T", "F"];

function start()
{
    var addCond = document.getElementsByClassName("addCondition");
    var addAct = document.getElementsByClassName("addAction");
    var colNum = document.getElementById("num_cols");
    colCount = colNum.value;

    addCond[0].addEventListener('click', addCondition);
    addAct[0].addEventListener('click', addAction);
    colNum.addEventListener('change', setColNum);
}

function setColNum()
{
    var colNum = document.getElementById("num_cols").value;
    colCount = colNum;
}

function addCondition()
{
    var condRow = document.getElementsByClassName("conditions");
    var br = document.createElement("br");


    var condDiv = document.createElement("div");
    condDiv.className = "newRow";
    condDiv.id = "cond" + condCount;
    condDiv.name = "Condition Number " + condCount;
    condDiv.innerText = "      Name of Row";
    condDiv.style = "font-size:20px";
    condDiv.appendChild(br);

    var conInput = document.createElement("input");
    conInput.id = "cond" + condCount + "Input";
    condDiv.appendChild(conInput);

    for (let i = 0; i < colCount; i++)
    {
        var newSelect = document.createElement("select");
        newSelect.id = "Cond" + condCount + "Select" + i;
        for (let j = 0; j < dropdownVals.length; j++)
        {
            var option = document.createElement("option");
            option.textContent = dropdownVals[j];
            newSelect.appendChild(option);
        }

        condDiv.appendChild(newSelect);
    }

    var minBtn = document.createElement("button");
    minBtn.type="button";
    minBtn.name = "cond" + condCount;
    minBtn.addEventListener('click', removeRow(this.name));
    minBtn.innerHTML = '<i class="fas fa-minus-circle fa-2x" id="minus"></i>';
    minBtn.id = "minRow";
    condDiv.appendChild(minBtn);

    var br = document.createElement("br");
    if (condCount == 0)
    {
        condRow[0].appendChild(br);
    }

    condRow[0].appendChild(condDiv);
    rowCount += 1;
    condCount += 1;
}

function addAction()
{
    var actRow = document.getElementsByClassName("actions");
    var br = document.createElement("br");

    var actDiv = document.createElement("div");
    actDiv.className = "newRow";
    actDiv.id = "Act" + actCount;
    actDiv.innerText = "      Name of Row";
    actDiv.style = "font-size:20px";
    actDiv.appendChild(br);

    var conInput = document.createElement("input");
    conInput.id = "Act" + actCount + "Input";
    actDiv.appendChild(conInput);

    for (let i = 0; i < colCount; i++)
    {
        var newSelect = document.createElement("select");
        newSelect.id = "Act" + actCount + "Select" + i;
        for (let j = 0; j < dropdownVals.length; j++)
        {
            var option = document.createElement("option");
            option.textContent = dropdownVals[j];
            newSelect.appendChild(option);
        }

        actDiv.appendChild(newSelect);
    }

    var minBtn = document.createElement("button");
    minBtn.type="button";
    minBtn.name = "Act" + actCount;
    minBtn.addEventListener('click', removeRow(this.name));
    minBtn.innerHTML = '<i class="fas fa-minus-circle fa-2x" id="minus"></i>';
    minBtn.id = "minRow";
    actDiv.appendChild(minBtn);

    var br = document.createElement("br");
    if (actCount == 0)
    {
        actRow[0].appendChild(br);
    }

    actRow[0].appendChild(actDiv);
    rowCount += 1;
    actCount += 1;
}

function removeRow(btn_name)
{
    rowCount -= 1;
}

window.addEventListener("load", start);