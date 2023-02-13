const todos = [
    {
        id: Math.round(Math.random() *1000000),
        title: "Learn PHP",
        description: "Learn a new web technology",
        priority: "low",
        completed: false
    },
    {
        id: Math.round(Math.random() *1000000),
        title: "Clean corridor",
        description: "Sweep dust from the corridor",
        priority: "low",
        completed: true
    },
    {
        id: Math.round(Math.random() *1000000),
        title: "Finish reading novel",
        description: "Read the last 2 chapters of The Da Vinci Code",
        priority: "low",
        completed: false
    },
    {
        id: Math.round(Math.random() *1000000),
        title: "Debug",
        description: "Debug my Todo app I built last week",
        priority: "medium",
        completed: false
    },
    {
        id: Math.round(Math.random() *1000000),
        title: "Pay bill",
        description: "Pay the water and electricity bills",
        priority: "high",
        completed: false
    }
]

export default todos;