/*
 * @Description: {公用脚本} 
 * @Author: zhuoyan 
 * @Date: 2019-08-16 10:26:19 
 */
$(function () {
    $('.layout-container').addClass('loading-success');

    // 当前时间
    var headerDate = {
        ele: $('.time1'),
        ele2: $('.time2'),
        init: function () {
            var that = this;
            that.getTime();
            setInterval(function () {
                that.getTime();
            }, 1000)
            return that;
        },
        getTime: function () {
            var date = new Date(),
                year = date.getFullYear(),
                month = date.getMonth() + 1,
                day = date.getDate(),
                hour = date.getHours(),
                minute = date.getMinutes(),
                second = date.getSeconds(),
                weekArry = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                hour = (hour < 10 ? "0" + hour : hour),
                month = (month < 10 ? "0" + month : month),
                day = (day < 10 ? "0" + day : day),
                minute = (minute < 10 ? '0' + minute : minute),
                second = (second < 10 ? '0' + second : second),
                timeStr = hour + ':' + minute + ':' + second,
                weekStr = weekArry[date.getDay()],
                dateStr = year + '-' + month + '-' + day;
            this.ele.html(hour + ':' + minute + ':' + second);
            this.ele2.html(year + '-' + month + '-' + day + ' ' + weekStr);
        }
    }
    headerDate.init();
    //二级页面 右侧导航
    // $('.common-right-guid-wrap .flex-item').click(function () {
    //     $(this).siblings().find('.common-right-subguid-wrap').hide()
    //     $(this).find('.common-right-subguid-wrap').toggle()
    // })
    // $('.btn-home').click(function () {
    //     $('.common-right-guid-wrap').toggle()
    // })
});