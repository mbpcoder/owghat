/**
 * Owghat script
 *
 * @Author:  <Mehdi Bagheri>
 * @Email:   <mb.programmer at yahoo.com>
 * @Website: <http://www.reckless.ir>
 * @Github:  <https://www.github.com/mb-programmer>
 */

var MyMath = new function()
{
    this.sind = function(x)
    {
        return(Math.sin(Math.PI / 180.0 * x));
    };
    this.cosd = function(x)
    {
        return(Math.cos(Math.PI / 180.0 * x));
    };
    this.tand = function(x)
    {
        return(Math.tan(Math.PI / 180.0 * x));
    };
    this.atand = function(x)
    {
        return(Math.atan(x) * 180.0 / Math.PI);
    };
    this.asind = function(x)
    {
        return(Math.asin(x) * 180.0 / Math.PI);
    };
    this.acosd = function(x)
    {
        return(Math.acos(x) * 180.0 / Math.PI);
    };
    this.sqrt = function(x)
    {
        return(Math.sqrt(x));
    };
    this.frac = function(x)
    {
        return(x % 1);
    };
    this.floor = function(x)
    {
        return(Math.floor(x));
    };
    this.ceil = function(x)
    {
        return(Math.ceil(x));
    };
    this.loc2hor = function(z, d, p)
    {
        return(this.acosd((this.cosd(z) - this.sind(d) * this.sind(p)) / this.cosd(d) / this.cosd(p)) / 15);
    };
    this.Round = function(x, a)
    {
        var tmp = x % a;
        if (tmp < 0)
            tmp += a;
        return(tmp);
    };
    this.hms = function(x)
    {
        x = Math.floor(3600 * x);
        h = Math.floor(x / 3600);
        mp = x - 3600 * h;
        m = Math.floor(mp / 60);
        s = Math.floor(mp - 60 * m);
        return(((h < 10) ? "0" : "") + h.toString() + ":" + ((m < 10) ? "0" : "") + m.toString() + ":" + ((s < 10) ? "0" : "") + s.toString());
    };
    this.hhh = function(x)
    {
        x = Math.floor(3600 * x);
        h = Math.floor(x / 3600);
        mp = x - 3600 * h;
        m = Math.floor(mp / 60);
        s = Math.floor(mp - 60 * m);
        return(((h < 10) ? "0" : "") + h.toString());
    };
    this.mmm = function(x)
    {
        x = Math.floor(3600 * x);
        h = Math.floor(x / 3600);
        mp = x - 3600 * h;
        m = Math.floor(mp / 60);
        s = Math.floor(mp - 60 * m);
        return(((m < 10) ? "0" : "") + m.toString());
    };
}
/*----------------------------------------------------------------------*/
var Owghat = new function()
{
    var defaults = {selectedCityIndex: 27, id: "owghat_1"};
    var settings = {};
    var selectedCityIndex = 0;
    var id = 0;
    this.run = function(options)
    {
        settings = extend(defaults, options);
        selectedCityIndex = settings.selectedCityIndex;
        id = settings.id;
        clear();
        main();
        show();
    };

    var cities = [];
    cities[0] = {value: 0, longitude: 0, latitude: 0, name: "انتخاب"};
    cities[1] = {value: 1, longitude: 49.70, latitude: 34.09, name: "اراک"};
    cities[2] = {value: 2, longitude: 48.30, latitude: 38.25, name: "اردبیل"};
    cities[3] = {value: 3, longitude: 45.07, latitude: 37.55, name: "ارومیه"};
    cities[4] = {value: 4, longitude: 51.64, latitude: 32.68, name: "اصفهان"};
    cities[5] = {value: 5, longitude: 48.68, latitude: 31.32, name: "اهواز"};
    cities[6] = {value: 6, longitude: 46.42, latitude: 33.64, name: "ایلام"};
    cities[7] = {value: 7, longitude: 57.33, latitude: 37.47, name: "بجنورد"};
    cities[8] = {value: 8, longitude: 56.29, latitude: 27.19, name: "بندرعباس"};
    cities[9] = {value: 9, longitude: 50.84, latitude: 28.97, name: "بوشهر"};
    cities[10] = {value: 10, longitude: 59.21, latitude: 32.86, name: "بیرجند"};
    cities[11] = {value: 11, longitude: 46.28, latitude: 38.08, name: "تبریز"};
    cities[12] = {value: 12, longitude: 51.41, latitude: 35.70, name: "تهران"};
    cities[13] = {value: 13, longitude: 48.34, latitude: 33.46, name: "خرم آباد"};
    cities[14] = {value: 14, longitude: 49.59, latitude: 37.28, name: "رشت"};
    cities[15] = {value: 15, longitude: 60.86, latitude: 29.50, name: "زاهدان"};
    cities[16] = {value: 16, longitude: 48.50, latitude: 36.68, name: "زنجان"};
    cities[17] = {value: 17, longitude: 53.06, latitude: 36.57, name: "ساری"};
    cities[18] = {value: 18, longitude: 53.39, latitude: 35.58, name: "سمنان"};
    cities[19] = {value: 19, longitude: 47.00, latitude: 35.31, name: "سنندج"};
    cities[20] = {value: 20, longitude: 50.86, latitude: 32.33, name: "شهرکرد"};
    cities[21] = {value: 21, longitude: 52.52, latitude: 29.62, name: "شیراز"};
    cities[22] = {value: 22, longitude: 50.00, latitude: 36.28, name: "قزوین"};
    cities[23] = {value: 23, longitude: 50.88, latitude: 34.64, name: "قم"};
    cities[24] = {value: 24, longitude: 57.06, latitude: 30.29, name: "کرمان"};
    cities[25] = {value: 25, longitude: 47.09, latitude: 34.34, name: "کرمانشاه"};
    cities[26] = {value: 26, longitude: 54.44, latitude: 36.84, name: "گرگان"};
    cities[27] = {value: 27, longitude: 59.58, latitude: 36.31, name: "مشهد"};
    cities[28] = {value: 28, longitude: 48.52, latitude: 34.80, name: "همدان"};
    cities[29] = {value: 29, longitude: 51.59, latitude: 30.67, name: "یاسوج"};
    cities[30] = {value: 30, longitude: 54.35, latitude: 31.89, name: "یزد"};
    var azan_time = [];
    azan_time[1] = {time: 0, hour: 0, minute: 0, second: 0, isAzan: true, name: "اذان صبح"};
    azan_time[2] = {time: 0, hour: 0, minute: 0, second: 0, isAzan: true, name: "طلوع خورشید"};
    azan_time[3] = {time: 0, hour: 0, minute: 0, second: 0, isAzan: true, name: "اذان ظهر"};
    azan_time[4] = {time: 0, hour: 0, minute: 0, second: 0, isAzan: true, name: "غروب خورشید"};
    azan_time[5] = {time: 0, hour: 0, minute: 0, second: 0, isAzan: true, name: "اذان مغرب"};
    var timeRemainingToNextAzan = {hour: 0, minute: 0, message: ""};
    var jalaliDay = null;       //azanday
    var jalaliMonth = null;     //azanjoomlacmsmonth
    var jalaliYear = null;
    var main = function()
    {
        convertDateToJalali();
        var i = selectedCityIndex;
        if (i === 0)
            return;

        var longitude = cities[selectedCityIndex].longitude;
        var latitude = cities[selectedCityIndex].latitude;
        var ep = sun(jalaliMonth, jalaliDay, 4, longitude);
        var zr = ep[0];
        var delta = ep[1];
        var ha = MyMath.loc2hor(108.0, delta, latitude);
        var t1 = MyMath.Round(zr - ha, 24);
        ep = sun(jalaliMonth, jalaliDay, t1, longitude);
        zr = ep[0];
        delta = ep[1];
        ha = MyMath.loc2hor(108.0, delta, latitude);
        var t1 = MyMath.Round(zr - ha + 0.025, 24);
        azan_time[1].time = MyMath.hms(t1);
        azan_time[1].hour = MyMath.hhh(t1);
        azan_time[1].minute = MyMath.mmm(t1);

        ep = sun(jalaliMonth, jalaliDay, 6, longitude);
        zr = ep[0];
        delta = ep[1];
        ha = MyMath.loc2hor(90.833, delta, latitude);
        var t2 = MyMath.Round(zr - ha, 24);
        ep = sun(jalaliMonth, jalaliDay, t2, longitude);
        zr = ep[0];
        delta = ep[1];
        ha = MyMath.loc2hor(90.833, delta, latitude);
        t2 = MyMath.Round(zr - ha + 0.008, 24);

        azan_time[2].time = MyMath.hms(t2);
        azan_time[2].hour = MyMath.hhh(t2);
        azan_time[2].minute = MyMath.mmm(t2);
        ep = sun(jalaliMonth, jalaliDay, 12, longitude);
        ep = sun(jalaliMonth, jalaliDay, ep[0], longitude);
        zr = ep[0] + 0.01;

        azan_time[3].time = MyMath.hms(zr);
        azan_time[3].hour = MyMath.hhh(zr);
        azan_time[3].minute = MyMath.mmm(zr);

        ep = sun(jalaliMonth, jalaliDay, 18, longitude);
        zr = ep[0];
        delta = ep[1];
        ha = MyMath.loc2hor(90.833, delta, latitude);
        var t3 = MyMath.Round(zr + ha, 24);
        ep = sun(jalaliMonth, jalaliDay, t3, longitude);
        zr = ep[0];
        delta = ep[1];
        ha = MyMath.loc2hor(90.833, delta, latitude);
        t3 = MyMath.Round(zr + ha - 0.014, 24);

        azan_time[4].time = MyMath.hms(t3);
        azan_time[4].hour = MyMath.hhh(t3);
        azan_time[4].minute = MyMath.mmm(t3);

        ep = sun(jalaliMonth, jalaliDay, 18.5, longitude);
        zr = ep[0];
        delta = ep[1];
        ha = MyMath.loc2hor(94.3, delta, latitude);
        var t4 = MyMath.Round(zr + ha, 24);
        ep = sun(jalaliMonth, jalaliDay, t4, longitude);
        zr = ep[0];
        delta = ep[1];
        ha = MyMath.loc2hor(94.3, delta, latitude);
        t4 = MyMath.Round(zr + ha + 0.013, 24);
        azan_time[5].time = MyMath.hms(t4);
        azan_time[5].hour = MyMath.hhh(t4);
        azan_time[5].minute = MyMath.mmm(t4);
        //setTimeout("main()", 60000);
        shownow();
    };
    var convertDateToJalali = function()     //showDate
    {
        var date = new Date();
        var dayOfMonth = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getUTCFullYear();
        if (year === 0)
        {
            year = 2000;
        }
        if (year < 1000)
        {
            year += 2000;
        }
        year -= ((month < 3) || ((month === 3) && (dayOfMonth < 21))) ? 622 : 621;
        switch (month)
        {
            case 1:
                (dayOfMonth < 21) ? (month = 10, dayOfMonth += 10) : (month = 11, dayOfMonth -= 20);
                break;
            case 2:
                (dayOfMonth < 20) ? (month = 11, dayOfMonth += 11) : (month = 12, dayOfMonth -= 19);
                break;
            case 3:
                (dayOfMonth < 21) ? (month = 12, dayOfMonth += 9) : (month = 1, dayOfMonth -= 20);
                break;
            case 4:
                (dayOfMonth < 21) ? (month = 1, dayOfMonth += 11) : (month = 2, dayOfMonth -= 20);
                break;
            case 5:
            case 6:
                (dayOfMonth < 22) ? (month -= 3, dayOfMonth += 10) : (month -= 2, dayOfMonth -= 21);
                break;
            case 7:
            case 8:
            case 9:
                (dayOfMonth < 23) ? (month -= 3, dayOfMonth += 9) : (month -= 2, dayOfMonth -= 22);
                break;
            case 10:
                (dayOfMonth < 23) ? (month = 7, dayOfMonth += 8) : (month = 8, dayOfMonth -= 22);
                break;
            case 11:
            case 12:
                (dayOfMonth < 22) ? (month -= 3, dayOfMonth += 9) : (month -= 2, dayOfMonth -= 21);
                break;
            default:
                break;
        }
        jalaliDay = dayOfMonth;
        jalaliMonth = month;
        jalaliYear = year;
    };
    var sun = function(month, day, hour, longitude)
    {
        if (month < 7)
        {
            day = 31 * (month - 1) + day + hour / 24;
        }
        else
        {
            day = 6 + 30 * (month - 1) + day + hour / 24;
        }
        var M = 74.2023 + 0.98560026 * day;
        var L = -2.75043 + 0.98564735 * day;
        var lst = 8.3162159 + 0.065709824 * Math.floor(day) + 1.00273791 * 24 * (day % 1) + longitude / 15;
        var e = 0.0167065;
        var omega = 4.85131 - 0.052954 * day;
        var ep = 23.4384717 + 0.00256 * MyMath.cosd(omega);
        var ed = 180.0 / Math.PI * e;
        var u = M;
        for (var i = 1; i < 5; i++)
        {
            u = u - (u - ed * MyMath.sind(u) - M) / (1 - e * MyMath.cosd(u));
        }
        var v = 2 * MyMath.atand(MyMath.tand(u / 2) * Math.sqrt((1 + e) / (1 - e)));
        var theta = L + v - M - 0.00569 - 0.00479 * MyMath.sind(omega);
        var delta = MyMath.asind(MyMath.sind(ep) * MyMath.sind(theta));
        var alpha = 180.0 / Math.PI * Math.atan2(MyMath.cosd(ep) * MyMath.sind(theta), MyMath.cosd(theta));
        if (alpha >= 360)
        {
            alpha -= 360;
        }
        var ha = lst - alpha / 15;
        var zr = MyMath.Round(hour - ha, 24);
        return ([zr, delta]);
    };
    var offshownow = function()
    {
        for (i = 1; i <= 5; i++)
        {
            azan_time[i].isAzan = false;
        }
    };
    var shownow = function()
    {
        today = new Date();
        azan_ttt = new Date();
        azan_ttt.setHours(azan_time[1].hour);
        azan_ttt.setMinutes(azan_time[1].minute);

        if (azan_ttt.getTime() > today.getTime())
        {
            offshownow();
            azan_time[1].isAzan = true;
            diff = azan_ttt.getTime() - today.getTime();
            diff = Math.floor(diff / (1000 * 60));
            timeRemainingToNextAzan.hour = Math.floor(diff / (60));
            timeRemainingToNextAzan.minute = diff - (timeRemainingToNextAzan.hour * 60);
            if (timeRemainingToNextAzan.minute >= 60) {
                timeRemainingToNextAzan.hour++;
                timeRemainingToNextAzan.minute -= 60;
            }
            //timeRemainingToNextAzan.message = "&#1605;&#1575;&#1606;&#1583;&#1607; &#1578;&#1575; <span class='message' style='color: red'>&#1575;&#1584;&#1575;&#1606; &#1589;&#1576;&#1581;"
            timeRemainingToNextAzan.message = timeRemainingToNextAzan.hour + ":" + timeRemainingToNextAzan.minute + " مانده تا اذان صبح";
        }
        else
        {
            if (azan_ttt.getTime() === today.getTime())
            {
                offshownow();
                azan_time[1].isAzan = true;
                timeRemainingToNextAzan.message = "اذان صبح به افق" + cities[selectedCityIndex].name;
            }
            else
            {
                azan_ttt = new Date();
                azan_ttt.setHours(azan_time[2].hour);
                azan_ttt.setMinutes(azan_time[2].minute);
                if (azan_ttt.getTime() > today.getTime())
                {
                    offshownow();
                    azan_time[2].isAzan = true;
                    diff = azan_ttt.getTime() - today.getTime();
                    diff = Math.floor(diff / (1000 * 60));
                    timeRemainingToNextAzan.hour = Math.floor(diff / (60));
                    timeRemainingToNextAzan.minute = diff - (timeRemainingToNextAzan.hour * 60);
                    if (timeRemainingToNextAzan.minute >= 60) {
                        timeRemainingToNextAzan.hour++;
                        timeRemainingToNextAzan.minute -= 60;
                    }
                    timeRemainingToNextAzan.message = timeRemainingToNextAzan.hour + ":" + timeRemainingToNextAzan.minute + " مانده تا طلوع خورشید";
                }
                else
                {
                    if (azan_ttt.getTime() === today.getTime())
                    {
                        offshownow();
                        azan_time[2].isAzan = true;
                        timeRemainingToNextAzan.message = "طلوع خورشید";
                    }
                    else
                    {
                        azan_ttt = new Date();
                        azan_ttt.setHours(azan_time[3].hour);
                        azan_ttt.setMinutes(azan_time[3].minute);
                        if (azan_ttt.getTime() > today.getTime())
                        {
                            offshownow();
                            azan_time[3].isAzan = true;
                            diff = azan_ttt.getTime() - today.getTime();
                            diff = Math.floor(diff / (1000 * 60));
                            timeRemainingToNextAzan.hour = Math.floor(diff / (60));
                            timeRemainingToNextAzan.minute = diff - (timeRemainingToNextAzan.hour * 60);
                            if (timeRemainingToNextAzan.minute >= 60) {
                                timeRemainingToNextAzan.hour++;
                                timeRemainingToNextAzan.minute -= 60;
                            }
                            timeRemainingToNextAzan.message = timeRemainingToNextAzan.hour + ":" + timeRemainingToNextAzan.minute + " مانده تا اذان ظهر";
                        }
                        else
                        {
                            if (azan_ttt.getTime() === today.getTime())
                            {
                                offshownow();
                                azan_time[3].isAzan = true;
                                timeRemainingToNextAzan.message = "اذان ظهر به افق " + cities[selectedCityIndex].name;
                            }
                            else
                            {
                                azan_ttt = new Date();
                                azan_ttt.setHours(azan_time[4].hour);
                                azan_ttt.setMinutes(azan_time[4].minute);
                                if (azan_ttt.getTime() > today.getTime())
                                {
                                    offshownow();
                                    azan_time[4].isAzan = true;
                                    diff = azan_ttt.getTime() - today.getTime();
                                    diff = Math.floor(diff / (1000 * 60));
                                    timeRemainingToNextAzan.hour = Math.floor(diff / (60));
                                    timeRemainingToNextAzan.minute = diff - (timeRemainingToNextAzan.hour * 60);
                                    if (timeRemainingToNextAzan.minute >= 60) {
                                        timeRemainingToNextAzan.hour++;
                                        timeRemainingToNextAzan.minute -= 60;
                                    }
                                    timeRemainingToNextAzan.message = timeRemainingToNextAzan.hour + ":" + timeRemainingToNextAzan.minute + " مانده تا غروب خورشید";
                                }
                                else
                                {
                                    if (azan_ttt.getTime() === today.getTime())
                                    {
                                        offshownow();
                                        azan_time[4].isAzan = true;
                                        timeRemainingToNextAzan.message = "غروب خورشید";
                                    }
                                    else
                                    {

                                        azan_ttt = new Date();
                                        azan_ttt.setHours(azan_time[5].hour);
                                        azan_ttt.setMinutes(azan_time[5].minute);
                                        if (azan_ttt.getTime() > today.getTime())
                                        {
                                            offshownow();
                                            azan_time[5].isAzan = true;
                                            diff = azan_ttt.getTime() - today.getTime();
                                            diff = Math.floor(diff / (1000 * 60));
                                            timeRemainingToNextAzan.hour = Math.floor(diff / (60));
                                            timeRemainingToNextAzan.minute = diff - (timeRemainingToNextAzan.hour * 60);
                                            if (timeRemainingToNextAzan.minute >= 60) {
                                                timeRemainingToNextAzan.hour++;
                                                timeRemainingToNextAzan.minute -= 60;
                                            }
                                            timeRemainingToNextAzan.message = timeRemainingToNextAzan.hour + ":" + timeRemainingToNextAzan.minute + " مانده تا اذان مغرب";
                                        }
                                        else
                                        {
                                            if (azan_ttt.getTime() === today.getTime())
                                            {
                                                offshownow();
                                                azan_time[5].isAzan = true;
                                                timeRemainingToNextAzan.message = "اذان مغرب به افق " + cities[selectedCityIndex].name;
                                            }
                                            else
                                            {
                                                azan_ttt = new Date();
                                                azan_ttt.setHours(23);
                                                azan_ttt.setMinutes(59);
                                                diff = azan_ttt.getTime() - today.getTime();
                                                diff = Math.floor(diff / (1000 * 60));
                                                timeRemainingToNextAzan.hour = Math.floor(diff / (60));
                                                timeRemainingToNextAzan.minute = diff - (timeRemainingToNextAzan.hour * 60);
                                                if (timeRemainingToNextAzan.minute >= 60) {
                                                    timeRemainingToNextAzan.hour++;
                                                    timeRemainingToNextAzan.minute -= 60;
                                                }

                                                offshownow();
                                                azan_time[1].isAzan = true;
                                                //document.getElementById("azan_p1").src = "flasher.gif";


                                                timeRemainingToNextAzan.hour += Math.floor(azan_time[1].hour);
                                                timeRemainingToNextAzan.minute += Math.floor(azan_time[1].minute);
                                                if (timeRemainingToNextAzan.minute >= 60) {
                                                    timeRemainingToNextAzan.hour++;
                                                    timeRemainingToNextAzan.minute -= 60;
                                                }

                                                timeRemainingToNextAzan.message = timeRemainingToNextAzan.hour + ":" + timeRemainingToNextAzan.minute + " مانده تا اذادن صبح";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //setTimeout("shownow()", 20000);
    };
    var show = function()
    {
        var table = '';
        table += '<table style="text-align: center;width: 100%;height: 100%;">';

        table += '<tr>';
        table += '<td colspan="3">' + timeRemainingToNextAzan.message + '</td>';
        table += '</tr>';

        table += '<tr>';
        table += '<td colspan="3">' + jalaliYear + "-" + jalaliMonth + "-" + jalaliDay + '</td>';
        table += '</tr>';

        for (var i = 1; i <= 5; i++)
        {
            table += '<tr>';
            table += '<td>' + azan_time[i].name + '</td>';
            if (azan_time[i].isAzan)
            {
                table += '<td><img alt="" src="data:image/gif;base64,R0lGODlhCgAHAJAAAPdxIQAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJGQABACwAAAAACgAHAAACDoxhmYB6DKOMYcLnVFMFACH5BAUKAAEALAAAAAAKAAcAAAIHjI+py+2PCgAh+QQJDwABACwAAAAACgAHAAACDoxhmYB6DKOMYcLnVFMFACH5BAUeAAEALAAAAAAKAAcAAAIHjI+py+2PCgA7"/></td>';
            }
            else
            {
                table += '<td><img alt="" src="data:image/gif;base64,R0lGODlhCgAHAIABAPdxIf///yH5BAEAAAEALAAAAAAKAAcAAAIOjGGZgHoMo4xhwudUUwUAOw=="/></td>';
            }
            table += '<td>' + azan_time[i].time + '</td>';
            table += '</tr>';
        }

        table += '<tr>';
        table += '<td colspan="3">' + createSelect() + '</td>';
        echo('</tr>');
        table += '</table>';
        echo(table);
    };
    var echo = function(str)
    {
        document.getElementById(id).innerHTML += str;
    };
    var clear = function()
    {
        document.getElementById(id).innerHTML = "";
    };
    var createSelect = function()
    {
        var select = "";
        select += "<select onchange='Owghat.run({selectedCityIndex:this.value , id:\"" + id + "\"});' > ";
        for (var j = 0; j < cities.length; j++)
        {
            if (j == selectedCityIndex)
            {
                select += "<option selected value='" + cities[j].value + "'>" + cities[j].name + "</option>";
            }
            else
            {
                select += "<option value='" + cities[j].value + "'>" + cities[j].name + "</option>";
            }
        }
        select += "</select>";
        return select;
    };
    var extend = function(defaults, options)
    {
        var settings = {};
        for (var i in defaults)
        {
            if (options.hasOwnProperty(i))
            {
                settings[i] = options[i];
            }
            else
            {
                settings[i] = defaults[i];
            }
        }
        return settings;
    };
};
