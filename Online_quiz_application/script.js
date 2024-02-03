function mainFunction () {
    let userName = '';
    let counterAll = 0;
    let order = 0;

    const allbuttons = document.querySelector('#allbuttons'),
          buttonYes = document.querySelector('#btnY'),
          buttonNo = document.querySelector('#btnN'),
          username = document.getElementById('username'),
          maintext = document.getElementById('maintext');

    let questions = [
        [' 5 < 3 ? '], 
        [' 5 + 10 * 2 = 30 ? '],
        [' 0 * 1 = 1 ? '],
        [' 32 / 2 = 16 ? '],
        [' John is "he" ? '],
        [' Anna is "his" ? '],
        [' The capital of China is "Shanhai" ? '],
        [' 25 * 3 + 15 / 3 = 85 ? '],
        [' 15 > 8 ? '],
        [' Did you like this test ? ']
    ];

    let answers = [
        ['No'],
        ['No'],
        ['No'],
        ['Yes'],
        ['Yes'],
        ['No'],
        ['No'],
        ['No'],
        ['Yes'],
        ['Yes']
    ];

    function nameIdentify() {
        userName = prompt("Please, enter your name?", '');

        if (userName) {
            username.innerHTML = `${userName}, nice to see you`;
        } else if (userName == null || userName == '') {
            username.innerHTML = `Please enter your name :)`;
        }
    }

    setTimeout(nameIdentify, 3000);

    if (userName != undefined) {
        let changeStatus = function() {
            maintext.innerHTML = `Are you ready, ${userName}?`; 
        };

        setTimeout(changeStatus, 10000);

    }

    function changeState() {
        let sec = 10;
        let t;
        function tick() {
            sec-=1;
        }
        function add() {
            tick();
            username.innerHTML = `Test will start in ${sec}`;
            timer();
        }
        function timer() {
            t = setTimeout(add, 1000);
            if (sec == 0) {
                clearTimeout(t);
                allbuttons.classList.remove('notactive');
                allbuttons.classList.add('active');
                questionsAppear(questions);
            }
        }
        timer();
        
    }
    
    setTimeout(changeState, 9000);

    function questionsAppear(ques) {
        username.innerHTML = `${userName} think about it :)`;
        maintext.innerHTML = `${ques[0]}`; 
    }

    function orderFor() {
        order += 1;
    }

    function triggerYes(ans) {
        if (ans[order - 1] == 'Yes') {
            counterAll += 10;
        }
    }

    function triggerNo(ans) {
        if (ans[order - 1] == 'No') {
            counterAll += 10;
        }
    }

    buttonYes.addEventListener('click', () => {
        orderFor();
        if (order <= 9) {
            maintext.innerHTML = `${questions[order]}`;
            triggerYes(answers);
        } else if (order == 10) {
            triggerYes(answers);
            maintext.innerHTML = `${userName}, your score is ${counterAll} from 100`;
            allbuttons.classList.remove('active');
            username.innerHTML = 'Thank You!'; 
        }
    });

    buttonNo.addEventListener('click', () => {
        orderFor();
        if (order <= 9) {
            maintext.innerHTML = `${questions[order]}`;
            triggerNo(answers);
        } else if (order == 10) {
            triggerNo(answers);
            maintext.innerHTML = `${userName}, your score is ${counterAll} from 100`; 
            allbuttons.classList.remove('active');
            username.innerHTML = 'Thank You!'; 
        }
    });

    
}

mainFunction();




