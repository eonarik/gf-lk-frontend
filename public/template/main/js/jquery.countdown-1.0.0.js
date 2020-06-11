
    $.fn.extend({
        countdown: function (params) {
            var df = $.extend({
                dateTimeAttribute: 'data-countdown',
                dateDaysAttribute: 'data-countdown-days',
                dateDaysPluralAttribute: 'data-countdown-days-plural',
                dateHoursAttribute: 'data-countdown-hours',
                dateHoursPluralAttribute: 'data-countdown-hours-plural',
                dateMinutsAttribute: 'data-countdown-minuts',
                dateMinutsPluralAttribute: 'data-countdown-minuts-plural',
                dateSecondsAttribute: 'data-countdown-seconds',
                dateSecondsPluralAttribute: 'data-countdown-seconds-plural',
            }, params ? params : {});
        
            var plural = function (number) {
                number = parseInt(number);
                return function (one, two, many) {
                    if (number % 10 === 0 || number % 10 >= 5 || number % 100 >= 10 && number % 100 <= 20) {
                        return many;
                    }
                    if (number % 10 >= 2 && number % 10 <= 4) {
                        return two;
                    }
                    if (number % 10 === 1) {
                        return one;
                    }
                }
            }
            
            var addNulls = function (number, numberLength) {
                number = `${number}`;
                numberLength = numberLength || 2;
                
                var up = Math.pow(10, numberLength - 1);
                var outNumber = number;
                if (number.length < numberLength) {
                    for (var i = 0; i < numberLength - number.length; i++) {
                        outNumber = '0' + outNumber;
                    }
                }
                return outNumber;
            }
            
            var updateCountdown = function ($this, diffSeconds) {
                var days = parseInt(diffSeconds / (60 * 60 * 24));
                var hours = parseInt((diffSeconds % (60 * 60 * 24)) / (60 * 60));
                var minuts = parseInt((diffSeconds % (60 * 60)) / 60);
                var seconds = parseInt(diffSeconds % 60);
                
                if (days > 0) {
                    $this.find(`[${df.dateDaysAttribute}]`).text(days);
                    $this.find(`[${df.dateDaysPluralAttribute}]`).text(plural(days)('день', 'дня', 'дней'));
                } else {
                    $this.find(`[${df.dateDaysAttribute}]`).hide().next().hide();
                }
                
                $this.find(`[${df.dateHoursAttribute}]`).text(addNulls(hours));
                $this.find(`[${df.dateHoursPluralAttribute}]`).text(plural(hours)('час', 'часа', 'часов'));
                
                $this.find(`[${df.dateMinutsAttribute}]`).text(addNulls(minuts));
                $this.find(`[${df.dateMinutsPluralAttribute}]`).text(plural(minuts)('минута', 'минуты', 'минут'));
                
                $this.find(`[${df.dateSecondsAttribute}]`).text(addNulls(seconds));
                $this.find(`[${df.dateSecondsPluralAttribute}]`).text(plural(seconds)('секунда', 'секунды', 'секунд'));
            }
    
            return this.each(function () {
                var $this = $(this);
                var diffSeconds = parseInt((new Date($this.attr(df.dateTimeAttribute)).getTime() - new Date().getTime()) / 1000);
                
                if (diffSeconds > 0) {
                    var timer = setInterval(function () {
                        if (--diffSeconds > 0) {
                            updateCountdown($this, diffSeconds);
                        } else {
                            clearInterval(timer);
                        }
                    }, 1000);
                }
            });
        }
    });