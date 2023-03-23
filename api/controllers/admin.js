const Admin = require("../models/Admin");

exports.getAllAdmin = (req, res) => {
    Admin.find()
        .then((Admin) => res.json(Admin))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Admin not found", error: err.message })
        );
};

exports.postCreateAdmin = (req, res) => {
    Admin.create(req.body)
        .then((data) => res.json({ message: "Admin added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add Admin", error: err.message })
        );
};

exports.putUpdateAdmin = (req, res) => {
    Admin.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update Admin", error: err.message })
        );
};

exports.deleteAdmin = (req, res) => {
    Admin.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Admin deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};