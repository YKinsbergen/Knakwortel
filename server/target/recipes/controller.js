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
let PlaceholderController = class PlaceholderController {
    constructor() {
        this.allAdvertisements = async () => {
            const placeholders = await entity_1.default.find();
            return { placeholders };
        };
    }
    getAd(id) {
        return entity_1.default.findOne(id);
    }
    createAd(placeholder) {
        return placeholder.save();
    }
};
__decorate([
    routing_controllers_1.Get('/placeholders'),
    __metadata("design:type", Object)
], PlaceholderController.prototype, "allAdvertisements", void 0);
__decorate([
    routing_controllers_1.Get('/ads/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlaceholderController.prototype, "getAd", null);
__decorate([
    routing_controllers_1.Post('/ads'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.default]),
    __metadata("design:returntype", void 0)
], PlaceholderController.prototype, "createAd", null);
PlaceholderController = __decorate([
    routing_controllers_1.JsonController()
], PlaceholderController);
exports.PlaceholderController = PlaceholderController;
//# sourceMappingURL=controller.js.map