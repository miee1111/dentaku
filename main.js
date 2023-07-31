/* １〜９までの数値を入力することができる
 「＋」「−」「×」「÷」を使った計算ができる
 計算式を入力後、「=」を押下すると、入力した式の結果を表示できる
 計算式入力時は、表示が不正にならないよう制御できている（「012」など0が先頭についた状態で表示されない、「12+++」演算子が連続で入力できない）*/
 
 
    function get_calc(btn) {
      if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
      } else if (btn.value == "AC") {
        document.dentaku.display.value = "";
      } else {
        if (btn.value == "*") {
          btn.value = "*";
        } else if (btn.value == "/") {
          btn.value = "/";
        } 
        document.dentaku.display.value += btn.value;
        document.dentaku.multi_btn.value = "*";
        document.dentaku.div_btn.value = "/";
      }
    }
  