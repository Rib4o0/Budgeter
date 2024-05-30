const body = document.querySelector('body')

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
const header = document.querySelector('[data-header]')

const addbudgetbtn = document.querySelector('[data-add-budget-btn]')
const addbudgetdetails = document.querySelector('[data-detail-budget]')
const closedetails = document.querySelector('[data-close-details]')
const inputNameOfBudget = document.querySelector('[data-detailnameofbudget]')
const inputBudget = document.querySelector('[data-amountofbudget]')
const addbudgetconfirm = document.querySelector('[data-addbudget-confirm]')

const cookiecontainer = document.querySelector('[data-cookieContainer]')    
const cookieAcceptbtn = document.querySelector('[data-accept-btn]')

const switchStylesBtn = document.querySelector('[data-switchstyles]')

const styleLink = document.querySelector('[data-styleLink]')
const cover = document.querySelector('[data-cover]')
const fade = document.querySelector('[data-fade]')
const link = document.querySelectorAll('[data-link]')

const settingsBtn = document.querySelector('[data-settings-btn]')
const settingsContainer = document.querySelector('[data-settings-container]')
const resetSettingsBtn = document.querySelector('[data-reset-settings-btn]')
const closeSettingsBtn = document.querySelector('[data-close-settings-btn]')
const darkModeToggle = document.querySelector('[data-dark-mode-toggle]')
const mainColorInput = document.querySelector('[data-main-color-input]')
const accColorInput = document.querySelector('[data-acc-color-input]')
const deleteDataBtn = document.querySelector('[data-delete-data-btn]')
const immLightsToggle = document.querySelector('[data-imm-lights-toggle]')   
const glassyBoxesToggle = document.querySelector('[data-glassy-boxes-toggle]')     

const alertBox = document.querySelector('[data-alert-box]')
const alertText = document.querySelector('[data-alert-text]')
const alertSubText = document.querySelector('[data-alert-sub-text]')
const alertConfirmBtn = document.querySelector('[data-alert-confirm-btn]')
const alertDismissBtn = document.querySelector('[data-alert-dismiss-btn]')
const varListenerAlertList = document.querySelector('[data-var-listener-alertlist]')

const budgetscontainer = document.querySelector('[data-budget-container]')
const totaltotalexpenses = document.querySelector('[data-total-total-expenses]')
const totaltotalbudget = document.querySelector('[data-total-total-budget]')
const totalpercentage = document.querySelector('[data-total-percentage-bar-main]')
const totalwaythere = document.querySelector('[data-total-way-there]')
const totalpercentageNum = document.querySelector('[data-total-percentage')

const summaryContainer = document.querySelector('[data-summary-container]')
const closeSummaryBtn = document.querySelector('[data-close-summary-btn]')
const totalSpendingsSummary = document.querySelector('[data-total-spendings-summary]')
const totalSavingsSummary = document.querySelector('[data-total-savings-summary]')
const totalProfitSummary = document.querySelector('[data-total-profit-summary]')
const totalProfitSummaryNum = document.querySelector('[data-total-profit-summary-num]')

const quizHolder = document.querySelector('[data-quizHolder]')
const quizYes = document.querySelector('[data-usedBudBeforeConfirm]')
const quizNo = document.querySelector('[data-usedBudBeforeCancel]')
const quizText = document.querySelector('[data-quizText]')
const quizTex2 = document.querySelector('[data-quizText2]')
const BudgeterText = document.querySelector('[data-BudgeterText]')

const backCircle1 = document.querySelector('[data-circle1]')
const backCircle2 = document.querySelector('[data-circle2]')

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
var pcOrMob = 0 // 0=pc 1=mobile
var renameOrClose = 0

var darkMode = 0 // 0 = light mode 1 = dark mode 2 = secret(SHHHHH!)
var mainColor = '#0C5DD8'
var accColor = '#0954c5'
var immersiveLights = 0 // 0 = off 1 = on
var timesInARow = 0;
var glassyBoxes = 0;

var undoExpense

var alertList = [];

// todo:
// todo
if (localStorage.getItem('redirectingError') == 'true') pushAlert(localStorage.getItem('redirectingErrorMessage'),0,0,0); localStorage.setItem('redirectingError', false); localStorage.setItem('redirectingErrorMessage', '')
if (!localStorage.getItem('redirecting')) localStorage.setItem('redirecting', false);
if (!localStorage.getItem('totalExpenses')) localStorage.setItem('totalExpenses', '0') 
if (!localStorage.getItem('lastVisited')) localStorage.setItem('lastVisited', 'Budgets')
if (localStorage.getItem('lastVisited') != 'Budgets' && localStorage.getItem('redirecting') == 'false') window.location.href = `/${localStorage.getItem('lastVisited')}/index.html`
// if (localStorage.getItem('redirecting') == 'false' && localStorage.getItem('HasGoneTroughTut')) openSummary();

addEventListeners()
updatetotal()
cookiesInitialize()
tutorial()
fadein()
closeSummaryBtn.click()

function fadein() {
    setTimeout(() => {
        localStorage.setItem('redirecting', false);
        localStorage.setItem('lastVisited', 'Budgets')
        fade.classList.add('fade')
    }, 100);
}

function fadeout() {
    setTimeout(() => {
        fade.classList.remove('fade')
    }, 100);
}

