function load_colors() {
    const colors = ["red","black"];
    return colors;
}


function load_alarms() {
    const alarms = [
        {
            //Title - the name of the alarm to be displayed
            title: 'DEBUG',
            //days - the days of the week on which the alarm should be triggered
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            //time - the time at which the alarm should be triggered in 24-hour format (HH:MM:SS)
            time: '02:25:00',
            //sound - the sound to be played from the project folder, when the alarm is triggered (you can add your favourite music)
            sound: 'Cuckoo.mp3'
        },
        {
            title: 'TEST',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: '02:32:00',
            sound: 'Cuckoo.mp3'
        },
        {
            title: 'Check active requests',
            days: ['Monday', 'Wednesday', 'Friday'],
            time: '07:05:00', 
            sound: 'Cuckoo.mp3'
        },
        {
            title: 'Verify e-mail',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: '07:20:00',
            sound: 'Clock.mp3'
        },
        {
            title: 'Daily meeting',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            time: '09:00:00',
            sound: 'Clock.mp3'
        },
        {
            title: 'Test meeting',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            time: '10:58:00',
            sound: 'Clock.mp3'
        },
        {
            title: 'Close Last Incident',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: '14:50:00',
            sound: 'Clock.mp3'
        },
        
    ];

    return alarms;
}