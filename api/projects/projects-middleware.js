const Project = require('./projects-model')

async function validateProjectId(req, res, next) {
        try {
            const { id } = req.params
            const project = await Project.get(id)
                if (!project) {
                    next({
                        status: 404,
                        message: 'Project not found'
                    })
                } else {
                    req.project = project
                    next()
                }
        } catch (err) {
            next(err)
        }
}

function validateProjectBody(req, res, next) {
    const { name, description, completed } = req.body

    if (!name || !description || completed === undefined) {
        next({
            status: 400,
            message: "Missing required name and description fields"
        })
    } else {
        next()
    }
}

module.exports = {
    validateProjectId,
    validateProjectBody
}