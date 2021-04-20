const searchTerm = "normal"

const notes = [
    {
        id: 1,
        subject: "objects and arrays",
        date: "04/05/21",
        feeling: "normal",
        timeSpent: 1,
    },
    {
        id: 2,
        subject: "more objects and arrays",
        date: "04/20/21",
        feeling: "tired",
        timeSpent: 4,
    }
]

const noteAboutToday = {
    id: 3,
    subject: "doing daily journal project",
    date: "04/20/21",
    feeling: "tired",
    timeSpent: 4,
}

notes.push(noteAboutToday)

for (const note of notes) {
    if (searchTerm in note === true) {
        console.log(`Note ${note.id}
    ${note.date}
    I learned ${note.subject}
    I spent ${note.timeSpent} hours working on it
    I felt ${note.feeling}`)
    }
}
