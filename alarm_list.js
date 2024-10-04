function load_colors() {
    const colors = ["red","black"];
    return colors;
}


function load_alarms() {
    const alarms = [
        {
            title: 'DEBUG',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: '01:25:00',
            sound: 'Cuckoo.mp3'
        },
        {
            title: 'TEST',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: '01:30:00',
            sound: 'Cuckoo.mp3'
        },
        {
            title: 'Check active requests',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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