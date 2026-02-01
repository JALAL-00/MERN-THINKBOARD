export function getAllNotes(req, res) {
    res.status(200).send("You have received the notes");
};

export function createNote(req, res) {
    res.status(201).json({ message: "Note updated", id: req.params.id});
};

export function updateNote(req, res) {
    res.status(201).json({ message: "Note updated", id: req.params.id});
};

export function deleteNote(req, res) {
    res.status(201).json({ message: "Note deleted", id: req.params.id});
};