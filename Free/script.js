const waythere = document.querySelector('[data-way-there]')

const addexpense = document.querySelector('[data-add-expense-btn-budget]')

const viewexpenses = document.querySelector('[data-view-expenses]')

const numberofbox = document.querySelector('[data-number-of-box]')

const totalexpenses = document.querySelector('[data-total-expenses]')

const totalbudget = document.querySelector('[data-total-budget]')

const nameofbudget = document.querySelector('[data-name-budget]')

const budgetcontainer = document.querySelector('[data-budget-container]')

const expense = document.querySelector('[data-expense]')

const label = document.querySelector('[data-label]')

const expensesbox = document.querySelector('[data-expenses-box]')

const hider = document.querySelector('[data-hider]')

const addbudgetbtn = document.querySelector('[data-add-budget-btn]')

const addbudgetdetails = document.querySelector('[data-detail-budget]')

const closedetails = document.querySelector('[data-close-details]')

const inputNameOfBudget = document.querySelector('[data-detailnameofbudget]')

const labelfornameofbudget = document.querySelector('[data-labelfordnob]')

const inputBudget = document.querySelector('[data-amountofbudget]')

const labelforbudget = document.querySelector('[data-labelforaob]')

const addbudgetconfirm = document.querySelector('[data-addbudget-confirm]')

const labelpleaseenterallofthem = document.querySelector('[data-AlertforAddbudget]')

const cookiecontainer = document.querySelector('[data-cookieContainer]')

const cookieAcceptbtn = document.querySelector('[data-accept-btn]')

const cookieDismissbtn = document.querySelector('[data-dismiss-btn]')

const openDeleteMemory = document.querySelector('[data-openDeleteMemory]')

const deleteMemoryContainer = document.querySelector('[data-deleteMemoryContainer]')

const deleteMemoryBtn = document.querySelector('[data-deleteMemoryBtn]')

const cancelMemoryBtn = document.querySelector('[data-cancelMemoryBtn]')

const budgetscontainer = document.querySelector('[data-budget-container]')
const totaltotalexpenses = document.querySelector('[data-total-total-expenses]')
const totaltotalbudget = document.querySelector('[data-total-total-budget]')
const totalpercentage = document.querySelector('[data-total-percentage-bar-main]')
const totalwaythere = document.querySelector('[data-total-way-there]')

const quizHolder = document.querySelector('[data-quizHolder]')
const quizYes = document.querySelector('[data-usedBudBeforeConfirm]')
const quizNo = document.querySelector('[data-usedBudBeforeCancel]')
const quizText = document.querySelector('[data-quizText]')
const quizTex2 = document.querySelector('[data-quizText2]')
const BudgeterText = document.querySelector('[data-BudgeterText]')


var firsttime = 1

var expenseeg

var expensesarray = []

var numberofexpense = 0

var showorhide = 1

var budgetname

var budgetAmount

var budgetnameentered = 0

var budgetAmountentered = 0

var numofbudgetcreated = 1

var showorhideAb = 1

var expenseegAb

var closeOrOpenMemory = 0

var usedOrTut = 0 // 0 = used 1 = tut

//
//GetTheProgressbars()

addEventListeners()
updatetotal()
cookiesInitialize()

//update()

// function GetTheProgressbars() {

//     const totalbudgetpb = totalbudget.getAttribute('data-total-budget')

//     const totalexpensespb = totalexpenses.getAttribute('data-total-expenses')

//     console.log(totalbudgetpb, totalexpensespb)

//     const dividerpb = totalbudgetpb / totalexpensespb

//     console.log(dividerpb);

//     const percentagepb = 100 / dividerpb + '%'

//     if (100 / dividerpb > 100) {

//         console.log("WHAT")

//         waythere.style.width = '100%'

//         return

//     }

//     console.log(percentagepb);

//     waythere.style.width = percentagepb

// }

// const testThingy = "hello mr meSix look at me"
// console.log(testThingy.slice(-1));
// const otherTestThingy = testThingy.slice(0, -1)
// console.log(otherTestThingy);

// var numOfEs = 0
// var numofesstring = "132#321#32#213#3#32#23#32#32#23#32#12#342#12#34#12#34#12#43#12#43#12#43#12#34#12#43#12#"
// var numofesstringB = numofesstring
// console.log(numofesstring.length);

// for (let i = 1; i < numofesstring.length; i++) {
//     if (numofesstringB.slice(-1) == "#")
//     {
//         numOfEs += 1
//     }
//    // console.log(i);
//     numofesstringB = numofesstringB.slice(0, -1)
// }

//console.log(numOfEs);


function tutorial() {
    if (localStorage.getItem('HasGoneTroughTut'))
    {
        quizHolder.remove()
        return
    }
    setTimeout(() => {
         setTimeout(() => {
            console.log('you havent done tutorial');
         }, 400)
        //  let doneTut = "You haven't done the Tutorial.\nDo you want to do it?"
        //  if (confirm(doneTut))
        //  {        
        //     localStorage.setItem('HasGoneTroughTut', "true")
        //     window.location.assign('/BudgetApp/RC4/Tutorial/Tutorial.html')
        //  }
        //  localStorage.setItem('HasGoneTroughTut', "true")
        quizYes.addEventListener('click', () => {
            if( usedOrTut == 0)
            {
                quizHolder.classList.add('hideQuestion')
                setTimeout(() => {
                    quizHolder.remove()
                }, 400)
                localStorage.setItem('HasGoneTroughTut', "true")
            }
            else {
                localStorage.setItem('HasGoneTroughTut', "true")
                window.location.assign('/BudgetApp/RC4/Tutorial/Tutorial.html')
            }
        })
        quizNo.addEventListener('click', () => {
            if (usedOrTut == 0) {
                quizText.classList.add('hideQuestion')
                setTimeout(() => {
                usedOrTut = 1;
                quizText.textContent = "Do you want to do a quick tutorial?"
                quizText.style.width = "15ch"
                quizText.classList.remove('hideQuestion')
            }, 400);
            }
            else {
                quizHolder.classList.add('hideQuestion')
                setTimeout(() => {
                    quizHolder.remove()
                }, 400)
                localStorage.setItem('HasGoneTroughTut', "true")
            }

        })
        quizHolder.classList.remove('hideQuestion')
        setTimeout(() => {
            BudgeterText.classList.remove('smallText')
        }, 100)

    }, 500)
}