function tutorial() {
    if (localStorage.getItem('HasGoneTroughTut'))
    {
        quizHolder.remove()
        // console.log(localStorage.getItem('redirecting'));
        // if (localStorage.getItem('redirecting') == 'false') openSummary();
        return
    }
    setTimeout(() => {
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

function openSummary() {
    totalSpendingsSummary.textContent = localStorage.getItem('totalExpenses') + '$'
    totalSavingsSummary.textContent = '0$'
    totalProfitSummary.textContent = 'Total amount spent this month:'
    totalProfitSummaryNum.textContent = '-' +  localStorage.getItem('totalExpenses') + '$'
    totalProfitSummaryNum.classList.add('negative')
    summaryContainer.classList.add('show')
    cover.classList.add('show')
}

function cookiesInitialize() {
    if(!localStorage.getItem("numofbudget"))
    {
        localStorage.setItem("numofbudget", 0)
    }
    if(!localStorage.getItem("darkMode?")) {
        localStorage.setItem("darkMode?", 0)
    }
    if(!localStorage.getItem("mainColor")) {
        localStorage.setItem("mainColor", '#0C5DD8')
    }
    if(!localStorage.getItem("accColor")) {
        localStorage.setItem("accColor", '#0954c5')
    }
    if(!localStorage.getItem("immersiveLights")) {
        localStorage.setItem("immersiveLights", 0)
    }
    if (!localStorage.getItem("glassyBoxes")) localStorage.setItem("glassyBoxes", 0)
    darkMode = localStorage.getItem("darkMode?")
    mainColor = localStorage.getItem("mainColor")
    mainColorInput.value = mainColor
    accColor = localStorage.getItem("accColor")
    accColorInput.value = accColor
    immersiveLights = localStorage.getItem("immersiveLights")
    if (immersiveLights != '0') {
        immLightsToggle.classList.add("on")
        immLightsToggle.innerHTML = `<i class="fa-solid fa-lightbulb-on"></i>`
        initImmirsiveLights()
    } else {
        immLightsToggle.classList.remove("off")
        backCircle1.style.opacity = 0;
        backCircle2.style.opacity = 0;
    }
    glassyBoxes = localStorage.getItem("glassyBoxes")
    if (glassyBoxes == "1") {
        glassyBoxesToggle.innerHTML = `<i class="fa-regular fa-browser"></i>`
    } else {
        glassyBoxesToggle.innerHTML = `<i class="fa-solid fa-browser"></i>`
    }
    ApplySettings()
    cookieAcceptbtn.addEventListener("click", () => {
        cookieAcceptbtn.disabled = true
        cookiecontainer.classList.remove('show')
        localStorage.setItem("cookieBannerDisplayed", "true")
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
}

function initImmirsiveLights() {
    backCircle1.classList.add('show')
    backCircle2.classList.add('show')
    moveImmersiveLights();
    console.log(screen.width)
}

function moveImmersiveLights() {
    backCircle1.style.left = (Math.random() * document.body.clientWidth) + 'px' ; backCircle1.style.top = (Math.random() * 500) + 'px'
    backCircle2.style.left = (Math.random() * document.body.clientWidth) + 'px' ; backCircle2.style.top = (Math.random() * 500) + 'px'
    setInterval(() => {
        if (localStorage.getItem('immersiveLights' == "0")) return 
        backCircle1.style.left = (Math.random() * document.body.clientWidth) + 'px' ; backCircle1.style.top = (Math.random() * 500) + 'px'
        backCircle2.style.left = (Math.random() * document.body.clientWidth) + 'px' ; backCircle2.style.top = (Math.random() * 500) + 'px'
    }, 10000)
}

function updatetotal() {
    updatetotalexpenses()
    updatetotalbudget()
    updatetotalpercentage()
}

function updatetotalexpenses() {
    totaltotalexpenses.textContent = '$' + totaltotalexpenses.dataset.totalTotalExpenses
    localStorage.setItem("totalExpenses", totaltotalexpenses.dataset.totalTotalExpenses)
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
            totalpercentageNum.textContent = '>100%'
            return
        }
        totalwaythere.style.width = 100 / totalwaythere.dataset.divider + "%"
        totalpercentageNum.textContent = Math.round(100 / totalwaythere.dataset.divider) + '%'
    }
}

function addEventListeners() {

    nameofbudgetGather()

    gatherBudgetAmount()

    link.forEach(link => {
        link.addEventListener('click', () => {
            localStorage.setItem('redirecting', true)
            fadeout()
            setTimeout(() => {
                window.location.href = link.dataset.link.toString()
            }, 600);
        })
    })

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY
        var Topthreshold = 1;
        if (scrollPosition < Topthreshold) {
            header.classList.add('lowerOpacity')
        } else {
            header.classList.remove('lowerOpacity')
        }
    });

    addbudgetbtn.addEventListener('click', DetailsforAddbudget)

    closedetails.addEventListener('click', CloseDetails)

    addbudgetconfirm.addEventListener('click', CreateBudget)

    deleteDataBtn.addEventListener('click', DeleteData)

    darkModeToggle.addEventListener('click', () => {
        if (darkMode == 1 || darkMode == 2) {
            darkMode = 0;
            ApplySettings();
        } else if (darkMode == 0) {
            darkMode = 1;
            ApplySettings();
        }
        if (timesInARow == 10) {
            darkMode = 2;
            ApplySettings();
            timesInARow = 0;
        }
        localStorage.setItem("darkMode?", darkMode);
        timesInARow = timesInARow + 1;
        // --main-color: #111; /*#fff*/
        // --font-color: #fff; /* #000 */
        // --main-blue: #f6ff00; /*0C5DD8 */
        // --acc-blue: #e9ff27; /*#0954c5*/
        // --lighter-shade: #222;/*#d8d8d8*/
        // --total-color: #111; /*#ecebeb*/
        // --nav-hover-color: #222;/* #ddebff*/
    });

    mainColorInput.addEventListener("input", () => {
       mainColor = mainColorInput.value 
       ApplySettings()
       localStorage.setItem("mainColor", mainColor)
    });

    accColorInput.addEventListener("input", () => {
        accColor = accColorInput.value 
        ApplySettings()
        localStorage.setItem("accColor", accColor)
     });

    immLightsToggle.addEventListener("click", () => {
        if (immersiveLights) {
            immersiveLights = 0;
            immLightsToggle.classList.add("off");
            immLightsToggle.classList.remove("on"); 
            localStorage.setItem("immersiveLights", 0)
            immLightsToggle.innerHTML = `<i class="fa-solid fa-lightbulb-slash"></i>`
            backCircle1.style.opacity = 0;
            backCircle2.style.opacity = 0;
        } else if (immersiveLights == 0) {
            immersiveLights = 1;
            immLightsToggle.classList.add("on");
            immLightsToggle.classList.remove("off"); 
            localStorage.setItem("immersiveLights", 1)
            immLightsToggle.innerHTML = `<i class="fa-solid fa-lightbulb-on"></i>`
            backCircle1.style.opacity = 1;
            backCircle2.style.opacity = 1;
            initImmirsiveLights()
        }
        localStorage.setItem("immersiveLights", immersiveLights);
    });

    glassyBoxesToggle.addEventListener('click', () => {
        if (body.classList.contains('glassyBoxes')) {
            localStorage.setItem("glassyBoxes", 0)
            glassyBoxes = "0";
            glassyBoxesToggle.innerHTML = `<i class="fa-solid fa-browser"></i>`
        } else {
            localStorage.setItem("glassyBoxes", 1)
            glassyBoxes = "1"
            glassyBoxesToggle.innerHTML = `<i class="fa-regular fa-browser"></i>`
        }
        ApplySettings()
    })

    settingsBtn.addEventListener('click', () => {
        settingsContainer.classList.add('show')
        cover.classList.add('show')
    })

    resetSettingsBtn.addEventListener('click', () => {
        let reset = "Are you sure you want to reset your settings?"
        if (confirm(reset)) {
            darkMode = 0;
            mainColor = "#0C5DD8"
            accColor = "#0954c5"
            mainColorInput.value = mainColor
            accColorInput.value = accColor
            localStorage.setItem("mainColor", mainColor)
            localStorage.setItem("accColor", accColor)
            localStorage.setItem("darkMode?", darkMode);
            immersiveLights = 0;
            immLightsToggle.classList.add("off");
            immLightsToggle.classList.remove("on"); 
            localStorage.setItem("immersiveLights", 0)
            immLightsToggle.innerHTML = `<i class="fa-solid fa-lightbulb-slash"></i>`
            backCircle1.style.opacity = 0;
            backCircle2.style.opacity = 0;
            ApplySettings();
            settingsContainer.classList.remove('show')
            cover.classList.remove('show')
        }
    });

    closeSettingsBtn.addEventListener('click', () => {
        settingsContainer.classList.remove('show')
        cover.classList.remove('show')
        timesInARow = 0;
    });

    closeSummaryBtn.addEventListener('click', () => {
        summaryContainer.remove()
    });

    alertConfirmBtn.addEventListener('click', () => {
        alertBox.classList.remove('active')
        setTimeout(() => {
            alertBox.classList.remove('bigSpend')
            alertConfirmBtn.textContent = 'Confirm'
            alertDismissBtn.textContent = 'Dismiss'
            undoExpense.click()
        },400) 
        manageAlerts()
    })

    alertDismissBtn.addEventListener('click', () => {
        alertBox.classList.remove('active')
        setTimeout(() => {
            if(!alertBox.classList.contains('active')) {
                alertBox.classList.remove('bigSpend')
                alertBox.classList.remove('overbudget')
                alertConfirmBtn.textContent = 'Confirm'
                alertDismissBtn.textContent = 'Dismiss'
            }
            },400) 
        manageAlerts()
    })
}

function CreateBudget() {
    if (budgetAmount == "" || budgetAmount == null || budgetname == null || budgetname == "") {
        return
    }

    if (budgetAmount < 1 || budgetAmount > 99999 || budgetname.toString().length > 16)
    {   
        return
    }

    var numofbudget = localStorage.getItem('numofbudget');

    localStorage.setItem("nameOfBudget" + numofbudget, budgetname)
    localStorage.setItem("amountOfBudget" + numofbudget, budgetAmount)
    localStorage.setItem("loadBudgetExpense" + numofbudget, 0)

    addPreviousBudgets(budgetname, budgetAmount, 0, numofbudget, "")

    localStorage.setItem("numofbudget", parseInt(localStorage.getItem("numofbudget")) + 1)

    budgetAmount = ""
    budgetname = ""

    addbudgetdetails.classList.remove('show')
    cover.classList.remove('show')

    addbudgetconfirm.disabled = true

    setTimeout(() => {
        inputBudget.value = ""
        inputNameOfBudget.value = "" 
        addbudgetconfirm.disabled = false
    }, 500)
}   

function DeleteMemoryOpen() {
    deleteMemoryContainer.classList.remove('hide')
}

function DeleteData() {
    let deleteData = "Are you sure you want to delete you data?"
    if (confirm(deleteData)) {
         localStorage.clear()
        location.reload()
    }
}

function gatherBudgetAmount() {
    inputBudget.addEventListener('input', e => {
        budgetAmount = e.target.value
    })
}

function nameofbudgetGather() {
    inputNameOfBudget.addEventListener('input', e => {
        budgetname = e.target.value
    })
}

function CloseDetails() {
    addbudgetdetails.classList.remove('show')
    cover.classList.remove('show')
}

function DetailsforAddbudget() {
    addbudgetdetails.classList.add('show')
    cover.classList.add('show')
}
//--------------------------------------------------------------------------------------------------------

function ApplySettings() {
    if (darkMode == 2) {
        document.documentElement.style.setProperty('--main-color', '0,0,0');
        document.documentElement.style.setProperty('--font-color', '#fff');
        document.documentElement.style.setProperty('--lighter-shade', '#222');
        document.documentElement.style.setProperty('--total-color', '0, 0, 0');
        document.documentElement.style.setProperty('--nav-hover-color', '#222');
        document.documentElement.style.setProperty('--overbudget-color', '#3b0505')
        document.documentElement.style.setProperty('--overbudget-text-color', '#fff')
    } else if (darkMode == 1) {
        document.documentElement.style.setProperty('--main-color', '18,18,18');
        document.documentElement.style.setProperty('--font-color', '#fff');
        document.documentElement.style.setProperty('--lighter-shade', '#222');
        document.documentElement.style.setProperty('--total-color', '17, 17, 17');
        document.documentElement.style.setProperty('--nav-hover-color', '#222');
        document.documentElement.style.setProperty('--overbudget-color', '#3b0505')
        document.documentElement.style.setProperty('--overbudget-text-color', '#fff')
    } else if (darkMode == 0) {
        document.documentElement.style.setProperty('--main-color', '255,255,255');
        document.documentElement.style.setProperty('--font-color', '#000');
        document.documentElement.style.setProperty('--lighter-shade', '#d8d8d8');
        document.documentElement.style.setProperty('--total-color', '236, 235, 235');
        document.documentElement.style.setProperty('--nav-hover-color', '#ddebff');
        document.documentElement.style.setProperty('--overbudget-color', '#ecacac')
        document.documentElement.style.setProperty('--overbudget-text-color', '#db4848')
    }
    document.documentElement.style.setProperty('--main-blue', mainColor)
    document.documentElement.style.setProperty('--acc-blue', accColor)
    if (glassyBoxes == "1") body.classList.add('glassyBoxes')
    else body.classList.remove('glassyBoxes');
    if(hexToHSL(mainColor).l <= 93) {document.documentElement.style.setProperty('--btn-text-color', '#fff');}
    else {document.documentElement.style.setProperty('--btn-text-color','#000');}
}

function resetSettings() {
    document.documentElement.style.setProperty('--main-color', '#fff');
    document.documentElement.style.setProperty('--font-color', '#000');
    document.documentElement.style.setProperty('--lighter-shade', '#d8d8d8');
    document.documentElement.style.setProperty('--total-color', '#ecebeb');
    document.documentElement.style.setProperty('--nav-hover-color', '#ddebff');
    document.documentElement.style.setProperty('--overbudget-color', '#ecacac')
    document.documentElement.style.setProperty('--overbudget-text-color', '#db4848')
    document.documentElement.style.setProperty('--main-blue', '#0C5DD8')
    document.documentElement.style.setProperty('--acc-blue', '#0954c5')
}

function loadBudgets() {
    var readerNum = 0;  
    for (let i = 0; i < localStorage.getItem("numofbudget"); i++) {
          addPreviousBudgets(localStorage.getItem("nameOfBudget" + readerNum), localStorage.getItem("amountOfBudget" + readerNum), localStorage.getItem("loadBudgetExpense" + readerNum), readerNum, localStorage.getItem("ArrayOfExpenses" + readerNum))
          readerNum += 1
    }
}   

function saveExpenses(amount, date, ID) {
    if (localStorage.getItem("ArrayOfExpenses" + ID) == null)
    {
        localStorage.setItem("ArrayOfExpenses" + ID, amount + "-" + date + "#")
        return
    }
    localStorage.setItem("ArrayOfExpenses" + ID, localStorage.getItem("ArrayOfExpenses" + ID) + amount + "-" + date + "#" ) // AOE+ID = AOE+ID+#+A 300 = 300#100
}

function removeSavedExpense(amount, ID) {
    console.log(amount)
    let StringA = localStorage.getItem('ArrayOfExpenses' + ID)
    let StringB = StringA.replace(amount + "#", '')
    localStorage.setItem('ArrayOfExpenses' + ID, StringB)
}

function replaceSavedExpense(savedExpense, ID, newExpense) {
    let StringA = localStorage.getItem('ArrayOfExpenses' + ID)
    let StringB = StringA.replace(savedExpense, newExpense)
    localStorage.setItem('ArrayOfExpenses' + ID, StringB)
}


function addPreviousBudgets(loadBudgetName, loadBudgetAmount, loadBudgetExpense, numID, expenseString) {
    if (localStorage.getItem('nameOfBudget' + numID) == null || localStorage.getItem('nameOfBudget' + numID) == undefined || localStorage.getItem('nameOfBudget' + numID) == "") return
    const budgetbox = document.createElement('div')
    budgetbox.classList.add('budget-box')
    budgetcontainer.prepend(budgetbox)

    //

    const nameOfBudget = document.createElement('div')
    nameOfBudget.textContent = loadBudgetName
    nameOfBudget.classList.add('budgetName', 'ontop')

    // 

    const budgetHeader = document.createElement('div')
    budgetHeader.classList.add('budgetHeader')
    budgetbox.prepend(budgetHeader);
    budgetHeader.append(nameOfBudget)

    //

    const budgetMiddle = document.createElement('div');
    budgetMiddle.classList.add('budgetMiddle')
    budgetbox.append(budgetMiddle)

    //

    const budgetInfo = document.createElement('div');
    budgetInfo.classList.add('budgetInfo')
    budgetMiddle.append(budgetInfo)

    //

    const expensesAB = document.createElement('div')
    expensesAB.classList.add('expensesTotal')
    expensesAB.dataset.totalExpenses = loadBudgetExpense
    expensesAB.textContent = "$" + loadBudgetExpense
    budgetInfo.append(expensesAB)

    //
    totaltotalbudget.dataset.totalTotalBudget =  parseInt(totaltotalbudget.dataset.totalTotalBudget) + parseInt(loadBudgetAmount)
    updatetotal()
    const budgetAB = document.createElement('div')
    budgetAB.classList.add('budgetTotal')
    budgetAB.dataset.totalBudget = loadBudgetAmount
    budgetAB.dataset.totalbudgethalf = budgetAB.dataset.totalBudget / 2
    budgetAB.dataset.totalbudgetquarter = budgetAB.dataset.totalBudget / 4
    budgetAB.dataset.totalbudgetthreeforths = budgetAB.dataset.totalbudgetquarter * 3
    budgetAB.textContent = "/ $" + loadBudgetAmount
    budgetInfo.append(budgetAB)

    //

    const percentage = document.createElement('div')
    percentage.classList.add("percentage")
    percentage.textContent = Math.round(loadBudgetExpense / loadBudgetAmount  * 100) + "%"
    if (loadBudgetExpense / loadBudgetAmount  * 100 > 100)
    {
        percentage.textContent = ">100%"
    }
    budgetMiddle.append(percentage)

    //

    const percantagebarmainAB = document.createElement('div')
    percantagebarmainAB.classList.add('percentageBar', 'ontop')
    percantagebarmainAB.dataset.percentageBarMain
    budgetbox.append(percantagebarmainAB)

    //

    const waythereAB = document.createElement('div')
    waythereAB.classList.add('progress', 'ontop')
    waythereAB.dataset.wayThere
    waythereAB.style.width = loadBudgetExpense / loadBudgetAmount  * 100 + "%"
    percantagebarmainAB.append(waythereAB)

    //

    const errormessage = document.createElement('label')
    errormessage.classList.add('errorppav', 'ontop')
    errormessage.dataset.label
    errormessage.htmlFor = "expense"
    errormessage.textContent = "Please Provide A Value"
    budgetbox.append(errormessage)

    //

    const budgetFooter = document.createElement('div');
    budgetFooter.classList.add('budgetFooter');
    budgetbox.append(budgetFooter)

    //

    const inputAB = document.createElement('input')
    inputAB.type = 'number'
    inputAB.classList.add('expenseAmount', 'ontop')
    inputAB.id = 'expense'
    inputAB.dataset.expense      
    budgetFooter.append(inputAB)

    //

    const buttonAddExpenseAB = document.createElement('button')
    buttonAddExpenseAB.classList.add('addExpense', 'ontop')
    buttonAddExpenseAB.dataset.addExpenseBtnBudget
    buttonAddExpenseAB.textContent = "Add Expense"
    budgetFooter.append(buttonAddExpenseAB)

    //

    const buttonViewExpensesAB = document.createElement('button')
    buttonViewExpensesAB.classList.add('budgetSettings', 'ontop')
    buttonViewExpensesAB.dataset.viewExpenses
    buttonViewExpensesAB.innerHTML = 'Settings'
    budgetHeader.append(buttonViewExpensesAB)

    //

    const hiderAB = document.createElement('div')
    hiderAB.classList.add('background', 'ontopmid')
    budgetbox.append(hiderAB)

    //

    const expensesboxAB = document.createElement('div')
    expensesboxAB.classList.add('expensesBox', 'onbottom')
    expensesboxAB.dataset.expensesbox
    budgetbox.append(expensesboxAB)
    budgetbox.classList.add('pop-up')
    //
        
    const deleteBudBtn = document.createElement('button')
    deleteBudBtn.classList.add('delete-budget-btn')
    deleteBudBtn.innerHTML =`<i class="fa-solid fa-xmark"></i>`
    budgetbox.append(deleteBudBtn)

    //

    const increaser = document.createElement('div')
    increaser.classList.add("increaser")
    increaser.classList.add("neutral")
    increaser.textContent = "0%"
    budgetbox.append(increaser)

    //

    const expensesText = document.createElement('div')
    expensesText.classList.add('expensestext')
    expensesText.textContent = "Expenses"
    budgetbox.append(expensesText)

    // 

    const BudgetNameEditText = document.createElement('div')
    BudgetNameEditText.textContent = "Change Budget Name"
    BudgetNameEditText.classList.add("BudgetNameEditText")
    budgetbox.append(BudgetNameEditText)

    // 

    const BudgetNameEditBtn = document.createElement('div')
    BudgetNameEditBtn.classList.add('BudgetNameEditBtn')
    budgetbox.append(BudgetNameEditBtn)

    // 

    const BudgetNameEditInput = document.createElement('input')
    BudgetNameEditInput.classList.add('BudgetNameEditInput')
    budgetbox.append(BudgetNameEditInput)
    BudgetNameEditInput.addEventListener('input', e => {
        BudgetNameEditInput.dataset.dataValue = e.target.value
        if (!BudgetNameEditBtn.classList.contains('confirm'))
        {
            if (BudgetNameEditInput.dataset.dataValue != "")
            {
                BudgetNameEditBtn.classList.add('confirm')
                renameOrClose = 2
            }
        }
        else if (BudgetNameEditInput.dataset.dataValue == "")
        {
            BudgetNameEditBtn.classList.remove('confirm')
            renameOrClose = 1
        }
    })
    BudgetNameEditBtn.addEventListener('click', () => {
        if (renameOrClose == 0)
        {
            BudgetNameEditInput.classList.add('enabled')
            BudgetNameEditBtn.classList.add('close')
            renameOrClose = 1
        }
        else if (renameOrClose == 1)
        {
            BudgetNameEditInput.classList.remove('enabled')
            BudgetNameEditBtn.classList.remove('close')
            renameOrClose = 0
        }
        else 
        {
            nameOfBudget.textContent = BudgetNameEditInput.dataset.dataValue
            localStorage.setItem('nameOfBudget' + numID, nameOfBudget.textContent)
            renameOrClose = 0
            BudgetNameEditInput.classList.remove('enabled')
            BudgetNameEditBtn.classList.remove('close')
            BudgetNameEditBtn.classList.remove('confirm')
            BudgetNameEditInput.dataset.dataValue = ""
            BudgetNameEditInput.value = ""
        }
    })     
    
    //
    // const BudgetAmountEditInput = document.createElement('input')
    // BudgetAmountEditInput.classList.add('BudgetAmountEditInput')
    // budgetbox.append(BudgetAmountEditInput)
    // BudgetAmountEditInput.addEventListener('input', e => {
    //     BudgetAmountEditInput.dataset.dataValue = e.target.value
    //     if (!BudgetNameEditBtn.classList.contains('confirm'))
    //     {
    //         if (BudgetAmountEditInput.dataset.dataValue != "")
    //         {
    //             BudgetNameEditBtn.classList.add('confirm')
    //             renameOrClose = 2
    //         }
    //     }
    //     else if (BudgetAmountEditInput.dataset.dataValue == "")
    //     {
    //         BudgetNameEditBtn.classList.remove('confirm')
    //         renameOrClose = 1
    //     }
    //    // console.log(BudgetAmountEditInput.dataset.dataValue);
    // })
    // BudgetNameEditBtn.addEventListener('click', () => {
    //     if (renameOrClose == 0)
    //     {
    //         BudgetAmountEditInput.classList.add('enabled')
    //         BudgetNameEditBtn.classList.add('close')
    //         renameOrClose = 1
    //     }
    //     else if (renameOrClose == 1)
    //     {
    //         BudgetAmountEditInput.classList.remove('enabled')
    //         BudgetNameEditBtn.classList.remove('close')
    //         renameOrClose = 0
    //     }
    //     else 
    //     {
    //         nameOfBudget.textContent = BudgetAmountEditInput.dataset.dataValue
    //         localStorage.setItem('nameOfBudget' + numID, nameOfBudget.textContent)
    //         renameOrClose = 0
    //         BudgetAmountEditInput.classList.remove('enabled')
    //         BudgetNameEditBtn.classList.remove('close')
    //         BudgetNameEditBtn.classList.remove('confirm')
    //         BudgetAmountEditInput.dataset.dataValue = ""
    //         BudgetAmountEditInput.value = ""
    //     }
    // })    
    

    deleteBudBtn.addEventListener('click', () => {
        let sure = "Are you sure you want to Delete This Budget"
        if(confirm(sure)) {
        budgetbox.classList.add('removing')  
        expensesboxAB.classList.remove('show')
        setTimeout (() => {
            deleteBudBtn.parentElement.remove()
        }, 600)
        totaltotalbudget.dataset.totalTotalBudget =  parseInt(totaltotalbudget.dataset.totalTotalBudget) - parseInt(localStorage.getItem('amountOfBudget' + numID))
        totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(localStorage.getItem('loadBudgetExpense' + numID))
        console.log(totaltotalbudget.dataset.totalTotalBudget, totaltotalexpenses.dataset.totalTotalExpenses);
        localStorage.removeItem('ArrayOfExpenses' + numID)
        localStorage.removeItem('loadBudgetExpense' + numID)
        localStorage.removeItem('nameOfBudget' + numID)//
        localStorage.removeItem('amountOfBudget' + numID)
        updatetotal()
        }
    })



    buttonViewExpensesAB.addEventListener('click', () => {
        if (budgetbox.classList.contains('expanded')) {
            budgetbox.classList.remove('expanded')
            buttonViewExpensesAB.textContent = "Settings"
            BudgetNameEditInput.classList.remove('enabled')
            BudgetNameEditBtn.classList.remove('close')
            BudgetNameEditBtn.classList.remove('confirm')
            BudgetNameEditInput.value = ""
            renameOrClose = 0;
        } else {
            budgetbox.classList.add('expanded') 
            buttonViewExpensesAB.textContent = "Close"
        }
    })

    inputAB.addEventListener('input', e => {
        if(!inputAB.classList.contains('doneonce'))
        {
            inputAB.dataset.input = e.target.value
            inputAB.classList.add('doneonce')

            buttonAddExpenseAB.addEventListener('click', () => {
                console.log(inputAB.dataset.input)
                if (inputAB.dataset.input == "" || inputAB.dataset.input == null || inputAB.dataset.input == undefined) {
                    errormessage.classList.add('show')
                    setTimeout(() => {
                        errormessage.classList.remove('show')
                    }, 1000)
                } else if (inputAB.dataset.input < 1 || inputAB.dataset.input > 99999) {
                    errormessage.textContent = "Please enter a VALID value"
                    errormessage.classList.add('show')
                    setTimeout(() => {
                        errormessage.classList.remove('show')
                        errormessage.textContent = "Please Provide a Value"
                    }, 1000)
                } else {
                expensesAB.dataset.totalExpensesbefore = expensesAB.dataset.totalExpenses
                expensesAB.dataset.totalExpenses = parseInt(expensesAB.dataset.totalExpenses) + parseInt(inputAB.dataset.input)
                expensesAB.textContent = "$" + expensesAB.dataset.totalExpenses
                totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) + parseInt(inputAB.dataset.input)
                updatetotal()

                percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudget / expensesAB.dataset.totalExpenses
                increaser.classList.add('up')
                increaser.classList.remove('down')
                increaser.dataset.currentValue = parseInt(inputAB.dataset.input) * 100 / budgetAB.dataset.totalBudget
                if (Math.floor(increaser.dataset.currentValue) >= 100)
                {
                    increaser.textContent = "100+%"
                    increaser.classList.add('down')
                    increaser.classList.remove('up')
                }
                increaser.textContent = "+" + Math.round(increaser.dataset.currentValue) + "%"

                waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                if (waythereAB.dataset.percentage > 100) {
                    waythereAB.style.width = '100%'
                    percentage.textContent = '>100%'
                } else {
                    waythereAB.style.width = waythereAB.dataset.percentage + "%"
                    percentage.textContent = Math.round(waythereAB.dataset.percentage) + "%"
                } 
                if (waythereAB.dataset.percentage > 100) {
                    pushAlert('over100', loadBudgetName)
                } else if (waythereAB.dataset.percentage > 90) {
                    pushAlert('over90', loadBudgetName)
                }

                if (expensesAB.dataset.totalExpenses > parseInt(budgetAB.dataset.totalBudget) && !budgetbox.classList.contains('overbudget')) {
                    budgetbox.classList.add('overbudget')
                    inputAB.classList.add('overbudget')
                    buttonAddExpenseAB.classList.add('overbudget')
                    buttonViewExpensesAB.classList.add('overbudget')
                    hiderAB.classList.add('overbudget')
                    expensesboxAB.classList.add('overbudget')
                    waythereAB.classList.add('overthreeforths')
                    waythereAB.classList.remove("overhalf")
                } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')) {
                    waythereAB.classList.add('overthreeforths')
                    waythereAB.classList.remove("overhalf")
                } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgethalf)){
                    waythereAB.classList.add("overhalf")
                }

                const newexpense = document.createElement('div')
                newexpense.classList.add('expenses')
                expensesboxAB.append(newexpense)

                const newexpenseinfo = document.createElement('div')
                newexpenseinfo.classList.add('expenseInfo')
                newexpense.append(newexpenseinfo)

                const newexpenseamount = document.createElement('div')
                newexpenseamount.classList.add('amount')
                newexpenseamount.dataset.amount = inputAB.dataset.input
                newexpenseamount.textContent = "$" + inputAB.dataset.input
                newexpenseinfo.append(newexpenseamount)

                const newexpensedate = document.createElement('div')
                newexpensedate.classList.add('expenseDate')
                let formattedDay 
                switch (getCurrentDate().day.toString()) {
                    case `1`:
                        formattedDay = '1st'
                        break;

                    case `2`:
                        formattedDay = '2nd'
                        break

                    case `3`:
                        formattedDay = '3rd'
                        break
                
                    default:
                        formattedDay = `${getCurrentDate().day}th`
                        break;
                }
                let formattedMonth 
                switch (getCurrentDate().month.toString()) {
                    case `1`:
                        formattedMonth = `Jan`
                        break;

                    case `2`:
                        formattedMonth = `Feb`
                        break;

                    case `3`:
                        formattedMonth = `Mar`
                        break;
                    
                    case `4`:
                        formattedMonth = `Apr`
                        break;

                    case `5`:
                        formattedMonth = `May`
                        break;

                    case `6`:
                        formattedMonth = `Jun`
                        break;

                    case `7`:
                        formattedMonth = `Jul`
                        break;
                    
                    case `8`: 
                        formattedMonth = `Aug`
                        break;
                    
                    case `9`:
                        formattedMonth = `Sep`
                        break;
                    
                    case `10`:
                        formattedMonth = `Oct`
                        break;

                    case `11`:
                        formattedMonth = `Nov`
                        break;

                    case `12`:
                        formattedMonth = `Dec`
                        break;
                    default:
                        formattedMonth = null
                        break;
                }
                newexpensedate.textContent = `${formattedDay} ${formattedMonth}`
                let compactedDate = getCurrentDate().day + '-' + getCurrentDate().month + '-�' 
                let dateForNote = '-' + getCurrentDate().day + '-' + getCurrentDate().month + '-'
                newexpenseinfo.append(newexpensedate)

                const addnotebtn = document.createElement('button')
                    addnotebtn.classList.add('addNoteBtn')
                    newexpense.append(addnotebtn)
                    const icon = document.createElement('i')
                    icon.classList.add('fa-regular')
                    icon.classList.add('fa-notes')
                    addnotebtn.append(icon)

                    const addNoteInput = document.createElement('input')
                    addNoteInput.classList.add('addNoteInput')
                    addNoteInput.dataset.type = 'text'
                    newexpense.append(addNoteInput)

                    const addNoteConfirmBtn = document.createElement('button')
                    addNoteConfirmBtn.classList.add('addNoteConfirmBtn')
                    newexpense.append(addNoteConfirmBtn)

                    addnotebtn.addEventListener('click', () => {
                        newexpense.classList.add('noting')
                    })

                    addNoteConfirmBtn.addEventListener('click', () => {
                        if(!addNoteConfirmBtn.classList.contains('confirm')) newexpense.classList.remove('noting')
                    })

                    addNoteInput.addEventListener('input', e => {
                        if (!addNoteConfirmBtn.classList.contains('3123418')) {
                            addNoteConfirmBtn.addEventListener('click', () => {
                                if (addNoteConfirmBtn.classList.contains('confirm')) {
                                    const expenseNoteText = document.createElement('div')
                                    expenseNoteText.classList.add('expenseNote')
                                    expenseNoteText.textContent = e.target.value
                                    newexpenseinfo.append(expenseNoteText)
                                    newexpensedate.textContent = `${formattedDay} ${formattedMonth} -`
                                    newexpense.classList.remove('noting')
                                    addnotebtn.remove()
                                    addNoteInput.remove()
                                    addNoteConfirmBtn.remove()
                                    replaceSavedExpense(parseInt(newexpenseamount.dataset.amount) + '-' + compactedDate,numID,parseInt(newexpenseamount.dataset.amount) + '' + dateForNote + e.target.value)
                                } else {
                                    newexpense.classList.remove('noting')
                                }
                            })
                            addNoteConfirmBtn.classList.add('3123418')
                        }
                        if (e.target.value != '') {
                            addNoteConfirmBtn.classList.add('confirm')
                        } else if (e.target.value == '') {
                            addNoteConfirmBtn.classList.remove('confirm')
                        }
                    })

                const newexpensebtn = document.createElement('button')
                newexpensebtn.classList.add('removebtn')
                newexpensebtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
                newexpense.append(newexpensebtn)

                newexpensebtn.addEventListener('click', () => {
                    expensesAB.dataset.totalExpensesRE = expensesAB.dataset.totalExpenses
                    expensesAB.dataset.totalExpenses = expensesAB.dataset.totalExpensesRE - newexpenseamount.dataset.amount

                    localStorage.setItem("loadBudgetExpense" + numID, parseInt(localStorage.getItem("loadBudgetExpense" + numID)) - parseInt(newexpenseamount.dataset.amount))

                    removeSavedExpense(parseInt(newexpenseamount.dataset.amount) + '-' + compactedDate, numID)

                    expensesAB.textContent = "$" + expensesAB.dataset.totalExpenses

                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudget / expensesAB.dataset.totalExpenses
                    totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(newexpenseamount.dataset.amount)
                    console.log("removingfromTotal");
                    updatetotal()

                    increaser.classList.add('down')
                    increaser.classList.remove('up')
                    increaser.dataset.currentValue = parseInt(newexpenseamount.dataset.amount) * 100 / budgetAB.dataset.totalBudget
                    increaser.textContent = "-" + Math.round(increaser.dataset.currentValue) + "%"

                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                    if (waythereAB.dataset.percentage > 100) {
                        waythereAB.style.width = '100%'
                        percentage.textContent = ">100%"
                    } else {
                        waythereAB.style.width = waythereAB.dataset.percentage + "%"
                        percentage.textContent = Math.round(waythereAB.dataset.percentage) + "%"
                    } 

                    if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalBudget) ) {
                        budgetbox.classList.remove('overbudget')
                        inputAB.classList.remove('overbudget')
                        buttonAddExpenseAB.classList.remove('overbudget')
                        buttonViewExpensesAB.classList.remove('overbudget')
                        hiderAB.classList.remove('overbudget')
                        expensesboxAB.classList.remove('overbudget')
                    }

                    if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalbudgetthreeforths)) {
                        waythereAB.classList.remove('overthreeforths')
                    }

                    if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalbudgethalf) && !waythereAB.classList.contains("overhalf")){
                        waythereAB.classList.remove('overhalf')
                    }

                    newexpense.remove()
                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudget / expensesAB.dataset.totalExpenses

                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                    if (waythereAB.dataset.percentage > 100) {
                        waythereAB.style.width = '100%'
                        percentage.textContent = '>100%'
                    } else {
                        waythereAB.style.width = waythereAB.dataset.percentage + "%"
                        percentage.textContent = Math.round(waythereAB.dataset.percentage) + "%"
                    } 
    
                    if (expensesAB.dataset.totalExpenses > parseInt(budgetAB.dataset.totalBudget) && !budgetbox.classList.contains('overbudget')) {
                        budgetbox.classList.add('overbudget')
                        inputAB.classList.add('overbudget')
                        buttonAddExpenseAB.classList.add('overbudget')
                        buttonViewExpensesAB.classList.add('overbudget')
                        expensesboxAB.classList.add('overbudget')
                        hiderAB.classList.add('overbudget')
                        newexpensebtn.classList.add('overbudget')
                        waythereAB.classList.add('overthreeforths')
                        waythereAB.classList.remove("overhalf")
                    } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')){
                        waythereAB.classList.add('overthreeforths')
                        waythereAB.classList.remove("overhalf")
                    } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgethalf) && !waythereAB.classList.contains('overhalf')){
                        waythereAB.classList.add("overhalf")
                    } else if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalbudgethalf)) {
                        waythereAB.classList.remove("overhalf")
                    }

                })

                if(inputAB.dataset.input >= parseInt(budgetAB.dataset.totalbudgetquarter)) {
                    pushAlert(`bigExpense`, loadBudgetName, waythereAB.dataset.percentage, newexpensebtn)
                }

                localStorage.setItem("loadBudgetExpense" + numID, parseInt(localStorage.getItem("loadBudgetExpense" + numID)) + parseInt(inputAB.dataset.input)/*.toString() + '*' + getCurrentDate().day + '*' + getCurrentDate().month + '*' + getCurrentDate().year*/)
                saveExpenses(parseInt(inputAB.dataset.input), compactedDate, numID)
                inputAB.dataset.input = ""
                inputAB.value = ""
                } // end of function
            })
        }
        inputAB.dataset.input = e.target.value
    })

    // 534#82#918#331#91# = 534#82#918#331#91
    var numCurRead = null
    var totalExpenseLE = 0
    if(expenseString == null) {
    } else
    {
        var expenseLoader = expenseString.slice(0, -1)
        console.log(expenseLoader);
        for (let index = 0; index < expenseString.length - 1; index++) {
            if (expenseLoader.slice(-1) == '#')
            {
                totalExpenseLE = parseInt(totalExpenseLE) + parseInt(numCurRead)

                var expenseFormater = numCurRead
                var expenseStorageID = numCurRead
                var curRead = null
                var date 
                var dateFormatingNum = 0
                var expenseNote

                for (let index = 0; index < numCurRead.toString().length; index++) {
                if (expenseFormater.slice(-1) == '-') {
                    if (dateFormatingNum == 0) {
                        console.log(curRead);
                        expenseNote = curRead
                        curRead = null;
                        dateFormatingNum = 1;
                    } else if (dateFormatingNum == 1) {
                        let formattedMonth 
                        dateForNote = curRead.toString();
                        switch (curRead.toString()) {
                    case `1`:
                        formattedMonth = `Jan`
                        break;

                    case `2`:
                        formattedMonth = `Feb`
                        break;

                    case `3`:
                        formattedMonth = `Mar`
                        break;
                    
                    case `4`:
                        formattedMonth = `Apr`
                        break;

                    case `5`:
                        formattedMonth = `May`
                        break;

                    case `6`:
                        formattedMonth = `Jun`
                        break;

                    case `7`:
                        formattedMonth = `Jul`
                        break;
                    
                    case `8`: 
                        formattedMonth = `Aug`
                        break;
                    
                    case `9`:
                        formattedMonth = `Sep`
                        break;
                    
                    case `10`:
                        formattedMonth = `Oct`
                        break;

                    case `11`:
                        formattedMonth = `Nov`
                        break;

                    case `12`:
                        formattedMonth = `Dec`
                        break;
                    default:
                        formattedMonth = null
                        break;
                        }
                        date = formattedMonth.toString()
                        dateFormatingNum = 2;
                        curRead = null;
                    } else if (dateFormatingNum == 2) {
                        let formattedDay 
                        switch (curRead.toString()) {
                            case `1`:
                                formattedDay = '1st'
                                break;
        
                            case `2`:
                                formattedDay = '2nd'
                                break
        
                            case `3`:
                                formattedDay = '3rd'
                                break
                        
                            default:
                                formattedDay = `${curRead}th`
                                break;
                        }
                        date = formattedDay.toString() + " " + date
                        dateForNote = curRead.toString() + '-' + dateForNote + '-'
                        curRead = null;
                        // console.log(date)
                    }
                } else {
                    if (curRead == null) {
                        curRead = expenseFormater.slice(-1)
                    } else {
                        curRead = expenseFormater.slice(-1) + curRead
                    }
                }
                expenseFormater = expenseFormater.slice(0,-1)
                }


                const newexpense = document.createElement('div')
                newexpense.classList.add('expenses')
                expensesboxAB.prepend(newexpense)

                const newexpenseinfo = document.createElement('div')
                newexpenseinfo.classList.add('expenseInfo')
                newexpense.append(newexpenseinfo)

                const newexpenseamount = document.createElement('div')
                newexpenseamount.classList.add('amount')
                newexpenseamount.dataset.amount = parseInt(curRead)
                newexpenseamount.textContent = "$" + parseInt(curRead)
                newexpenseinfo.append(newexpenseamount)

                const newexpensedate = document.createElement('div')
                newexpensedate.classList.add('expenseDate')
                newexpensedate.textContent = date
                newexpenseinfo.append(newexpensedate)

                if (expenseNote == '�') {
                    const addnotebtn = document.createElement('button')
                    addnotebtn.classList.add('addNoteBtn')
                    newexpense.append(addnotebtn)
                    const icon = document.createElement('i')
                    icon.classList.add('fa-regular')
                    icon.classList.add('fa-notes')
                    addnotebtn.append(icon)

                    const addNoteInput = document.createElement('input')
                    addNoteInput.classList.add('addNoteInput')
                    addNoteInput.dataset.type = 'text'
                    newexpense.append(addNoteInput)

                    const addNoteConfirmBtn = document.createElement('button')
                    addNoteConfirmBtn.classList.add('addNoteConfirmBtn')
                    newexpense.append(addNoteConfirmBtn)

                    addnotebtn.addEventListener('click', () => {
                        newexpense.classList.add('noting')
                    })

                    addNoteConfirmBtn.addEventListener('click', () => {
                        if(!addNoteConfirmBtn.classList.contains('confirm')) newexpense.classList.remove('noting')
                    })

                    addNoteInput.addEventListener('input', e => {
                        if (!addNoteConfirmBtn.classList.contains('3123418')) {
                            addNoteConfirmBtn.addEventListener('click', () => {
                                if (addNoteConfirmBtn.classList.contains('confirm')) {
                                    const expenseNoteText = document.createElement('div')
                                    expenseNoteText.classList.add('expenseNote')
                                    expenseNoteText.textContent = e.target.value
                                    newexpenseinfo.append(expenseNoteText)
                                    newexpensedate.textContent = date + ' -'
                                    newexpense.classList.remove('noting')
                                    addnotebtn.remove()
                                    addNoteInput.remove()
                                    addNoteConfirmBtn.remove()
                                    replaceSavedExpense(newexpensebtn.dataset.storageID,numID,parseInt(newexpenseamount.dataset.amount) + dateForNote + '' + e.target.value)
                                } else {
                                    newexpense.classList.remove('noting')
                                }
                            })
                            addNoteConfirmBtn.classList.add('3123418')
                        }
                        if (e.target.value != '') {
                            addNoteConfirmBtn.classList.add('confirm')
                        } else if (e.target.value == '') {
                            addNoteConfirmBtn.classList.remove('confirm')
                        }
                    })
                } else {
                    const expenseNoteText = document.createElement('div')
                    expenseNoteText.classList.add('expenseNote')
                    expenseNoteText.textContent = expenseNote
                    newexpenseinfo.append(expenseNoteText)
                    newexpensedate.textContent = date + ' -'
                }
                
                const newexpensebtn = document.createElement('button')
                newexpensebtn.classList.add('removebtn')
                newexpensebtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
                newexpensebtn.dataset.storageID = numCurRead
                newexpense.append(newexpensebtn)
                newexpensebtn.addEventListener('click', () => {
                    expensesAB.dataset.totalExpensesRE = expensesAB.dataset.totalExpenses
                    expensesAB.dataset.totalExpenses = expensesAB.dataset.totalExpensesRE - newexpenseamount.dataset.amount
            
                    localStorage.setItem("loadBudgetExpense" + numID, parseInt(localStorage.getItem("loadBudgetExpense" + numID)) - parseInt(newexpenseamount.dataset.amount))

                    removeSavedExpense(newexpensebtn.dataset.storageID,numID)

                    expensesAB.textContent = "$" + parseFloat(expensesAB.dataset.totalExpenses)

                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudget / expensesAB.dataset.totalExpenses
                    totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(newexpenseamount.dataset.amount)
                    updatetotal()

                    increaser.classList.add('down')
                    increaser.classList.remove('up')
                    increaser.dataset.currentValue = parseInt(newexpenseamount.dataset.amount) * 100 / budgetAB.dataset.totalBudget
                    increaser.textContent = "-" + Math.round(increaser.dataset.currentValue) + "%"

                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                    if (waythereAB.dataset.percentage > 100) {
                        waythereAB.style.width = '100%'
                        percentage.textContent = ">100%"
                    } else {
                        waythereAB.style.width = waythereAB.dataset.percentage + "%"
                        percentage.textContent = Math.round(waythereAB.dataset.percentage) + "%"
                    } 
                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                    if (waythereAB.dataset.percentage > 100) {
                        waythereAB.style.width = '100%'
                        percentage.textContent = ">100%"
                    } else {
                        waythereAB.style.width = waythereAB.dataset.percentage + "%"
                        percentage.textContent = Math.round(waythereAB.dataset.percentage) + "%"
                    } 

                    if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalBudget) ) {
                            budgetbox.classList.remove('overbudget')
                            inputAB.classList.remove('overbudget')
                            console.log("averbudget")
                            buttonAddExpenseAB.classList.remove('overbudget')
                            buttonViewExpensesAB.classList.remove('overbudget')
                            hiderAB.classList.remove('overbudget')
                            expensesboxAB.classList.remove('overbudget')
                        }

                    if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalbudgetthreeforths)) {
                        waythereAB.classList.remove('overthreeforths')
                    }

                    if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalbudgethalf) && waythereAB.classList.contains('overhalf')) {
                        waythereAB.classList.remove('overhalf')
                    }

                    newexpense.remove()
                    updatetotal
                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudget / expensesAB.dataset.totalExpenses

                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                    if (waythereAB.dataset.percentage > 100) {
                        waythereAB.style.width = '100%'
                        percentage.textContent = '>100%'
                    } else {
                        waythereAB.style.width = waythereAB.dataset.percentage + "%"
                        percentage.textContent = Math.round(waythereAB.dataset.percentage) + "%"
                    } 
                
                    if (expensesAB.dataset.totalExpenses > parseInt(budgetAB.dataset.totalBudget) && !budgetbox.classList.contains('overbudget')) {
                        budgetbox.classList.add('overbudget')
                        inputAB.classList.add('overbudget')
                        console.log("overbudget")    
                        buttonAddExpenseAB.classList.add('overbudget')
                        buttonViewExpensesAB.classList.add('overbudget')
                        hiderAB.classList.add('overbudget')
                        waythereAB.classList.add('overthreeforths')
                        waythereAB.classList.remove("overhalf")
                    } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')) {
                        waythereAB.classList.add('overthreeforths')
                        console.log("over34")
                        waythereAB.classList.remove("overhalf")
                    } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgethalf)){
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
                totalExpenseLE = parseInt(totalExpenseLE) + parseInt(numCurRead)

                var expenseFormater = numCurRead
                var expenseNote 
                var curRead = null
                var date 
                var dateFormatingNum = 0
                var dateForNote

                for (let index = 0; index < numCurRead.toString().length; index++) {
                    if (expenseFormater.slice(-1) == '-') {
                        if (dateFormatingNum == 0) {
                            expenseNote = curRead
                            curRead = null;
                            dateFormatingNum = 1;
                        } else if (dateFormatingNum == 1) {
                            let formattedMonth 
                            dateForNote = curRead.toString()
                            switch (curRead.toString()) {
                        case `1`:
                            formattedMonth = `Jan`
                            break;

                        case `2`:
                            formattedMonth = `Feb`
                            break;

                        case `3`:
                            formattedMonth = `Mar`
                            break;
                            
                        case `4`:
                            formattedMonth = `Apr`
                            break;

                        case `5`:
                            formattedMonth = `May`
                            break;

                        case `6`:
                            formattedMonth = `Jun`
                            break;

                        case `7`:
                            formattedMonth = `Jul`
                            break;
                            
                        case `8`: 
                            formattedMonth = `Aug`
                            break;
                            
                        case `9`:
                            formattedMonth = `Sep`
                            break;
                            
                        case `10`:
                            formattedMonth = `Oct`
                            break;

                        case `11`:
                            formattedMonth = `Nov`
                            break;

                        case `12`:
                            formattedMonth = `Dec`
                            break;
                        default:
                            formattedMonth = null
                            break;
                            }
                            date = formattedMonth.toString();
                            dateFormatingNum = 2;
                            curRead = null;
                        } else if (dateFormatingNum == 2) {
                            let formattedDay 
                            switch (curRead.toString()) {
                                case `1`:
                                    formattedDay = '1st'
                                    break;
                            
                                case `2`:
                                    formattedDay = '2nd'
                                    break
                            
                                case `3`:
                                    formattedDay = '3rd'
                                    break
                            
                                default:
                                    formattedDay = `${curRead}th`
                                    break;
                            }
                            date = formattedDay.toString() + " " + date
                            dateForNote = curRead.toString() + '-' + dateForNote + '-'
                            curRead = null;
                            // console.log(date)
                        }
                    } else {
                        if (curRead == null) {
                            curRead = expenseFormater.slice(-1)
                        } else {
                            curRead = expenseFormater.slice(-1) + curRead
                        }
                    }
                    expenseFormater = expenseFormater.slice(0,-1)
                }


                const newexpense = document.createElement('div')
                newexpense.classList.add('expenses')
                expensesboxAB.prepend(newexpense)

                const newexpenseinfo = document.createElement('div')
                newexpenseinfo.classList.add('expenseInfo')
                newexpense.append(newexpenseinfo)

                const newexpenseamount = document.createElement('div')
                newexpenseamount.classList.add('amount')
                newexpenseamount.dataset.amount = parseInt(curRead)
                newexpenseamount.textContent = "$" + parseInt(curRead)
                newexpenseinfo.append(newexpenseamount)

                const newexpensedate = document.createElement('div')
                newexpensedate.classList.add('expenseDate')
                newexpensedate.textContent = date
                newexpenseinfo.append(newexpensedate)

                if (expenseNote == '�') {
                    const addnotebtn = document.createElement('button')
                    addnotebtn.classList.add('addNoteBtn')
                    newexpense.append(addnotebtn)
                    const icon = document.createElement('i')
                    icon.classList.add('fa-regular')
                    icon.classList.add('fa-notes')
                    addnotebtn.append(icon)

                    const addNoteInput = document.createElement('input')
                    addNoteInput.classList.add('addNoteInput')
                    addNoteInput.dataset.type = 'text'
                    newexpense.append(addNoteInput)

                    const addNoteConfirmBtn = document.createElement('button')
                    addNoteConfirmBtn.classList.add('addNoteConfirmBtn')
                    newexpense.append(addNoteConfirmBtn)

                    addnotebtn.addEventListener('click', () => {
                        newexpense.classList.add('noting')
                    })

                    addNoteConfirmBtn.addEventListener('click', () => {
                        if(!addNoteConfirmBtn.classList.contains('confirm')) newexpense.classList.remove('noting')
                    })

                    addNoteInput.addEventListener('input', e => {
                        if (!addNoteConfirmBtn.classList.contains('3123418')) {
                            addNoteConfirmBtn.addEventListener('click', () => {
                                if (addNoteConfirmBtn.classList.contains('confirm')) {
                                    const expenseNoteText = document.createElement('div')
                                    expenseNoteText.classList.add('expenseNote')
                                    expenseNoteText.textContent = e.target.value
                                    newexpenseinfo.append(expenseNoteText)
                                    newexpensedate.textContent = date + ' -'
                                    newexpense.classList.remove('noting')
                                    addnotebtn.remove()
                                    addNoteInput.remove()
                                    addNoteConfirmBtn.remove()
                                    console.log(newexpensebtn.dataset.storageID,parseInt(newexpenseamount.dataset.amount) + dateForNote + e.target.value)
                                    replaceSavedExpense(newexpensebtn.dataset.storageID,numID,parseInt(newexpenseamount.dataset.amount) + dateForNote + e.target.value)
                                } else {
                                    newexpense.classList.remove('noting')
                                }
                            })
                            addNoteConfirmBtn.classList.add('3123418')
                        }
                        if (e.target.value != '') {
                            addNoteConfirmBtn.classList.add('confirm')
                        } else if (e.target.value == '') {
                            addNoteConfirmBtn.classList.remove('confirm')
                        }
                    })
                } else {
                    const expenseNoteText = document.createElement('div')
                    expenseNoteText.classList.add('expenseNote')
                    expenseNoteText.textContent = expenseNote
                    newexpenseinfo.append(expenseNoteText)
                    newexpensedate.textContent = date + ' -'
                }

                const newexpensebtn = document.createElement('button')
                newexpensebtn.classList.add('removebtn')
                newexpensebtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
                newexpensebtn.dataset.storageID = numCurRead
                newexpense.append(newexpensebtn)
                newexpensebtn.addEventListener('click', () => {
                    expensesAB.dataset.totalExpensesRE = expensesAB.dataset.totalExpenses
                    expensesAB.dataset.totalExpenses = expensesAB.dataset.totalExpensesRE - newexpenseamount.dataset.amount

                    localStorage.setItem("loadBudgetExpense" + numID, parseInt(localStorage.getItem("loadBudgetExpense" + numID)) - parseInt(newexpenseamount.dataset.amount))

                    removeSavedExpense(newexpensebtn.dataset.storageID,numID)

                    expensesAB.textContent = "$" + parseFloat(expensesAB.dataset.totalExpenses)

                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudget / expensesAB.dataset.totalExpenses
                    totaltotalexpenses.dataset.totalTotalExpenses = parseInt(totaltotalexpenses.dataset.totalTotalExpenses) - parseInt(newexpenseamount.dataset.amount)
                    updatetotal()

                    increaser.classList.add('down')
                    increaser.classList.remove('up')
                    increaser.dataset.currentValue = parseInt(newexpenseamount.dataset.amount) * 100 / budgetAB.dataset.totalBudget
                    increaser.textContent = "-" + Math.round(increaser.dataset.currentValue) + "%"

                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                    if (waythereAB.dataset.percentage > 100) {

                        waythereAB.style.width = '100%'
                        percentage.textContent = ">100%"
                    } else {
                        waythereAB.style.width = waythereAB.dataset.percentage + "%"
                        percentage.textContent = Math.round(waythereAB.dataset.percentage) + "%"
                    } 

                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                    if (waythereAB.dataset.percentage > 100) {
                        waythereAB.style.width = '100%'
                        percentage.textContent = ">100%"
                    } else {
                        waythereAB.style.width = waythereAB.dataset.percentage + "%"
                        percentage.textContent = Math.round(waythereAB.dataset.percentage) + "%"
                    } 

                    if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalBudget) ) {
                            budgetbox.classList.remove('overbudget')
                            inputAB.classList.remove('overbudget')
                            console.log("averbudget")
                            buttonAddExpenseAB.classList.remove('overbudget')
                            buttonViewExpensesAB.classList.remove('overbudget')
                            hiderAB.classList.remove('overbudget')
                            expensesboxAB.classList.remove('overbudget')
                        }

                    if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalbudgetthreeforths)) {
                        waythereAB.classList.remove('overthreeforths')
                    }

                    if (expensesAB.dataset.totalExpenses < parseInt(budgetAB.dataset.totalbudgethalf) && waythereAB.classList.contains('overhalf')) {
                        waythereAB.classList.remove('overhalf')
                    }

                    newexpense.remove()
                    updatetotal
                    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudget / expensesAB.dataset.totalExpenses

                    waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                    if (waythereAB.dataset.percentage > 100) {
                        waythereAB.style.width = '100%'
                        percentage.textContent = '>100%'
                    
                    } else {
                        waythereAB.style.width = waythereAB.dataset.percentage + "%"
                        percentage.textContent = Math.round(waythereAB.dataset.percentage) + "%"
                    } 
                
                    if (expensesAB.dataset.totalExpenses > parseInt(budgetAB.dataset.totalBudget) && !budgetbox.classList.contains('overbudget')) {
                        budgetbox.classList.add('overbudget')
                        inputAB.classList.add('overbudget')
                        console.log("overbudget")    
                        buttonAddExpenseAB.classList.add('overbudget')
                        buttonViewExpensesAB.classList.add('overbudget')
                        hiderAB.classList.add('overbudget')
                        waythereAB.classList.add('overthreeforths')
                        waythereAB.classList.remove("overhalf")
                    } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')) {
                        waythereAB.classList.add('overthreeforths')
                        console.log("over34")
                        waythereAB.classList.remove("overhalf")
                    } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgethalf)){
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

    percantagebarmainAB.dataset.divider = budgetAB.dataset.totalBudget / expensesAB.dataset.totalExpenses
                waythereAB.dataset.percentage = 100 / percantagebarmainAB.dataset.divider
                if (waythereAB.dataset.percentage > 100) {
                    waythereAB.style.width = '100%'
                } else {
                    waythereAB.style.width = waythereAB.dataset.percentage + "%"
                } 

                if (expensesAB.dataset.totalExpenses > parseInt(budgetAB.dataset.totalBudget) && !budgetbox.classList.contains('overbudget')){
                    budgetbox.classList.add('overbudget')
                    inputAB.classList.add('overbudget')
                    buttonAddExpenseAB.classList.add('overbudget')
                    buttonViewExpensesAB.classList.add('overbudget')
                    hiderAB.classList.add('overbudget')
                    expensesboxAB.classList.add('overbudget')
                    waythereAB.classList.add('overthreeforths')
                    waythereAB.classList.remove("overhalf")
                } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgetthreeforths) && !waythereAB.classList.contains('overthreeforths')){
                    waythereAB.classList.add('overthreeforths')
                    waythereAB.classList.remove("overhalf")
                } else if (expensesAB.dataset.totalExpenses >= parseInt(budgetAB.dataset.totalbudgethalf)){
                    waythereAB.classList.add("overhalf")
                }
}

