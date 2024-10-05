# Alarm_Clock_JS


## General info
This project is simple alarm clock write in HTML and JavaScript after hours.
The idea to create “JS Alarm Clock” was born at work. I used another tool on a daily basis, but unfortunately it was blocked by ITSec department. This forced me to use the basic “clock” built into Windows 10, which annoyed me a lot. So I decided to create my own version run locally in the browser, which is unlikely to be banned :)
	
## How to use it?

1. Open "alarm_list.js" in any text editor (for example notepad or VS Code).
2. In the “alarms” list you can define your alarms (delete, add, edit) according to the following formula:
   ```javascript
    {
            //Title - the name of the alarm to be displayed
            title: 'DEBUG',
            //days - the days of the week on which the alarm should be triggered
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            //time - the time at which the alarm should be triggered in 24-hour format (HH:MM:SS)
            time: '01:25:00',
            //sound - the sound to be played from the project folder, when the alarm is triggered (you can also add your favourite music)
            sound: 'Cuckoo.mp3'
    },
    ```
3. Save and close it.
4. Open "alarm.html" in your favourite web browser.
5. Once the alarm list has been launched, click "Activate Alarm" (that should trigger SilenceLife.mp3 to maintain 'focus' on the tab even if it is not active)
6. To turn off the triggered alarm, click “Close” - this will also copy your signature along with the time to the clipboard (useful when filling out checklists)


![Alarm_JS](https://github.com/user-attachments/assets/703cc2d6-3208-4c64-96ea-94e58988a2f5)


## Setup
To run this project, download it to the folder, follow with steps in "How to use it?" and have fun :)
