const router = require("express").Router();
const Employee = require("../models/employeeModel");
const employeeMethods = require("../controllers/employeeController");

//Create
router.post("/", (req, res) => {
    let newEmployee = new Employee({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    });
    newEmployee.save(err => {
        if (err) {
            res.status(500).send({ message: "Invalid" })
        } else {
            res.send({ message: "Success !" });
        }
    });

});
router.post("/many", (req, res) => {
    let data = [
        {
            name: "Bhavya",
            age: 43,
            gender: "female"
        },

        {
            name: "Ramya",
            age: 43,
            gender: "female"
        },
        {
            name: "Durgesh",
            age: 65,
            gender: "female"
        },
        {
            name: "Dhana",
            age: 30,
            gender: "female"
        }
    ];
    Employee.insertMany(data, err => {
        if (err) {
            res.status(500).send({ message: "Invalid" })
        } else {
            res.send({ message: "Success !" });
        }
    });

});

router.get("/", (req, res) => {
    employeeMethods.get()
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.status(500).send(err);
        })
});
router.get("/:id", (req, res) => {
    employeeMethods.getById(req.params.id)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.status(err.status).send(err);
        })
});
router.get("/async/:id", async (req, res) => {
    try {
        let employee = await Employee.findById(req.params.id);
        let employees = await Employee.find();

        // Employee.findById(req.params.id,(err0,employee)=>{
        //     Employee.find({},(err1,employees)=>{
        //         res.send({employees,employee})
        //     })
        // }); CALLBACK HELL

        res.send({ employee, employees });
    } catch (ex) {
        res.status(500).send({error:"error in query"})
    }
});




module.exports = router;