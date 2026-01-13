const {
    validateBody,
} = require('../middlewares/validator/validator')
const {
    login, refreshtoken, register,
} = require('../schemas/user.schema');
const BaseController = require('./base.controller');
const userService = require('../services/user.service');
const _ = require('lodash')
const axios = require('axios')

class RoleController extends BaseController{
    static run(app) {
        app.get('/v1/roles', this.handler('getRoles'));
        
        app.get('/v1/roles/health', this.handler('checkHealth'));
    }
    async getRoles(req, res, next){
        return res.json({ msg: 'not-test'})
    }

    async checkHealth(req, res, next){
        return res.json({ msg: 'true'})
    }
}


module.exports = RoleController;