tutorial()

function cookiesInitialize() {
    if(!localStorage.getItem("numofbudget"))
    {
        localStorage.setItem("numofbudget", 0)
    }
    cookieAcceptbtn.addEventListener("click", () => {
        cookieAcceptbtn.disabled = true
        cookieDismissbtn.disabled = true
        cookiecontainer.classList.remove('show')
        localStorage.setItem("cookieBannerDisplayed", "true")
    })
    cookieDismissbtn.addEventListener("click", () => {
        cookiecontainer.classList.remove('show')
    })
    if (!localStorage.getItem("cookieBannerDisplayed"))
    {
        localStorage.clear()
        localStorage.setItem("numofbudget", 0)
        setTimeout(() => {
            cookiecontainer.classList.add('show')
        }, 2000)
    }
    loadBudgets()
    console.log("loadingBudgets...");
}

function updatetotal() {
    updatetotalexpenses()
    updatetotalbudget()
    updatetotalpercentage()
}

function updatetotalexpenses() {
    totaltotalexpenses.textContent = '$' + totaltotalexpenses.dataset.totalTotalExpenses
}

function updatetotalbudget() {
    totaltotalbudget.textContent = '/ $' + totaltotalbudget.dataset.totalTotalBudget
}

function updatetotalpercentage() {
    if (parseInt(totaltotalbudget.dataset.totalTotalBudget) == 0 && parseInt(totaltotalexpenses.dataset.totalTotalExpenses) == 0)
    {
        totalwaythere.dataset.divider = 0;
        totalwaythere.style.width = "0%"
    }
    else {
        totalwaythere.dataset.divider = totaltotalbudget.dataset.totalTotalBudget / totaltotalexpenses.dataset.totalTotalExpenses    
        if (100 / totalwaythere.dataset.divider > 100)
        {
            totalwaythere.style.width = '100%'
            return
        }
        totalwaythere.style.width = 100 / totalwaythere.dataset.divider + "%"
    }

}

function addEventListeners() {

   // expenseGather()

    nameofbudgetGather()

    gatherBudgetAmount()

   // addexpense.addEventListener('click', AddExpense)

    //
  //viewexpenses.addEventListener('click', showhideExpenses)

    addbudgetbtn.addEventListener('click', DetailsforAddbudget)

    closedetails.addEventListener('click', CloseDetails)

    addbudgetconfirm.addEventListener('click', CreateBudget)

    openDeleteMemory.addEventListener('click', () => {
        if (closeOrOpenMemory == 0)
        {
             DeleteMemoryOpen()
             closeOrOpenMemory = 1
        }
        else if (closeOrOpenMemory == 1)
        {
            DeleteMemoryClose()
            closeOrOpenMemory = 0
        }
    })

    deleteMemoryBtn.addEventListener('click', DeleteLocalMemory)

    cancelMemoryBtn.addEventListener('click', DeleteMemoryClose)

}

function CreateBudget() {
    if (budgetAmount == "" || budgetAmount == null || budgetname == null || budgetname == "") {

        console.log('Please enter All of them')

        labelpleaseenterallofthem.classList.add('show')

        setTimeout(() => {

            labelpleaseenterallofthem.classList.remove('show')

        }, 2000);

        return

    }

    if (budgetAmount < 1 || budgetAmount > 99999 || budgetname.toString().length > 16)
    {   
        labelpleaseenterallofthem.textContent = "Please Enter VALID values"
        labelpleaseenterallofthem.classList.add('show')

        setTimeout(() => {

            labelpleaseenterallofthem.classList.remove('show')
            setTimeout(() => {
                labelpleaseenterallofthem.textContent = "Please Enter ALL of them"
            }, 500)

        }, 2000);
        return
    }

    console.log(budgetname, budgetAmount);

    addBudget()

    budgetAmount = ""

    budgetname = ""

    addbudgetdetails.classList.remove('show')

    addbudgetconfirm.disabled = true

    setTimeout(() => {

        inputBudget.value = ""

        inputNameOfBudget.value = "" 

        addbudgetconfirm.disabled = false

    }, 500)

}

function  DeleteMemoryOpen() {
    deleteMemoryContainer.classList.remove('hide')
}

function DeleteLocalMemory() {
    localStorage.clear()
    location.reload()
}

function DeleteMemoryClose() {
    deleteMemoryContainer.classList.add('hide')
}

function gatherBudgetAmount() {

    inputBudget.addEventListener('input', e => {

        budgetAmount = e.target.value

        if (e.target.value != ""){

            labelforbudget.classList.add('hide')

            //budgetAmountentered = 1

        }

        if (e.target.value == ""){

            labelforbudget.classList.remove('hide')

            //budgetAmountentered = 0

        }   

    })

}

function nameofbudgetGather() {

    inputNameOfBudget.addEventListener('input', e => {

        budgetname = e.target.value

        if (e.target.value != ""){

            labelfornameofbudget.classList.add('hide')

            budgetAmountentered = 1

        }

        if (e.target.value == ""){

            labelfornameofbudget.classList.remove('hide')

            budgetAmountentered = 0

        }

        //console.log(e);

    })

}

function CloseDetails() {

    addbudgetdetails.classList.remove('show')

}

function DetailsforAddbudget() {

    addbudgetdetails.classList.add('show')

}

 

