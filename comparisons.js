"use strict";

const dayStart = "07:30";
const dayEnd = "17:45";

function from_time_to_numbers(input_time) {
    let [time_hour, time_min] = input_time.split(':');
    return [Number(time_hour),Number(time_min)]
}
function from_num_to_time(hour, minutes){
    return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function scheduleMeeting(startTime,durationMinutes) {
    let [start_hour, start_min] = from_time_to_numbers(startTime);

    let duration_hour = Math.floor(Number(durationMinutes) / 60);
    let duration_min = Number(durationMinutes) % 60;

    let end_hour = start_hour + duration_hour;
    let end_minutes = start_min + duration_min;

    return dayStart <= from_num_to_time(start_hour, start_min) && dayEnd >= from_num_to_time(end_hour, end_minutes);
}

scheduleMeeting("7:00",15);     // false
scheduleMeeting("07:15",30);    // false
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false
