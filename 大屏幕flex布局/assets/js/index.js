/*
 * @Description: {首页} 
 * @Author: zhuoyan 
 * @Date: 2019-09-26 10:51:22 
 */

$(function () {

    chart_l1();

    createTable();
    function createTable(pdata) {
        var list = '';
        for (let index = 0; index < 15; index++) {
            list += `
            <li>
                <div class="table-tr flex">
                    <div class="table-index"><span class="index-bg">${index+1}</span></div>
                    <div class="flex-item">街道${index+1}</div>
                    <div class="flex-item table-blue">${random(1000,2000)}/${random(100,300)}</div>
                    <div class="flex-item table-blue">${random(10,90)}%</div>
                    <div class="flex-item table-green">${random(10,60)}%</div>
                    <div class="flex-item table-orange">${random(10,20)}%</div>
                </div>
            </li>
            `;
        }
        $('#common-scroll-table-ul').empty().append(list);
        $(".common-scroll-table").slide({
            mainCell: ".bd ul",
            autoPage: true,
            effect: "top",
            autoPlay: true,
            vis: 4
        });
    }

});