function addBudget() {

    var numofbudget = localStorage.getItem("numofbudget")

    localStorage.setItem("nameOfBudget" + numofbudget, budgetname)

    localStorage.setItem("amountOfBudget" + numofbudget, budgetAmount)
    
    localStorage.setItem("loadBudgetExpense" + numofbudget, 0)

    const budgetbox = document.createElement('div')

    budgetbox.classList.add('budget-box')

    budgetcontainer.prepend(budgetbox)

    //

    const nameOfBudget = document.createElement('div')

    nameOfBudget.textContent = budgetname

    nameOfBudget.classList.add('name-budgetAddedBudget', 'ontop')

    budgetbox.prepend(nameOfBudget)

    //

    const expensesAB = document.createElement('div')

    expensesAB.classList.add('total-expensesAddedBudget', 'ontop')

    expensesAB.dataset.totalExpensesAddedBudget = 0

    expensesAB.textContent = "$" + 0

    budgetbox.append(expensesAB)

    //
    totaltotalbudget.dataset.totalTotalBudget =  parseInt(totaltotalbudget.dataset.totalTotalBudget) + parseInt(budgetAmount)
    updatetotal()
    const budgetAB = document.createElement('div')

    budgetAB.classList.add('total-budgetAddedBudget', 'ontop')

    budgetAB.dataset.totalBudgetAddedBudget = budgetAmount

    budgetAB.dataset.totalbudgethalf = budgetAB.dataset.totalBudgetAddedBudget / 2

    budgetAB.dataset.totalbudgetquarter = budgetAB.dataset.totalBudgetAddedBudget / 4

    budgetAB.dataset.totalbudgetthreeforths = budgetAB.dataset.totalbudgetquarter * 3

    budgetAB.textContent = "/ $" + budgetAmount

    budgetbox.append(budgetAB)

    //

    const percantagebarmainAB = document.createElement('div')

    percantagebarmainAB.classList.add('percentage-bar-mainAddedBudget', 'ontop')

    percantagebarmainAB.dataset.percentageBarMainAddedBudget

    //percantagebarmainAB.textContent = "pbmab"

    budgetbox.append(percantagebarmainAB)

    //

    const waythereAB = document.createElement('div')

    waythereAB.classList.add('way-thereAddedBudget', 'ontop')

    waythereAB.dataset.wayThereAddedBudget

   //waythereAB.textContent = "hello"

    percantagebarmainAB.append(waythereAB)

    //

    const errormessage = document.createElement('label')

    errormessage.classList.add('errorppavAddedBudget', 'ontop')

    errormessage.dataset.labelAddedBudget

    errormessage.htmlFor = "expenseAddedBudget"

    errormessage.textContent = "Please Provide A Value"

    budgetbox.append(errormessage)

    //

    const inputAB = document.createElement('input')

    inputAB.type = 'number'

    inputAB.classList.add('expenseAddedBudget', 'ontop')

    inputAB.id = 'expenseAddedBudget'

    inputAB.dataset.expenseAddedBudget

    budgetbox.append(inputAB)

    //

    const buttonAddExpenseAB = document.createElement('button')

    buttonAddExpenseAB.classList.add('Add-expenseAddedBudget', 'ontop')

    buttonAddExpenseAB.dataset.addExpenseBtnBudgetAddedBudget

    buttonAddExpenseAB.textContent = "Add Expense"

    budgetbox.append(buttonAddExpenseAB)

    //

    const buttonViewExpensesAB = document.createElement('button')

    buttonViewExpensesAB.classList.add('View-expensesAddedBudget', 'ontop')

    buttonViewExpensesAB.dataset.viewExpensesAddedBudget

    buttonViewExpensesAB.textContent = "View Expenses"

    budgetbox.append(buttonViewExpensesAB)

    //

    const hiderAB = document.createElement('div')

    hiderAB.classList.add('hiderAddedBudget', 'ontopmid')

    budgetbox.append(hiderAB)

    //

    const expensesboxAB = document.createElement('div')

    expensesboxAB.classList.add('expensesboxAddedBudget', 'onbottom')

    expensesboxAB.dataset.expensesbox

    budgetbox.append(expensesboxAB)
    budgetbox.classList.add('pop-up')
    //
    
    const deleteBudBtn = document.createElement('button')
    deleteBudBtn.classList.add('delete-budget-btn')
    expensesboxAB.append(deleteBudBtn)

    //

    deleteBudBtn.addEventListener('click', () => {
        let sure = "Are you sure you want to Delete This Budget"
        if(confirm(sure)) {
                    budgetbox.classList.add('removing')  
        expensesboxAB.classList.remove('show')
        setTimeout (() => {
            deleteBudBtn.parentElement.parentElement.remove()
        }, 600)
        totaltotalbudget.dataset.totalTotalBudget =  parseInt(totaltotalbudget.dataset.totalTotalBudget) - parseInt(localStorage.getItem('amountOfBudget' + numofbudget))
        totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(localStorage.getItem('loadBudgetExpense' + numofbudget))
        console.log(totaltotalbudget.dataset.totalTotalBudget, totaltotalexpenses.dataset.totalTotalExpenses);
        updatetotal()
        localStorage.removeItem('ArrayOfExpenses' + numofbudget)
        localStorage.removeItem('loadBudgetExpense' + numofbudget)
        localStorage.removeItem('nameOfBudget' + numofbudget)
        localStorage.removeItem('amountOfBudget' + numofbudget)
        }
    })

  buttonViewExpensesAB.addEventListener('click', () => {

        if (expensesboxAB.classList.contains('show')) {

            expensesboxAB.classList.remove('show')

        }  

        else

        {

            expensesboxAB.classList.add('show') 

        }

    })

    console.log(budgetAB.dataset.totalBudgetAddedBudget, budgetAB.dataset.totalbudgetthreeforths, budgetAB.dataset.totalbudgethalf)

    inputAB.addEventListener('input', e => {

        if(!inputAB.classList.contains('doneonce'))

        {

            inputAB.dataset.input = e.target.value

            inputAB.classList.add('doneonce')

            buttonAddExpenseAB.addEventListener('click', () => {

                if ( inputAB.dataset.input < 0.1 || inputAB.dataset.input > 99999)

                {
                    errormessage.textContent = "Please enter a VALID value"
                    errormessage.classList.add('show')
                    inputAB.classList.add('move-left')
                    setTimeout(() => {

                    errormessage.classList.remove('show')
                        setTimeout(() => {
                            errormessage.textContent = "Please Provide a Value"
                            inputAB.classList.remove('move-left')
                        })
                    }, 1000)

                }
                else if (inputAB.dataset.input == "" ) {

                }

                else 

                {

                //if (!inputAB.classList.contains('addedremover')) {

                //}

                //console.log("it works!", e.target.value)

                // console.log(inputAB.getAttribute('data-input'))    

                expensesAB.dataset.totalExpensesAddedBudgetbefore = expensesAB.dataset.totalExpensesAddedBudget

                expensesAB.dataset.totalExpensesAddedBudget = parseInt(expensesAB.dataset.totalExpensesAddedBudget) + parseInt(inputAB.dataset.input)

                //console.log(expensesAB.dataset.totalExpensesAddedBudget); 

                expensesAB.textContent = "$" + expensesAB.dataset.totalExpensesAddedBudget
                totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) + parseInt(inputAB.dataset.input)
                updatetotal()
                percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget

                waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider

                if (waythereAB.dataset.percentage > 100) {

                    waythereAB.style.width = '100%'

                }

                else {

                    waythereAB.style.width = waythereAB.dataset.percentage + "%"

                } 

                if (expensesAB.dataset.totalExpensesAddedBudget > parseInt(budgetAB.dataset.totalBudgetAddedBudget) && !budgetbox.classList.contains('overbudget')){

                    budgetbox.classList.add('overbudget')

                    inputAB.classList.add('overbudget')

                    console.log("overbudget")

                    buttonAddExpenseAB.classList.add('overbudget')

                    buttonViewExpensesAB.classList.add('overbudget')

                    hiderAB.classList.add('overbudget')

                    waythereAB.classList.add('overthreeforths')

                    waythereAB.classList.remove("overhalf")

                }

                else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')){

                    waythereAB.classList.add('overthreeforths')

                    console.log("over34")

                    waythereAB.classList.remove("overhalf")

                }

                else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgethalf)){

                    console.log("overhalf")

                    waythereAB.classList.add("overhalf")

                }

                const newexpense = document.createElement('div')

                newexpense.classList.add('expenses')

                expensesboxAB.append(newexpense)

                const newexpenseamount = document.createElement('div')

                newexpenseamount.classList.add('amount')

                newexpenseamount.dataset.amount = inputAB.dataset.input

                newexpenseamount.textContent = "$" + inputAB.dataset.input

                newexpense.append(newexpenseamount)

                const newexpensebtn = document.createElement('button')

                newexpensebtn.classList.add('removebtn')

                newexpense.append(newexpensebtn)

                newexpensebtn.addEventListener('click', () => {

                    expensesAB.dataset.totalExpensesAddedBudgetRE = expensesAB.dataset.totalExpensesAddedBudget

                    expensesAB.dataset.totalExpensesAddedBudget = expensesAB.dataset.totalExpensesAddedBudgetRE - newexpenseamount.dataset.amount

                    localStorage.setItem("loadBudgetExpense" + numofbudget, parseInt(localStorage.getItem("loadBudgetExpense" + numofbudget)) - parseInt(newexpenseamount.dataset.amount))

                    removeSavedExpense(newexpenseamount.dataset.amount, numofbudget)

                    expensesAB.textContent = "$" + expensesAB.dataset.totalExpensesAddedBudget

                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget
                    totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(newexpenseamount.dataset.amount)
                    updatetotal()
                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider

                    if (waythereAB.dataset.percentage > 100) {

                        waythereAB.style.width = '100%'

                    }

                    else {

                        waythereAB.style.width = waythereAB.dataset.percentage + "%"

                    } 

                    

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalBudgetAddedBudget) )

                    {

                        budgetbox.classList.remove('overbudget')

                        inputAB.classList.remove('overbudget')

                        console.log("averbudget")

                        buttonAddExpenseAB.classList.remove('overbudget')

                        buttonViewExpensesAB.classList.remove('overbudget')

                        hiderAB.classList.remove('overbudget')

                    }

                    

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalbudgetthreeforths))

                    {

                        waythereAB.classList.remove('overthreeforths')

                    }

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalbudgethalf) && !waythereAB.classList.contains("overhalf")){

                        waythereAB.classList.remove('overhalf')

                    }

                    newexpense.remove()

                })

                localStorage.setItem("loadBudgetExpense" + numofbudget, parseInt(parseInt(localStorage.getItem("loadBudgetExpense"+ numofbudget)) + parseInt(inputAB.dataset.input)) )
                saveExpenses(parseInt(inputAB.dataset.input), numofbudget)

                inputAB.dataset.input = ""

                inputAB.value = ""
                
                
                }

            })

        }

        inputAB.dataset.input = e.target.value

    })

    buttonAddExpenseAB.addEventListener('click', () => {        

        if( inputAB.value == ""){

            errormessage.classList.add('show')

            setTimeout(() => {

                errormessage.classList.remove('show')

            }, 1000)

        }

    })
    localStorage.setItem("numofbudget", parseInt(localStorage.getItem("numofbudget")) + 1)
}
//--------------------------------------------------------------------------------------------------------
function loadBudgets() {
    //addPreviousBudgets("test", 1300, 700)
    //totalTotalExpenses = 0
    var readerNum = 0;
    for (let i = 0; i < localStorage.getItem("numofbudget"); i++) {
          addPreviousBudgets(localStorage.getItem("nameOfBudget" + readerNum), localStorage.getItem("amountOfBudget" + readerNum), localStorage.getItem("loadBudgetExpense" + readerNum), readerNum, localStorage.getItem("ArrayOfExpenses" + readerNum))
          //addToTotal(localStorage.getItem("loadBudgetExpense" + readerNum))
         // totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) + parseInt(localStorage.getItem("loadBudgetExpense" + readerNum))
          readerNum += 1
    }
}

