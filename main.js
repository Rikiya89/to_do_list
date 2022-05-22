'use strict';
{
    const form = document.querySelector('.form');
    const text = document.querySelector('.text');
    let count;
    let allTask;

    // form全体のデータをenterで送信するか、
    //submitボタンを押してリストを追加する
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const li = document.createElement('li');
        const todoText = document.createElement('span');

        li.classList.add('todo__item');
        todoText.classList.add('todo__text');
        
        li.appendChild(todoText);
        todoText.textContent = text.value;

        const doneButton = document.createElement('span');
        doneButton.classList.add('todo__done');
        doneButton.textContent = '　> Done';
        li.appendChild(doneButton);

        // doneButtonにクリックイベントを付与してブロック外の関数に引き渡す
        // submit外で定義したdeleteTasks関数を実行する
        doneButton.addEventListener('click', function(e){
            e.preventDefault();
            deleteTasks(doneButton);
        });

        //空文字または、>Doneが入っていた場合にリスト追加の処理ができないように設定している
        if (li.textContent === '' || li.textContent === '　> Done' ) {
            text.value = '';
            return false;
        }

        // ulに作ったli要素を追加する
        const ul = document.querySelector('.todo__list');
        ul.appendChild(li);
        text.value = '';
        text.focus();

        // count機能 doneの件数を数えてcountに反映する
        const allList = document.querySelectorAll('.todo__item');
        allTask = document.querySelector('.allTask');
        allTask.textContent = allList.length;

    });

    // doneボタンの関数 処理内容
    const deleteTasks = function (doneButton) {
        doneButton.parentNode.classList.toggle('done');

        if (doneButton.parentNode.classList.contains('done') === true) {
            doneButton.textContent = '　> Not Done';
        } else {
            doneButton.textContent = '　> Done';
        }

        // count機能 doneの件数を数えてcountに反映する
        const sumDone = document.querySelectorAll('.done');
        count = document.querySelector('.count');
        count.textContent = sumDone.length;

    };

    // 全てを完了にする機能
    const allDone = document.querySelector('.allDone');
    allDone.addEventListener('click', function(){
        const lis = document.querySelectorAll('.todo__item');
        console.log(lis);
        lis.forEach(function(li) {
            li.classList.add('done');
            text.value = '';
            text.focus();
        });

        const toDoDone = document.querySelectorAll('.todo__done');
        console.log(toDoDone);
        toDoDone.forEach(function(label){
            label.textContent = '　> Not Done';
        });

        // count機能 doneの件数を数えてcountに反映する
        const sumDone = document.querySelectorAll('.done');
        count = document.querySelector('.count');
        count.textContent = sumDone.length;

    });

    const reset = document.querySelector('.reset');
    reset.addEventListener('click', function(){
        const result = confirm('Todoを削除しリセットしてもよいですか？');
        if (result === true) {
            location.reload();
        }
    });


}