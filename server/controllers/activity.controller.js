const { model } = require('mongoose');
const activity = require('../models/activity.model');

module.exports.create = async (req, res) => {
    try {
        const activities = await activity.find();
        let sameActivity = false;

        activities.map((items) => {
            if (items.activityName === req.body.activityName) {
                sameActivity = true;
            }
        });

        if (sameActivity) {
            res.status(400).json({
                message: 'Ya existe esta actividad',
            });
            return true;
        }

        const test = await activity.create(req.body);

        res.json({
            message: 'Actividad Creada',
            test,
            body: req.body,
        });
    } catch (error) {
        res.status(500).json({
            body: req.body,
            message: 'Error al crear la actividad',
            error,
        });
    }
};

module.exports.index = async (req, res) => {
    try {
        const verActividad = await activity.find({ status: req.query.select }).sort({ dueDate: 1 });
        res.json(verActividad)
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido obtener las actividades',
            error,
        });
    }
};

module.exports.edit = async (req, res) => {
    try {
        let EditarActividad = await activity.findOne({ _id: req.params.id });
        EditarActividad.status = req.body.status;
        EditarActividad.save();
        res.json({ message: 'Actualizado' })
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido obtener las actividades',
            error,
        });
    }
};

module.exports.remove = async (req, res) => {
    try {
        await activity.deleteOne({ _id: req.params.id });
        res.json({
            message: "Actividad Eliminada"
        })
    } catch (error) {
        res.status(500).json({
            id: req.params.id,
            message: 'No hemos podido Eliminar la Actividad',
            error,
        });
    }
};