function saveExpenses(amount, ID) {
    if (localStorage.getItem("ArrayOfExpenses" + ID) == null)
    {
        localStorage.setItem("ArrayOfExpenses" + ID, amount + "#")
        return
    }
    localStorage.setItem("ArrayOfExpenses" + ID, localStorage.getItem("ArrayOfExpenses" + ID) + amount + "#" ) // AOE+ID = AOE+ID+#+A 300 = 300#100
}

function removeSavedExpense(amount, ID) {
    let StringA = localStorage.getItem('ArrayOfExpenses' + ID)
    let StringB = StringA.replace(amount + "#", '')
    localStorage.setItem('ArrayOfExpenses' + ID, StringB)
}

function loadExpenses()
{

}

function addToTotal(amount) {

}

function addPreviousBudgets(loadBudgetName, loadBudgetAmount, loadBudgetExpense, numID, expenseString) {
    if (localStorage.getItem('nameOfBudget' + numID) == null || localStorage.getItem('nameOfBudget' + numID) == undefined || localStorage.getItem('nameOfBudget' + numID) == "") return
    const budgetbox = document.createElement('div')

    budgetbox.classList.add('budget-box')

    budgetcontainer.prepend(budgetbox)

    //

    const nameOfBudget = document.createElement('div')

    nameOfBudget.textContent = loadBudgetName

    nameOfBudget.classList.add('name-budgetAddedBudget', 'ontop')

    budgetbox.prepend(nameOfBudget)

    //

    const expensesAB = document.createElement('div')

    expensesAB.classList.add('total-expensesAddedBudget', 'ontop')

    expensesAB.dataset.totalExpensesAddedBudget = loadBudgetExpense

    expensesAB.textContent = "$" + loadBudgetExpense

    budgetbox.append(expensesAB)

    //
    totaltotalbudget.dataset.totalTotalBudget =  parseInt(totaltotalbudget.dataset.totalTotalBudget) + parseInt(loadBudgetAmount)
    updatetotal()
    const budgetAB = document.createElement('div')

    budgetAB.classList.add('total-budgetAddedBudget', 'ontop')

    budgetAB.dataset.totalBudgetAddedBudget = loadBudgetAmount

    budgetAB.dataset.totalbudgethalf = budgetAB.dataset.totalBudgetAddedBudget / 2

    budgetAB.dataset.totalbudgetquarter = budgetAB.dataset.totalBudgetAddedBudget / 4

    budgetAB.dataset.totalbudgetthreeforths = budgetAB.dataset.totalbudgetquarter * 3

    budgetAB.textContent = "/ $" + loadBudgetAmount

    budgetbox.append(budgetAB)

    //

    const percantagebarmainAB = document.createElement('div')

    percantagebarmainAB.classList.add('percentage-bar-mainAddedBudget', 'ontop')

    percantagebarmainAB.dataset.percentageBarMainAddedBudget

    //percantagebarmainAB.textContent = "pbmab"

    budgetbox.append(percantagebarmainAB)

    //

    const waythereAB = document.createElement('div')

    waythereAB.classList.add('way-thereAddedBudget', 'ontop')

    waythereAB.dataset.wayThereAddedBudget
    waythereAB.style.width = loadBudgetExpense / loadBudgetAmount  * 100 + "%"

   //waythereAB.textContent = "hello"

    percantagebarmainAB.append(waythereAB)

    //

    const errormessage = document.createElement('label')

    errormessage.classList.add('errorppavAddedBudget', 'ontop')

    errormessage.dataset.labelAddedBudget

    errormessage.htmlFor = "expenseAddedBudget"

    errormessage.textContent = "Please Provide A Value"

    budgetbox.append(errormessage)

    //

    const inputAB = document.createElement('input')

    inputAB.type = 'number'

    inputAB.classList.add('expenseAddedBudget', 'ontop')

    inputAB.id = 'expenseAddedBudget'

    inputAB.dataset.expenseAddedBudget

    budgetbox.append(inputAB)

    //

    const buttonAddExpenseAB = document.createElement('button')

    buttonAddExpenseAB.classList.add('Add-expenseAddedBudget', 'ontop')

    buttonAddExpenseAB.dataset.addExpenseBtnBudgetAddedBudget

    buttonAddExpenseAB.textContent = "Add Expense"

    budgetbox.append(buttonAddExpenseAB)

    //

    const buttonViewExpensesAB = document.createElement('button')

    buttonViewExpensesAB.classList.add('View-expensesAddedBudget', 'ontop')

    buttonViewExpensesAB.dataset.viewExpensesAddedBudget

    buttonViewExpensesAB.textContent = "View Expenses"

    budgetbox.append(buttonViewExpensesAB)

    //

    const hiderAB = document.createElement('div')

    hiderAB.classList.add('hiderAddedBudget', 'ontopmid')

    budgetbox.append(hiderAB)

    //

    const expensesboxAB = document.createElement('div')

    expensesboxAB.classList.add('expensesboxAddedBudget', 'onbottom')

    expensesboxAB.dataset.expensesbox

    budgetbox.append(expensesboxAB)
    budgetbox.classList.add('pop-up')
    //
        
    const deleteBudBtn = document.createElement('button')
    deleteBudBtn.classList.add('delete-budget-btn')
    expensesboxAB.append(deleteBudBtn)

    //  

    deleteBudBtn.addEventListener('click', () => {
        let sure = "Are you sure you want to Delete This Budget"
        if(confirm(sure)) {
        budgetbox.classList.add('removing')  
        expensesboxAB.classList.remove('show')
        setTimeout (() => {
            deleteBudBtn.parentElement.parentElement.remove()
        }, 600)
        totaltotalbudget.dataset.totalTotalBudget =  parseInt(totaltotalbudget.dataset.totalTotalBudget) - parseInt(localStorage.getItem('amountOfBudget' + numID))
        totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(localStorage.getItem('loadBudgetExpense' + numID))
        console.log(totaltotalbudget.dataset.totalTotalBudget, totaltotalexpenses.dataset.totalTotalExpenses);
        updatetotal()
        localStorage.removeItem('ArrayOfExpenses' + numID)
        localStorage.removeItem('loadBudgetExpense' + numID)
        localStorage.removeItem('nameOfBudget' + numID)//
        localStorage.removeItem('amountOfBudget' + numID)
        }
    })



  buttonViewExpensesAB.addEventListener('click', () => {

        if (expensesboxAB.classList.contains('show')) {

            expensesboxAB.classList.remove('show')

        }  

        else

        {

            expensesboxAB.classList.add('show') 

        }

    })

   // console.log(budgetAB.dataset.totalBudgetAddedBudget, budgetAB.dataset.totalbudgetthreeforths, budgetAB.dataset.totalbudgethalf)
    //updatetotal()
    inputAB.addEventListener('input', e => {

        if(!inputAB.classList.contains('doneonce'))

        {

            inputAB.dataset.input = e.target.value

            inputAB.classList.add('doneonce')

            buttonAddExpenseAB.addEventListener('click', () => {

                if ( inputAB.dataset.input < 1 || inputAB.dataset.input > 99999)

                {
                    errormessage.textContent = "Please enter a VALID value"
                    errormessage.classList.add('show')
                    inputAB.classList.add('move-left')
                    setTimeout(() => {

                    errormessage.classList.remove('show')
                        setTimeout(() => {
                            errormessage.textContent = "Please Provide a Value"
                            inputAB.classList.remove('move-left')
                        })
                    }, 1000)

                }
                else if (inputAB.dataset.input == "" ) {

                }

                else 

                {

                //if (!inputAB.classList.contains('addedremover')) {

                //}

                //console.log("it works!", e.target.value)

                // console.log(inputAB.getAttribute('data-input'))    

                expensesAB.dataset.totalExpensesAddedBudgetbefore = expensesAB.dataset.totalExpensesAddedBudget

                expensesAB.dataset.totalExpensesAddedBudget = parseInt(expensesAB.dataset.totalExpensesAddedBudget) + parseInt(inputAB.dataset.input)

                //console.log(expensesAB.dataset.totalExpensesAddedBudget); 

                expensesAB.textContent = "$" + expensesAB.dataset.totalExpensesAddedBudget
                totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) + parseInt(inputAB.dataset.input)
                updatetotal()
                saveExpenses(parseInt(inputAB.dataset.input), numID)
                percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget

                waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider

                if (waythereAB.dataset.percentage > 100) {

                    waythereAB.style.width = '100%'

                }

                else {

                    waythereAB.style.width = waythereAB.dataset.percentage + "%"

                } 

                if (expensesAB.dataset.totalExpensesAddedBudget > parseInt(budgetAB.dataset.totalBudgetAddedBudget) && !budgetbox.classList.contains('overbudget')){

                    budgetbox.classList.add('overbudget')

                    inputAB.classList.add('overbudget')

                    console.log("overbudget")

                    buttonAddExpenseAB.classList.add('overbudget')

                    buttonViewExpensesAB.classList.add('overbudget')

                    hiderAB.classList.add('overbudget')

                    waythereAB.classList.add('overthreeforths')

                    waythereAB.classList.remove("overhalf")

                }

                else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')){

                    waythereAB.classList.add('overthreeforths')

                    console.log("over34")

                    waythereAB.classList.remove("overhalf")

                }

                else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgethalf)){

                    console.log("overhalf")

                    waythereAB.classList.add("overhalf")

                }

                const newexpense = document.createElement('div')

                newexpense.classList.add('expenses')

                expensesboxAB.append(newexpense)

                const newexpenseamount = document.createElement('div')

                newexpenseamount.classList.add('amount')

                newexpenseamount.dataset.amount = inputAB.dataset.input

                newexpenseamount.textContent = "$" + inputAB.dataset.input

                newexpense.append(newexpenseamount)

                const newexpensebtn = document.createElement('button')

                newexpensebtn.classList.add('removebtn')

                newexpense.append(newexpensebtn)

                newexpensebtn.addEventListener('click', () => {

                    expensesAB.dataset.totalExpensesAddedBudgetRE = expensesAB.dataset.totalExpensesAddedBudget

                    expensesAB.dataset.totalExpensesAddedBudget = expensesAB.dataset.totalExpensesAddedBudgetRE - newexpenseamount.dataset.amount

                    localStorage.setItem("loadBudgetExpense" + numID, parseInt(localStorage.getItem("loadBudgetExpense" + numID)) - parseInt(newexpenseamount.dataset.amount))

                    removeSavedExpense(parseInt(newexpenseamount.dataset.amount), numID)

                    expensesAB.textContent = "$" + expensesAB.dataset.totalExpensesAddedBudget

                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget
                    totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(newexpenseamount.dataset.amount)
                    console.log("removingfromTotal");
                    updatetotal()
                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider

                    if (waythereAB.dataset.percentage > 100) {

                        waythereAB.style.width = '100%'

                    }

                    else {

                        waythereAB.style.width = waythereAB.dataset.percentage + "%"

                    } 

                    

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalBudgetAddedBudget) )

                    {

                        budgetbox.classList.remove('overbudget')

                        inputAB.classList.remove('overbudget')

                        console.log("averbudget")

                        buttonAddExpenseAB.classList.remove('overbudget')

                        buttonViewExpensesAB.classList.remove('overbudget')

                        hiderAB.classList.remove('overbudget')

                    }

                    

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalbudgetthreeforths))

                    {

                        waythereAB.classList.remove('overthreeforths')

                    }

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalbudgethalf) && !waythereAB.classList.contains("overhalf")){

                        waythereAB.classList.remove('overhalf')

                    }

                    newexpense.remove()
                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget

                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
    
                    if (waythereAB.dataset.percentage > 100) {
    
                        waythereAB.style.width = '100%'
    
                    }
    
                    else {
    
                        waythereAB.style.width = waythereAB.dataset.percentage + "%"
    
                    } 
    
                    if (expensesAB.dataset.totalExpensesAddedBudget > parseInt(budgetAB.dataset.totalBudgetAddedBudget) && !budgetbox.classList.contains('overbudget')){
    
                        budgetbox.classList.add('overbudget')
    
                        inputAB.classList.add('overbudget')
    
                        console.log("overbudget")
    
                        buttonAddExpenseAB.classList.add('overbudget')
    
                        buttonViewExpensesAB.classList.add('overbudget')
    
                        hiderAB.classList.add('overbudget')
    
                        waythereAB.classList.add('overthreeforths')
    
                        waythereAB.classList.remove("overhalf")
    
                    }
    
                    else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')){
    
                        waythereAB.classList.add('overthreeforths')
    
                        console.log("over34")
    
                        waythereAB.classList.remove("overhalf")
    
                    }
    
                    else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgethalf)){
    
                        console.log("overhalf")
    
                        waythereAB.classList.add("overhalf")
    
                    }

                })

                localStorage.setItem("loadBudgetExpense" + numID, parseInt(localStorage.getItem("loadBudgetExpense" + numID)) + parseInt(inputAB.dataset.input))

                inputAB.dataset.input = ""

                inputAB.value = ""

                }

            })

        }

        inputAB.dataset.input = e.target.value

    })

    // 534#82#918#331#91# = 534#82#918#331#91
    var numCurRead = null
    var totalExpenseLE = 0
    if(expenseString == null)
    {

    }
    else
    {
        var expenseLoader = expenseString.slice(0, -1)
    console.log(expenseLoader);
    for (let index = 0; index < expenseString.length - 1; index++) {
        // if (expenseLoader.slice(-1) == '#') {
        //     totalExpenseLE = parseInt(totalExpenseLE) + parseInt(numCurRead)
        // }
        // else {
        //     if (numCurRead == "" || numCurRead == undefined || numCurRead == null)
        //     {
        //         numCurRead = expenseLoader.slice(-1)
        //     }
        //     else {
        //         numCurRead = numCurRead + expenseLoader.slice(-1)
        //     }
            
        // }
        if (expenseLoader.slice(-1) == '#')
        {
            //console.log(numCurRead);
            totalExpenseLE = parseInt(totalExpenseLE) + parseInt(numCurRead)
            
            const newexpense = document.createElement('div')

                newexpense.classList.add('expenses')

                expensesboxAB.append(newexpense)

                const newexpenseamount = document.createElement('div')

                newexpenseamount.classList.add('amount')

                newexpenseamount.dataset.amount = parseInt(numCurRead)

                newexpenseamount.textContent = "$" + parseInt(numCurRead)

                newexpense.append(newexpenseamount)

                const newexpensebtn = document.createElement('button')

                newexpensebtn.classList.add('removebtn')
                newexpensebtn.dataset.storageID = numCurRead
                newexpense.append(newexpensebtn)

                newexpensebtn.addEventListener('click', () => {
                    
                    console.log("Clicked!");

                    expensesAB.dataset.totalExpensesAddedBudgetRE = expensesAB.dataset.totalExpensesAddedBudget

                    expensesAB.dataset.totalExpensesAddedBudget = expensesAB.dataset.totalExpensesAddedBudgetRE - newexpenseamount.dataset.amount

                    //var beforeLB = parseInt(localStorage.getItem("loadBudgetExpense" + numID))

                    localStorage.setItem("loadBudgetExpense" + numID, parseInt(localStorage.getItem("loadBudgetExpense" + numID)) - parseInt(newexpenseamount.dataset.amount))

                    removeSavedExpense(newexpensebtn.dataset.storageID,numID)

                  //  var afterLB = parseInt(beforeLB - parseInt(localStorage.getItem("loadBudgetExpense" + numID)))

                    expensesAB.textContent = "$" + parseFloat(expensesAB.dataset.totalExpensesAddedBudget)

                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget
                    totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(newexpenseamount.dataset.amount)
                    updatetotal()
                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider

                    if (waythereAB.dataset.percentage > 100) {

                        waythereAB.style.width = '100%'

                    }

                    else {

                        waythereAB.style.width = waythereAB.dataset.percentage + "%"

                    } 

                    

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalBudgetAddedBudget) )

                    {

                        budgetbox.classList.remove('overbudget')

                        inputAB.classList.remove('overbudget')

                        console.log("averbudget")

                        buttonAddExpenseAB.classList.remove('overbudget')

                        buttonViewExpensesAB.classList.remove('overbudget')

                        hiderAB.classList.remove('overbudget')

                    }

                    

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalbudgetthreeforths))

                    {

                        waythereAB.classList.remove('overthreeforths')

                    }

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalbudgethalf) && !waythereAB.classList.contains("overhalf")){

                        waythereAB.classList.remove('overhalf')

                    }

                    newexpense.remove()
                     updatetotal
                     percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget

                     waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
     
                     if (waythereAB.dataset.percentage > 100) {
     
                         waythereAB.style.width = '100%'
     
                     }
     
                     else {
     
                         waythereAB.style.width = waythereAB.dataset.percentage + "%"
     
                     } 
     
                     if (expensesAB.dataset.totalExpensesAddedBudget > parseInt(budgetAB.dataset.totalBudgetAddedBudget) && !budgetbox.classList.contains('overbudget')){
     
                         budgetbox.classList.add('overbudget')
     
                         inputAB.classList.add('overbudget')
     
                         console.log("overbudget")
     
                         buttonAddExpenseAB.classList.add('overbudget')
     
                         buttonViewExpensesAB.classList.add('overbudget')
     
                         hiderAB.classList.add('overbudget')
     
                         waythereAB.classList.add('overthreeforths')
     
                         waythereAB.classList.remove("overhalf")
     
                     }
     
                     else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')){
     
                         waythereAB.classList.add('overthreeforths')
     
                         console.log("over34")
     
                         waythereAB.classList.remove("overhalf")
     
                     }
     
                     else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgethalf)){
     
                         console.log("overhalf")
     
                         waythereAB.classList.add("overhalf")
     
                     }
                })
        numCurRead = null
        }
        else {
            if (numCurRead == null)
            {
                numCurRead = expenseLoader.slice(-1) + ""
            }
            else {
                numCurRead = expenseLoader.slice(-1) + "" + numCurRead 
            }
        }
        if (index == expenseString.length - 2)
        {
            //console.log(numCurRead);
            totalExpenseLE = parseInt(totalExpenseLE) + parseInt(numCurRead)
                        
            const newexpense = document.createElement('div')

                newexpense.classList.add('expenses')

                expensesboxAB.append(newexpense)

                const newexpenseamount = document.createElement('div')

                newexpenseamount.classList.add('amount')

                newexpenseamount.dataset.amount = parseInt(numCurRead)

                newexpenseamount.textContent = "$" + parseInt(numCurRead)

                newexpense.append(newexpenseamount)

                const newexpensebtn = document.createElement('button')

                newexpensebtn.classList.add('removebtn')
                newexpensebtn.dataset.storageID = numCurRead
                newexpense.append(newexpensebtn)

                newexpensebtn.addEventListener('click', () => {
                    
                    console.log("Clicked!");

                    expensesAB.dataset.totalExpensesAddedBudgetRE = expensesAB.dataset.totalExpensesAddedBudget

                    expensesAB.dataset.totalExpensesAddedBudget = expensesAB.dataset.totalExpensesAddedBudgetRE - newexpenseamount.dataset.amount

                    //var beforeLB = parseInt(localStorage.getItem("loadBudgetExpense" + numID))

                    localStorage.setItem("loadBudgetExpense" + numID, parseInt(localStorage.getItem("loadBudgetExpense" + numID)) - parseInt(newexpenseamount.dataset.amount))

                    removeSavedExpense(newexpensebtn.dataset.storageID,numID)

                  //  var afterLB = parseInt(beforeLB - parseInt(localStorage.getItem("loadBudgetExpense" + numID)))

                    expensesAB.textContent = "$" + parseFloat(expensesAB.dataset.totalExpensesAddedBudget)

                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget
                    totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(newexpenseamount.dataset.amount)
                    updatetotal()
                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider

                    if (waythereAB.dataset.percentage > 100) {

                        waythereAB.style.width = '100%'

                    }

                    else {

                        waythereAB.style.width = waythereAB.dataset.percentage + "%"

                    } 

                    

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalBudgetAddedBudget) )

                    {

                        budgetbox.classList.remove('overbudget')

                        inputAB.classList.remove('overbudget')

                        console.log("averbudget")

                        buttonAddExpenseAB.classList.remove('overbudget')

                        buttonViewExpensesAB.classList.remove('overbudget')

                        hiderAB.classList.remove('overbudget')

                    }

                    

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalbudgetthreeforths))

                    {

                        waythereAB.classList.remove('overthreeforths')

                    }

                    if (expensesAB.dataset.totalExpensesAddedBudget < parseInt(budgetAB.dataset.totalbudgethalf) && !waythereAB.classList.contains("overhalf")){

                        waythereAB.classList.remove('overhalf')

                    }

                    newexpense.remove()
                     updatetotal
                     percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget

                     waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
     
                     if (waythereAB.dataset.percentage > 100) {
     
                         waythereAB.style.width = '100%'
     
                     }
     
                     else {
     
                         waythereAB.style.width = waythereAB.dataset.percentage + "%"
     
                     } 
     
                     if (expensesAB.dataset.totalExpensesAddedBudget > parseInt(budgetAB.dataset.totalBudgetAddedBudget) && !budgetbox.classList.contains('overbudget')){
     
                         budgetbox.classList.add('overbudget')
     
                         inputAB.classList.add('overbudget')
     
                         console.log("overbudget")
     
                         buttonAddExpenseAB.classList.add('overbudget')
     
                         buttonViewExpensesAB.classList.add('overbudget')
     
                         hiderAB.classList.add('overbudget')
     
                         waythereAB.classList.add('overthreeforths')
     
                         waythereAB.classList.remove("overhalf")
     
                     }
     
                     else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')){
     
                         waythereAB.classList.add('overthreeforths')
     
                         console.log("over34")
     
                         waythereAB.classList.remove("overhalf")
     
                     }
     
                     else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgethalf)){
     
                         console.log("overhalf")
     
                         waythereAB.classList.add("overhalf")
     
                     }
                })
        }
        expenseLoader = expenseLoader.slice(0, -1)
    }
    console.log(totalExpenseLE);

    totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) + parseInt(loadBudgetExpense)
    updatetotal()

    }
    
    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudgetAddedBudget / expensesAB.dataset.totalExpensesAddedBudget

                waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider

                if (waythereAB.dataset.percentage > 100) {

                    waythereAB.style.width = '100%'

                }

                else {

                    waythereAB.style.width = waythereAB.dataset.percentage + "%"

                } 

                if (expensesAB.dataset.totalExpensesAddedBudget > parseInt(budgetAB.dataset.totalBudgetAddedBudget) && !budgetbox.classList.contains('overbudget')){

                    budgetbox.classList.add('overbudget')

                    inputAB.classList.add('overbudget')

                    console.log("overbudget")

                    buttonAddExpenseAB.classList.add('overbudget')

                    buttonViewExpensesAB.classList.add('overbudget')

                    hiderAB.classList.add('overbudget')

                    waythereAB.classList.add('overthreeforths')

                    waythereAB.classList.remove("overhalf")

                }

                else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')){

                    waythereAB.classList.add('overthreeforths')

                    console.log("over34")

                    waythereAB.classList.remove("overhalf")

                }

                else if (expensesAB.dataset.totalExpensesAddedBudget >= parseInt(budgetAB.dataset.totalbudgethalf)){

                    console.log("overhalf")

                    waythereAB.classList.add("overhalf")

                }

}