function pushAlert(reason, category, percentage, btn) {
    alertList.push({r: reason, c: category, p: percentage, b: btn});
    if (!alertBox.classList.contains('active')) manageAlerts()
    varListenerAlertList.click()
    console.log(alertList);
}

varListenerAlertList.addEventListener("click", () => {
    console.log('alertList updated successfully');
})

function manageAlerts() {
    if (alertList.length <= 0) return
    reason = alertList[0].r; 
    category = alertList[0].c;
    percentage = alertList[0].p;
    btn = alertList[0].b;
    alertList.shift()
    if (!alertBox.classList.contains('active')) {
        displayAlert(reason, category, percentage, btn)
    }
}

function displayAlert(reason, category, percentage, btn) {
    if (reason === 'over90') {
        alertText.textContent = `You have used over 90 percent of your ${category} budget.`
        alertSubText.textContent = `Consider lowering your ${category} spendings.`
    } else if (reason === 'over100') {
        alertBox.classList.add('overbudget')
        alertText.textContent = `You have gone over budget on ${category}.`
        alertSubText.textContent = `Lower your spendings to stay in you ${category} budget. `        
    } else if (reason === 'bigExpense') {
        alertText.textContent = `Wow! You spent a lot on ${category}. You have used ${Math.round(percentage)}% of your budget.`
        alertSubText.textContent = `Please confirm your expense.`
        alertConfirmBtn.textContent = `Undo`
        alertDismissBtn.textContent = `Keep`
        undoExpense = btn
        alertBox.classList.add('bigSpend');
    } else if (reason === 'noBudgets') {
        alertText.textContent = `You don't have any budgets.`
        alertSubText.textContent = `Please add some before going to the Statistics tab.`
    }
    alertBox.classList.add('active')
    setTimeout(() => {
        if (alertBox.classList.contains('active')) alertBox.classList.add('buzz')    
        setTimeout(() => {
            alertBox.classList.remove('buzz')
        }, 400);
    }, 400)
}

function getCurrentDate() {
    let date = new Date()
    return { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear()}
}

function hexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    var colorInHSL = {h: h, s: s, l: l}
    return colorInHSL
}