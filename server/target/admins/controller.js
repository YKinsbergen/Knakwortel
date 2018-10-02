"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
let AdminController = class AdminController {
    async signup(email, password) {
        const emailExistst = await entity_1.default.count({ where: { email } });
        if (emailExistst > 0) {
            throw new routing_controllers_1.BadRequestError('Email already in use');
        }
        const entity = entity_1.default.create({ email });
        await entity.setPassword(password);
        const admin = await entity.save();
        return admin;
    }
    async updateAdmin(update, id) {
        const admin = await entity_1.default.findOne(id);
        if (!admin)
            throw new routing_controllers_1.NotFoundError('Admin does not exist');
        return entity_1.default.merge(admin, update).save();
    }
    getAdmin(id) {
        return entity_1.default.findOne(id);
    }
    allAdmins() {
        return entity_1.default.find();
    }
};
__decorate([
    routing_controllers_1.Post('/admins'),
    __param(0, routing_controllers_1.BodyParam('email')),
    __param(1, routing_controllers_1.BodyParam('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "signup", null);
__decorate([
    routing_controllers_1.Put('/admins/:id'),
    __param(0, routing_controllers_1.Body()),
    __param(1, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateAdmin", null);
__decorate([
    routing_controllers_1.Get('/admins/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getAdmin", null);
__decorate([
    routing_controllers_1.Get('/admins'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "allAdmins", null);
AdminController = __decorate([
    routing_controllers_1.JsonController()
], AdminController);
exports.default = AdminController;
//# sourceMappingURL=controller.js.map