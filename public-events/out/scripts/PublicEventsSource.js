/// <reference path='../../../lib/vss' />
define(["require", "exports", "q"], function (require, exports, Q) {
    var PublicEventsSource = (function () {
        function PublicEventsSource() {
            this.id = "publicEvents";
            this.name = "US holidays";
            this.order = 1;
        }
        PublicEventsSource.prototype.getEvents = function (query) {
            return Q.resolve(PublicEventsSource._events.map(function (holiday) {
                return {
                    title: holiday.localName,
                    startDate: new Date(holiday.date.year, holiday.date.month - 1, holiday.date.day).toJSON()
                };
            }));
        };
        PublicEventsSource.prototype.getCategories = function (query) {
            return Q.resolve([]);
        };
        PublicEventsSource.prototype.getTitleUrl = function () {
            return Q.resolve("http://www.timeanddate.com/holidays/us/");
        };
        PublicEventsSource._events = [{ "date": { "day": 17, "month": 1, "year": 2011, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 21, "month": 2, "year": 2011, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 30, "month": 5, "year": 2011, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2011, "dayOfWeek": 1 }, "localName": "Independence Day", "englishName": "Independence Day" }, { "date": { "day": 5, "month": 9, "year": 2011, "dayOfWeek": 1 }, "localName": "Labor Day", "englishName": "Labor Day" }, { "date": { "day": 10, "month": 10, "year": 2011, "dayOfWeek": 1 }, "localName": "Columbus Day", "englishName": "Columbus Day" }, { "date": { "day": 11, "month": 11, "year": 2011, "dayOfWeek": 5 }, "localName": "Veterans' Day", "englishName": "Veterans' Day" }, { "date": { "day": 24, "month": 11, "year": 2011, "dayOfWeek": 4 }, "localName": "Thanksgiving Day", "englishName": "Thanksgiving Day" }, { "date": { "day": 25, "month": 12, "year": 2011, "dayOfWeek": 0 }, "localName": "Christmas Day", "englishName": "Christmas Day" }, { "date": { "day": 1, "month": 1, "year": 2012, "dayOfWeek": 0 }, "localName": "New Year's Day", "englishName": "New Year's Day" }, { "date": { "day": 16, "month": 1, "year": 2012, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 20, "month": 2, "year": 2012, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 28, "month": 5, "year": 2012, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2012, "dayOfWeek": 3 }, "localName": "Independence Day", "englishName": "Independence Day" }, { "date": { "day": 3, "month": 9, "year": 2012, "dayOfWeek": 1 }, "localName": "Labor Day", "englishName": "Labor Day" }, { "date": { "day": 8, "month": 10, "year": 2012, "dayOfWeek": 1 }, "localName": "Columbus Day", "englishName": "Columbus Day" }, { "date": { "day": 11, "month": 11, "year": 2012, "dayOfWeek": 0 }, "localName": "Veterans' Day", "englishName": "Veterans' Day" }, { "date": { "day": 22, "month": 11, "year": 2012, "dayOfWeek": 4 }, "localName": "Thanksgiving Day", "englishName": "Thanksgiving Day" }, { "date": { "day": 25, "month": 12, "year": 2012, "dayOfWeek": 2 }, "localName": "Christmas Day", "englishName": "Christmas Day" }, { "date": { "day": 1, "month": 1, "year": 2013, "dayOfWeek": 2 }, "localName": "New Year's Day", "englishName": "New Year's Day" }, { "date": { "day": 21, "month": 1, "year": 2013, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 18, "month": 2, "year": 2013, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 27, "month": 5, "year": 2013, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2013, "dayOfWeek": 4 }, "localName": "Independence Day", "englishName": "Independence Day" }, { "date": { "day": 2, "month": 9, "year": 2013, "dayOfWeek": 1 }, "localName": "Labor Day", "englishName": "Labor Day" }, { "date": { "day": 14, "month": 10, "year": 2013, "dayOfWeek": 1 }, "localName": "Columbus Day", "englishName": "Columbus Day" }, { "date": { "day": 11, "month": 11, "year": 2013, "dayOfWeek": 1 }, "localName": "Veterans' Day", "englishName": "Veterans' Day" }, { "date": { "day": 28, "month": 11, "year": 2013, "dayOfWeek": 4 }, "localName": "Thanksgiving Day", "englishName": "Thanksgiving Day" }, { "date": { "day": 25, "month": 12, "year": 2013, "dayOfWeek": 3 }, "localName": "Christmas Day", "englishName": "Christmas Day" }, { "date": { "day": 1, "month": 1, "year": 2014, "dayOfWeek": 3 }, "localName": "New Year's Day", "englishName": "New Year's Day" }, { "date": { "day": 20, "month": 1, "year": 2014, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 17, "month": 2, "year": 2014, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 26, "month": 5, "year": 2014, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2014, "dayOfWeek": 5 }, "localName": "Independence Day", "englishName": "Independence Day" }, { "date": { "day": 1, "month": 9, "year": 2014, "dayOfWeek": 1 }, "localName": "Labor Day", "englishName": "Labor Day" }, { "date": { "day": 13, "month": 10, "year": 2014, "dayOfWeek": 1 }, "localName": "Columbus Day", "englishName": "Columbus Day" }, { "date": { "day": 11, "month": 11, "year": 2014, "dayOfWeek": 2 }, "localName": "Veterans' Day", "englishName": "Veterans' Day" }, { "date": { "day": 27, "month": 11, "year": 2014, "dayOfWeek": 4 }, "localName": "Thanksgiving Day", "englishName": "Thanksgiving Day" }, { "date": { "day": 25, "month": 12, "year": 2014, "dayOfWeek": 4 }, "localName": "Christmas Day", "englishName": "Christmas Day" }, { "date": { "day": 1, "month": 1, "year": 2015, "dayOfWeek": 4 }, "localName": "New Year's Day", "englishName": "New Year's Day" }, { "date": { "day": 19, "month": 1, "year": 2015, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 16, "month": 2, "year": 2015, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 25, "month": 5, "year": 2015, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2015, "dayOfWeek": 4 }, "localName": "Independence Day", "englishName": "Independence Day" }, { "date": { "day": 7, "month": 9, "year": 2015, "dayOfWeek": 1 }, "localName": "Labor Day", "englishName": "Labor Day" }, { "date": { "day": 12, "month": 10, "year": 2015, "dayOfWeek": 1 }, "localName": "Columbus Day", "englishName": "Columbus Day" }, { "date": { "day": 11, "month": 11, "year": 2015, "dayOfWeek": 3 }, "localName": "Veterans' Day", "englishName": "Veterans' Day" }, { "date": { "day": 26, "month": 11, "year": 2015, "dayOfWeek": 4 }, "localName": "Thanksgiving Day", "englishName": "Thanksgiving Day" }, { "date": { "day": 25, "month": 12, "year": 2015, "dayOfWeek": 5 }, "localName": "Christmas Day", "englishName": "Christmas Day" }, { "date": { "day": 1, "month": 1, "year": 2016, "dayOfWeek": 5 }, "localName": "New Year's Day", "englishName": "New Year's Day" }, { "date": { "day": 18, "month": 1, "year": 2016, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 15, "month": 2, "year": 2016, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 30, "month": 5, "year": 2016, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2016, "dayOfWeek": 1 }, "localName": "Independence Day", "englishName": "Independence Day" }, { "date": { "day": 5, "month": 9, "year": 2016, "dayOfWeek": 1 }, "localName": "Labor Day", "englishName": "Labor Day" }, { "date": { "day": 10, "month": 10, "year": 2016, "dayOfWeek": 1 }, "localName": "Columbus Day", "englishName": "Columbus Day" }, { "date": { "day": 11, "month": 11, "year": 2016, "dayOfWeek": 5 }, "localName": "Veterans' Day", "englishName": "Veterans' Day" }, { "date": { "day": 24, "month": 11, "year": 2016, "dayOfWeek": 4 }, "localName": "Thanksgiving Day", "englishName": "Thanksgiving Day" }, { "date": { "day": 25, "month": 12, "year": 2016, "dayOfWeek": 0 }, "localName": "Christmas Day", "englishName": "Christmas Day" }, { "date": { "day": 1, "month": 1, "year": 2017, "dayOfWeek": 0 }, "localName": "New Year's Day", "englishName": "New Year's Day" }, { "date": { "day": 16, "month": 1, "year": 2017, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 20, "month": 2, "year": 2017, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 29, "month": 5, "year": 2017, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2017, "dayOfWeek": 2 }, "localName": "Independence Day", "englishName": "Independence Day" }, { "date": { "day": 4, "month": 9, "year": 2017, "dayOfWeek": 1 }, "localName": "Labor Day", "englishName": "Labor Day" }, { "date": { "day": 9, "month": 10, "year": 2017, "dayOfWeek": 1 }, "localName": "Columbus Day", "englishName": "Columbus Day" }, { "date": { "day": 11, "month": 11, "year": 2017, "dayOfWeek": 6 }, "localName": "Veterans' Day", "englishName": "Veterans' Day" }, { "date": { "day": 23, "month": 11, "year": 2017, "dayOfWeek": 4 }, "localName": "Thanksgiving Day", "englishName": "Thanksgiving Day" }, { "date": { "day": 25, "month": 12, "year": 2017, "dayOfWeek": 1 }, "localName": "Christmas Day", "englishName": "Christmas Day" }, { "date": { "day": 1, "month": 1, "year": 2018, "dayOfWeek": 1 }, "localName": "New Year's Day", "englishName": "New Year's Day" }, { "date": { "day": 15, "month": 1, "year": 2018, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 19, "month": 2, "year": 2018, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 28, "month": 5, "year": 2018, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2018, "dayOfWeek": 3 }, "localName": "Independence Day", "englishName": "Independence Day" }, { "date": { "day": 3, "month": 9, "year": 2018, "dayOfWeek": 1 }, "localName": "Labor Day", "englishName": "Labor Day" }, { "date": { "day": 8, "month": 10, "year": 2018, "dayOfWeek": 1 }, "localName": "Columbus Day", "englishName": "Columbus Day" }, { "date": { "day": 11, "month": 11, "year": 2018, "dayOfWeek": 0 }, "localName": "Veterans' Day", "englishName": "Veterans' Day" }, { "date": { "day": 22, "month": 11, "year": 2018, "dayOfWeek": 4 }, "localName": "Thanksgiving Day", "englishName": "Thanksgiving Day" }, { "date": { "day": 25, "month": 12, "year": 2018, "dayOfWeek": 2 }, "localName": "Christmas Day", "englishName": "Christmas Day" }, { "date": { "day": 1, "month": 1, "year": 2019, "dayOfWeek": 2 }, "localName": "New Year's Day", "englishName": "New Year's Day" }, { "date": { "day": 21, "month": 1, "year": 2019, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 18, "month": 2, "year": 2019, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 27, "month": 5, "year": 2019, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2019, "dayOfWeek": 4 }, "localName": "Independence Day", "englishName": "Independence Day" }, { "date": { "day": 2, "month": 9, "year": 2019, "dayOfWeek": 1 }, "localName": "Labor Day", "englishName": "Labor Day" }, { "date": { "day": 14, "month": 10, "year": 2019, "dayOfWeek": 1 }, "localName": "Columbus Day", "englishName": "Columbus Day" }, { "date": { "day": 11, "month": 11, "year": 2019, "dayOfWeek": 1 }, "localName": "Veterans' Day", "englishName": "Veterans' Day" }, { "date": { "day": 28, "month": 11, "year": 2019, "dayOfWeek": 4 }, "localName": "Thanksgiving Day", "englishName": "Thanksgiving Day" }, { "date": { "day": 25, "month": 12, "year": 2019, "dayOfWeek": 3 }, "localName": "Christmas Day", "englishName": "Christmas Day" }, { "date": { "day": 1, "month": 1, "year": 2020, "dayOfWeek": 3 }, "localName": "New Year's Day", "englishName": "New Year's Day" }, { "date": { "day": 20, "month": 1, "year": 2020, "dayOfWeek": 1 }, "localName": "Birthday of Martin Luther King, Jr.", "englishName": "Birthday of Martin Luther King, Jr." }, { "date": { "day": 17, "month": 2, "year": 2020, "dayOfWeek": 1 }, "localName": "Washington's Birthday", "englishName": "Washington's Birthday" }, { "date": { "day": 25, "month": 5, "year": 2020, "dayOfWeek": 1 }, "localName": "Memorial Day", "englishName": "Memorial Day" }, { "date": { "day": 4, "month": 7, "year": 2020, "dayOfWeek": 6 }, "localName": "Independence Day", "englishName": "Independence Day" }];
        return PublicEventsSource;
    })();
    exports.PublicEventsSource = PublicEventsSource;
});